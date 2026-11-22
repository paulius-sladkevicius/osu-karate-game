// SPDX-License-Identifier: BUSL-1.1
// Kombinacijų atpažinimas: krypčių seka + mygtukas. Grynas modulis (be DOM), testuojamas Node aplinkoje.
// Kryptys visada santykinės: F = link varžovo (→), B = nuo varžovo (←), U, D ir įstrižainės.

const BUTTONS = new Set(['A', 'K', 'G', 'KIAI']);
const ANGLE = { F: 0, UF: 45, U: 90, UB: 135, B: 180, DB: 225, D: 270, DF: 315 };

// Ar istorijos įrašas tenkina šablono elementą `tok`. Kardinalioms kryptims naudojama „efektyvi“ kryptis (eff):
// įstrižainė, į kurią ateita iš kardinalios krypties, reiškia naujai pridėtą kryptį (→ tada ↘ = ketinimas ↓).
function has(h, tok) {
  return tok.length === 2 ? h.dir === tok : h.eff.includes(tok);
}

function weight(input) {
  let w = 0;
  for (const tok of input) w += tok === 'CIRCLE' ? 4 : 1;
  return w;
}

function matchSeq(tokens, hist, presses, now, cfg, limit) {
  const n = tokens.length;
  if (!n) return true;
  const last = tokens[n - 1];
  if (BUTTONS.has(last)) {
    // Šablone yra ankstesnis mygtuko paspaudimas (pvz., ↑↑K K).
    for (let i = presses.length - 1; i >= 0; i--) {
      const p = presses[i];
      if (p.btn !== last) continue;
      if (now - p.t > cfg.bufferMs) return false;
      return matchSeq(tokens.slice(0, -1), hist.filter((h) => h.t <= p.t), presses.slice(0, i), p.t, cfg, cfg.buttonMs);
    }
    return false;
  }
  let idx = hist.length - 1;
  let nextStart = now;
  for (let k = n - 1; k >= 0; k--) {
    const tok = tokens[k];
    if (tok === 'CIRCLE') {
      while (idx >= 0 && hist[idx].dir === 'N') idx--;
      if (idx < 1) return false;
      const end = idx + 1 < hist.length ? hist[idx + 1].t : now;
      if (nextStart - end > limit) return false;
      let total = 0;
      let sign = 0;
      let j = idx;
      while (j - 1 >= 0 && hist[j - 1].dir !== 'N' && total < 360) {
        let d = ANGLE[hist[j].dir] - ANGLE[hist[j - 1].dir];
        d = ((d + 540) % 360) - 180;
        if (d === 0 || Math.abs(d) > 90) break;
        if (sign && Math.sign(d) !== sign) break;
        if (hist[j].t - hist[j - 1].t > cfg.bufferMs) break;
        sign = Math.sign(d);
        total += Math.abs(d);
        j--;
      }
      if (total < 270) return false;
      nextStart = hist[j].t;
      idx = j - 1;
      limit = cfg.bufferMs;
      continue;
    }
    // Paskutinė kryptis turi būti laikoma arba ką tik atleista (į neutralią padėtį); perėjus į kitą kryptį ji nebegalioja.
    while (idx >= 0 && !has(hist[idx], tok)) {
      if (k === n - 1 && hist[idx].dir !== 'N') return false;
      idx--;
    }
    if (idx < 0) return false;
    const end = idx + 1 < hist.length ? hist[idx + 1].t : now;
    if (nextStart - end > limit) return false;
    const prev = k > 0 ? tokens[k - 1] : null;
    // Pratęsiame elementą atgal per gretimus įrašus, bet nepasisaviname įrašo, kurio reikia ankstesniam elementui.
    while (idx - 1 >= 0 && has(hist[idx - 1], tok) &&
      !(prev && prev !== tok && prev !== 'CIRCLE' && has(hist[idx - 1], prev))) idx--;
    nextStart = hist[idx].t;
    idx--;
    limit = cfg.bufferMs;
  }
  return true;
}

export class ComboRecognizer {
  // techniques: visos technikos (ir neatrakintos) su `input` masyvu; cfg: { bufferMs, buttonMs }.
  constructor(techniques, cfg = {}) {
    this.cfg = { bufferMs: 350, buttonMs: 200, settleMs: 150, ...cfg };
    this.cands = {};
    techniques.forEach((t, order) => {
      if (!t.input || t.auto || t.hold) return;
      const btn = t.input[t.input.length - 1];
      const dirs = t.input.slice(0, -1);
      const lastDir = dirs[dirs.length - 1];
      (this.cands[btn] ||= []).push({ tech: t, dirs, w: weight(dirs), vert: lastDir === 'U' || lastDir === 'D' ? 1 : 0, order });
    });
    // Ilgiausia seka pirma; esant lygiam ilgiui – vertikali kryptis (lygio keitimas) svarbesnė.
    for (const list of Object.values(this.cands)) list.sort((a, b) => b.w - a.w || b.vert - a.vert || a.order - b.order);
    this.reset();
  }

  reset() {
    this.hist = [{ dir: 'N', eff: 'N', pref: null, t: -1e12 }];
    this.presses = [];
  }

