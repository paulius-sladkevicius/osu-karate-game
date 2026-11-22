// SPDX-License-Identifier: BUSL-1.1
// Kombinacijų atpažinimas: krypčių seka + mygtukas. Grynas modulis (be DOM), testuojamas Node aplinkoje.
// Kryptys visada santykinės: F = link varžovo (→), B = nuo varžovo (←), U, D ir įstrižainės.

const BUTTONS = new Set(['A', 'K', 'G', 'KIAI']);
const ANGLE = { F: 0, UF: 45, U: 90, UB: 135, B: 180, DB: 225, D: 270, DF: 315 };

// Ar istorijos kryptis `dir` tenkina šablono elementą `tok`.
function has(dir, tok) {
  return tok.length === 2 ? dir === tok : dir.includes(tok);
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
    while (idx >= 0 && !has(hist[idx].dir, tok)) idx--;
    if (idx < 0) return false;
    const end = idx + 1 < hist.length ? hist[idx + 1].t : now;
    if (nextStart - end > limit) return false;
    const prev = k > 0 ? tokens[k - 1] : null;
    // Pratęsiame elementą atgal per gretimus įrašus, bet nepasisaviname įrašo, kurio reikia ankstesniam elementui.
    while (idx - 1 >= 0 && has(hist[idx - 1].dir, tok) &&
      !(prev && prev !== tok && prev !== 'CIRCLE' && has(hist[idx - 1].dir, prev))) idx--;
    nextStart = hist[idx].t;
    idx--;
    limit = cfg.bufferMs;
  }
  return true;
}

export class ComboRecognizer {
  // techniques: visos technikos (ir neatrakintos) su `input` masyvu; cfg: { bufferMs, buttonMs }.
  constructor(techniques, cfg = {}) {
    this.cfg = { bufferMs: 350, buttonMs: 200, ...cfg };
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
    this.hist = [{ dir: 'N', t: -1e12 }];
    this.presses = [];
  }

  get dir() {
    return this.hist[this.hist.length - 1].dir;
  }

  pushDir(dir, t) {
    if (this.dir === dir) return;
    this.hist.push({ dir, t });
    if (this.hist.length > 20) this.hist.shift();
  }

  // Grąžina { tech, matched, locked }: tech – ką vykdyti; matched – atpažintos sekos id;
  // locked – seka atpažinta, bet technika neatrakinta (tada vykdoma paprasčiausia to mygtuko technika).
  press(btn, t, unlocked) {
    const list = this.cands[btn] || [];
    let found = null;
    for (const c of list) {
      if (matchSeq(c.dirs, this.hist, this.presses, t, this.cfg, this.cfg.buttonMs)) { found = c.tech; break; }
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
export function dirFromVector(dx, dy, deadzone = 0.2) {
  if (Math.hypot(dx, dy) < deadzone) return 'N';
  const a = (Math.atan2(-dy, dx) * 180) / Math.PI;
  const s = Math.round(a / 45);
  return ['B', 'DB', 'D', 'DF', 'F', 'UF', 'U', 'UB', 'B'][s + 4];
}

const GLYPH = { F: '→', B: '←', U: '↑', D: '↓', DF: '↘', UF: '↗', DB: '↙', UB: '↖', CIRCLE: '○' };
export function inputGlyphs(input) {
  return input.map((tok) => GLYPH[tok] || tok);
}