  get dir() {
    return this.hist[this.hist.length - 1].dir;
  }

  pushDir(dir, t) {
    const last = this.hist[this.hist.length - 1];
    const prev = last.dir;
    if (prev === dir) return;
    // Įstrižainės, į kurią ateita iš kardinalios krypties, reikšmė (eff) ir pirmenybė (pref):
    //  • kryptis prieš tai laikyta ilgai (pvz., → per visą smūgį), tada ↘ = sąmoningas judesys link ↓;
    //  • greitas judesys ↓ ↘ = ketvirčio pradžia, reiškia →;
    //  • ką tik pasiekus → ir šiek tiek nuslydus atgal į ↘ (ar peršovus į ↗) – tai tik netikslumas ties sektoriaus riba:
    //    įstrižainė lieka dviprasmė, bet pirmenybė teikiama ką tik pasiektai krypčiai.
    let eff = dir;
    let pref = dir.length === 2 ? dir[0] : null;   // iš neutralios padėties – pirmenybė lygiui (↑ / ↓)
    if (dir.length === 2 && prev.length === 1 && prev !== 'N' && dir.includes(prev)) {
      const before = this.hist.length > 1 ? this.hist[this.hist.length - 2].dir : 'N';
      const swept = before.length === 2 && before.includes(prev);
      if (t - last.t < this.cfg.settleMs && swept) pref = prev;
      else { eff = dir.replace(prev, ''); pref = null; }
    }
    this.hist.push({ dir, eff, pref, t });
    if (this.hist.length > 20) this.hist.shift();
  }

  // Grąžina { tech, matched, locked }: tech – ką vykdyti; matched – atpažintos sekos id;
  // locked – seka atpažinta, bet technika neatrakinta (tada vykdoma paprasčiausia to mygtuko technika).
  // Ilgiausia atitinkanti seka; tarp vienodo ilgio – ta, kurios paskutinė kryptis sutampa su įstrižainės pirmenybe.
  pick(list, t) {
    let found = null;
    let w = -1;
    const pref = this.hist[this.hist.length - 1].pref;
    for (const c of list) {
      if (found && c.w < w) break;
      if (!matchSeq(c.dirs, this.hist, this.presses, t, this.cfg, this.cfg.buttonMs)) continue;
      if (!found) { found = c.tech; w = c.w; if (!pref || c.dirs[c.dirs.length - 1] === pref) break; }
      else if (c.dirs[c.dirs.length - 1] === pref) { found = c.tech; break; }
    }
    return found;
  }

  press(btn, t, unlocked) {
    const list = this.cands[btn] || [];
    let found = this.pick(list, t);
    const last = this.hist[this.hist.length - 1];
    if (found && unlocked && !unlocked.has(found.id) && last.pref && last.eff !== last.pref) {
      // Dviprasmė įstrižainė (pvz., ↓→ peršovus į ↗) atitiko neatrakintą techniką: bandome aiškinti ją kaip
      // ką tik pasiektą kryptį – jei taip gaunama atrakinta technika, žaidėjas ketino būtent ją.
      const eff = last.eff;
      last.eff = last.pref;
      const alt = this.pick(list, t);
      last.eff = eff;
      if (alt && unlocked.has(alt.id)) found = alt;
    }
    this.presses.push({ btn, t });
    if (this.presses.length > 8) this.presses.shift();
    if (!found) return { tech: null, matched: null, locked: false };
    if (!unlocked || unlocked.has(found.id)) return { tech: found, matched: found.id, locked: false };
    const base = list.find((c) => c.dirs.length === 0);
    return { tech: base && unlocked.has(base.tech.id) ? base.tech : null, matched: found.id, locked: true };
  }
}

// Analoginio vektoriaus (ekrano koordinatės, y žemyn) vertimas į 8 kryptis. → visada reiškia „link varžovo“.
// cur – dabartinė kryptis: ji išlaikoma, kol pirštas neperžengia sektoriaus ribos su atsarga (histerezė),
// kad ties riba tarp dviejų krypčių (pvz., ↘ ir →) kryptis nevirpėtų.
const SECTORS = ['B', 'DB', 'D', 'DF', 'F', 'UF', 'U', 'UB', 'B'];
const CENTER = { F: 0, UF: 45, U: 90, UB: 135, B: 180, DB: -135, D: -90, DF: -45 };
export function dirFromVector(dx, dy, deadzone = 0.2, cur = null, hysteresis = 8) {
  const m = Math.hypot(dx, dy);
  const held = cur && cur !== 'N';
  if (m < (held ? deadzone * 0.75 : deadzone)) return 'N';
  const a = (Math.atan2(-dy, dx) * 180) / Math.PI;
  if (held) {
    const d = Math.abs(((a - CENTER[cur] + 540) % 360) - 180);
    if (d <= 22.5 + hysteresis) return cur;
  }
  return SECTORS[Math.round(a / 45) + 4];
}

const GLYPH = { F: '→', B: '←', U: '↑', D: '↓', DF: '↘', UF: '↗', DB: '↙', UB: '↖', CIRCLE: '○' };
export function inputGlyphs(input) {
  return input.map((tok) => GLYPH[tok] || tok);
}
