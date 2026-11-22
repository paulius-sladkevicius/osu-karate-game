// SPDX-License-Identifier: BUSL-1.1
// Egzaminas (shinsa): kihon (sensei šaukia japonišką pavadinimą, be užuominų) + kata (ritmo mini žaidimas) + kumite.
// Reikia surinkti ≥ passScore ir nepralaimėti kumite per ippon.

import { inputGlyphs } from '../core/combo.js';
import { shuffle } from '../core/rng.js';
import { t, loc, esc } from '../core/i18n.js';
import { chapterItems, fullSet, playerSet, rosterFor, oppFromRoster, fightResultScreen, beltChip, techRow, comboRow } from './common.js';

const FONT = '"Trebuchet MS", "Segoe UI", system-ui, sans-serif';

// Žaidėjo veiksmo id iš kovos įvykio (technikos pradžia arba gynyba).
function actionId(ev, player) {
  if (ev.type === 'techStart' && ev.f === player) return ev.def.id;
  if (ev.type === 'guard' && ev.f === player && ev.techId && ev.techId !== 'morote_uke') return ev.techId;
  return null;
}

export class KihonDirector {
  constructor(game, pool, count) {
    this.game = game;
    this.R = game.db.rules.exam;
    const list = [];
    while (list.length < count) list.push(...shuffle(Math.random, pool));
    this.list = list.slice(0, count);
    this.i = -1;
    this.state = 'intro';
    this.t = 0;
    this.correct = 0;
    this.last = null;
    // Nustatymas „Kihon užuominos“: po pavadinimu rodoma, ką suvesti (išjungus – tik japoniškas pavadinimas).
    this.hints = !!game.settings.kihonHints;
  }

  attach(scene) {
    this.scene = scene;
    scene.hud.call('Kihon', t(this.hints ? 'exam.kihonHelpHints' : 'exam.kihonHelp'), 2200);
  }

  next() {
    this.i++;
    if (this.i >= this.list.length) {
      this.scene.finish({ score: this.correct / this.list.length, correct: this.correct, total: this.list.length });
      return;
    }
    this.state = 'call';
    this.t = 0;
    // Sensei šaukia technikos pavadinimą japoniškai.
    this.game.audio.speak(this.list[this.i].name);
  }

  answer(ok) {
    this.state = 'feedback';
    this.t = 0;
    this.last = ok;
    if (ok) { this.correct++; this.game.audio.good(); } else this.game.audio.bad();
  }

  onEvent(ev) {
    if (this.state !== 'call') return;
    const id = actionId(ev, this.scene.player);
    if (id) this.answer(id === this.list[this.i].id);
  }

  update(dt) {
    this.t += dt;
    if (this.state === 'intro' && this.t > 2300) this.next();
    else if (this.state === 'call' && this.t > this.R.kihonTimeMs) this.answer(false);
    else if (this.state === 'feedback' && this.t > 1150) this.next();
  }

  draw(ctx) {
    if (this.state === 'intro') return;
    const tech = this.list[this.i];
    if (!tech) return;
    ctx.save();
    const h = this.hints;
    ctx.fillStyle = 'rgba(14,16,24,0.85)';
    ctx.beginPath(); ctx.roundRect(290, 20, 700, h ? 196 : 150, 16); ctx.fill();
    // Skaitliukas kairėje – centre viršuje yra pauzės mygtukas.
    ctx.textAlign = 'left';
    ctx.fillStyle = '#b8b4aa';
    ctx.font = `bold 18px ${FONT}`;
    ctx.fillText(`Kihon ${this.i + 1}/${this.list.length} · ✓ ${this.correct}`, 312, 48);
    ctx.textAlign = 'center';
    let size = 52;
    ctx.font = `bold ${size}px ${FONT}`;
    const name = `${tech.name}!`;
    while (ctx.measureText(name).width > 660 && size > 26) { size -= 3; ctx.font = `bold ${size}px ${FONT}`; }
    ctx.fillStyle = this.state === 'feedback' ? (this.last ? '#8ff08a' : '#ff8a7a') : '#ffd54a';
    ctx.fillText(name, 640, 104);
    if (h) {
      // Užuomina: įvesties seka (kryptys + mygtukas).
      const g = inputGlyphs(tech.input);
      ctx.font = `bold 30px ${FONT}`;
      const ws = g.map((x) => Math.max(44, ctx.measureText(x).width + 20));
      let x = 640 - (ws.reduce((a, b) => a + b, 0) + (g.length - 1) * 8) / 2;
      g.forEach((gl, i) => {
        const btn = i === g.length - 1;
        ctx.fillStyle = btn ? '#ffd54a' : 'rgba(255,255,255,0.16)';
        ctx.beginPath(); ctx.roundRect(x, 118, ws[i], 42, 8); ctx.fill();
        ctx.fillStyle = btn ? '#14161f' : '#fff';
        ctx.fillText(gl, x + ws[i] / 2, 150);
        x += ws[i] + 8;
      });
    }
    const y = h ? 176 : 132;
    if (this.state === 'call') {
      const k = 1 - this.t / this.R.kihonTimeMs;
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      ctx.fillRect(340, y, 600, 12);
      ctx.fillStyle = k < 0.3 ? '#ff8a7a' : '#ffd54a';
      ctx.fillRect(340, y, 600 * Math.max(0, k), 12);
    } else {
      ctx.font = `bold ${h ? 26 : 30}px ${FONT}`;
      ctx.fillStyle = this.last ? '#8ff08a' : '#ff8a7a';
      ctx.fillText(this.last ? '✓ OSU!' : `✗ ${t('exam.miss')}`, 640, y + 20);
    }
    ctx.restore();
  }
}

export class KataDirector {
  constructor(game, kata) {
    this.game = game;
    this.kata = kata;
    this.R = game.db.rules.exam;
    this.time = 0;
    this.lead = 2800;
    this.steps = kata.steps.map((s, i) => {
      const turn = s.startsWith('*');
      const id = turn ? s.slice(1) : s;
      return { id, turn, t: this.lead + i * kata.beatMs, state: 'pending', turned: false, glyphs: inputGlyphs(game.db.tech[id].input).join('') };
    });
    this.counts = { perfect: 0, good: 0, miss: 0 };
    this.endT = null;
  }

  attach(scene) {
    this.scene = scene;
    scene.player.x = scene.player.px = 640;
    scene.hud.call(this.kata.name, t('exam.kataHelp'), 2400);
    this.game.audio.speak(this.kata.name);
  }

  rate(step, kind) {
    step.state = kind;
    this.counts[kind]++;
    const col = { perfect: '#8ff0ff', good: '#8ff08a', miss: '#ff8a7a' }[kind];
    this.scene.hud.popup(210, 196, t(`kata.${kind}`), { color: col, size: 26, ms: 700 });
    if (kind === 'miss') this.game.audio.bad(); else this.game.audio.taiko(kind === 'perfect' ? 0.5 : 0.3);
  }

  onEvent(ev) {
    const id = actionId(ev, this.scene.player);
    if (!id) return;
    const step = this.steps.find((s) => s.state === 'pending' && Math.abs(this.time - s.t) <= this.R.kataGoodMs);
    if (!step) return;
    const d = Math.abs(this.time - step.t);
    if (id !== step.id) this.rate(step, 'miss');
    else this.rate(step, d <= this.R.kataPerfectMs ? 'perfect' : 'good');
  }

  update(dt) {
    this.time += dt;
    const p = this.scene.player;
    for (const s of this.steps) {
      if (s.turn && !s.turned && this.time >= s.t - this.kata.beatMs * 0.45 && (p.state === 'idle' || p.state === 'guard' || p.state === 'walk')) {
        s.turned = true;
        p.facing *= -1;     // formos posūkis (įvesties kryptys lieka tos pačios)
      }
      if (s.state === 'pending' && this.time > s.t + this.R.kataGoodMs) this.rate(s, 'miss');
    }
    if (this.endT == null && this.steps.every((s) => s.state !== 'pending')) this.endT = this.time;
    if (this.endT != null && this.time > this.endT + 1300) {
      const n = this.steps.length;
      this.scene.finish({ score: (this.counts.perfect + this.counts.good * 0.6) / n, ...this.counts, total: n });
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = 'rgba(14,16,24,0.85)';
    ctx.beginPath(); ctx.roundRect(120, 20, 1040, 150, 16); ctx.fill();
    ctx.textAlign = 'left';
    ctx.font = `bold 18px ${FONT}`;
    ctx.fillStyle = '#ffd54a';
    ctx.fillText(`Kata · ${this.kata.name}`, 140, 46);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.fillText(`${t('kata.perfect')} ${this.counts.perfect} · ${t('kata.good')} ${this.counts.good} · ${t('kata.miss')} ${this.counts.miss}`, 1140, 46);
    // Takelis: simboliai slenka į taikinį kairėje
    ctx.beginPath();
    ctx.rect(130, 60, 1020, 100);
    ctx.clip();
    ctx.strokeStyle = '#ffd54a';
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.roundRect(170, 74, 80, 72, 12); ctx.stroke();
    ctx.textAlign = 'center';
    for (const s of this.steps) {
      const x = 210 + (s.t - this.time) * 0.34;
      if (x < 90 || x > 1200) continue;
      if (s.state !== 'pending' && this.time - s.t > 250) continue;
      ctx.fillStyle = s.state === 'pending' ? 'rgba(255,255,255,0.16)' : s.state === 'miss' ? 'rgba(255,90,70,0.5)' : 'rgba(120,240,130,0.5)';
      ctx.beginPath(); ctx.roundRect(x - 36, 78, 72, 64, 10); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = `bold 30px ${FONT}`;
      ctx.fillText(s.glyphs, x, 122);
      if (s.turn) { ctx.font = `14px ${FONT}`; ctx.fillStyle = '#8ff0ff'; ctx.fillText('↻', x + 26, 92); }
    }
    ctx.restore();
  }
}

function practiceBase(game, beltId, set) {
  return { mode: 'practice', bg: 'dojo', showPanels: false, hints: false, player: { name: t('hud.player'), belt: beltId, ...set } };
}

export async function runKihon(game, beltIdx, count) {
  const db = game.db;
  const pool = db.techniques.filter((x) => db.beltIdx[x.belt] <= beltIdx && (x.type === 'strike' || x.type === 'guard') && !x.auto && !x.hold);
  const set = fullSet(db, db.belts[beltIdx].id);
  return game.runFight({ ...practiceBase(game, db.belts[game.save.data.beltIndex].id, set), opponent: null, director: new KihonDirector(game, pool, count) });
}

export async function runKata(game, kataId) {
  const db = game.db;
  const kata = db.kata.find((k) => k.id === kataId) || db.kata[0];
  const set = fullSet(db, 'blue');
  const opts = practiceBase(game, db.belts[game.save.data.beltIndex].id, set);
  opts.player.lockFacing = true;
  return game.runFight({ ...opts, opponent: null, director: new KataDirector(game, kata) });
}

const pct = (v) => `${Math.round(v * 100)} %`;

// Visas diržo egzaminas. Grąžina true, jei išlaikytas.
export async function runExam(game, beltIdx) {
  const db = game.db;
  const belt = db.belts[beltIdx];
  const ex = belt.exam;
  const R = db.rules.exam;
  const kata = db.kata.find((k) => k.id === ex.kata) || db.kata[0];
  const intro = await game.ui.ask(`<div class="panel center">
    <h2>Shinsa · ${beltChip(game, beltIdx)} ${esc(loc(belt, 'name'))}</h2>
    <p>${t('exam.intro', { pass: pct(R.passScore) })}</p>
    <div class="list">
      <div class="item"><div class="keys">1</div><div class="grow"><div class="name">Kihon</div><div class="muted">${t('exam.kihonDesc', { n: ex.kihonCount })} ${t(game.settings.kihonHints ? 'exam.kihonHintsOn' : 'exam.kihonHintsOff')}</div></div></div>
      <div class="item"><div class="keys">2</div><div class="grow"><div class="name">Kata · ${esc(kata.name)}</div><div class="muted">${t('exam.kataDesc')}</div></div></div>
      <div class="item"><div class="keys">3</div><div class="grow"><div class="name">Kumite × ${ex.kumite}</div><div class="muted">${t('exam.kumiteDesc')}</div></div></div>
    </div>
    <button class="btn primary" data-act="go">Osu!</button><button class="btn" data-act="back">${t('ui.back')}</button></div>`);
  if (intro.act !== 'go') return false;

  const kihon = await runKihon(game, beltIdx, ex.kihonCount);
  if (!kihon || kihon.aborted) return false;
  await game.ui.ask(`<div class="panel center"><h2>Kihon</h2><div class="score-big">${pct(kihon.score)}</div>
    <p>${t('exam.kihonResult', { n: kihon.correct, total: kihon.total })}</p><button class="btn primary" data-act="go">${t('ui.next')}</button></div>`);

  const kataRes = await runKata(game, ex.kata);
  if (!kataRes || kataRes.aborted) return false;
  await game.ui.ask(`<div class="panel center"><h2>Kata · ${esc(kata.name)}</h2><div class="score-big">${pct(kataRes.score)}</div>
    <p>${t('kata.perfect')} ${kataRes.perfect} · ${t('kata.good')} ${kataRes.good} · ${t('kata.miss')} ${kataRes.miss}</p>
    <button class="btn primary" data-act="go">${t('ui.next')}</button></div>`);

  // Kumite: N kovų iš eilės, tarp kovų atsistato tik 30 % žalos. Užuominos išjungtos, vertinama ir pagarba (REI).
  const opps = shuffle(Math.random, rosterFor(db, belt.id));
  const set = playerSet(game);
  let carry = null;
  let fightScore = 0;
  let bows = 0;
  let missed = 0;
  let ipponLoss = false;
  for (let i = 0; i < ex.kumite; i++) {
    const res = await game.runFight({
      mode: 'match', bg: 'dojo', hints: false, timeSec: belt.matchTimeSec,
      player: { name: t('hud.player'), belt: db.belts[game.save.data.beltIndex].id, ...set, carry },
      opponent: oppFromRoster(db, opps[i % opps.length]),
    });
    if (!res || res.aborted) return false;
    bows += res.bowsTotal;
    missed += res.bowsMissed;
    if (res.playerWon) fightScore += 1;
    else if (res.by === 'hantei') fightScore += 0.5;
    else ipponLoss = true;
    await fightResultScreen(game, res, [{ act: 'go', label: t('ui.next') }]);
    if (ipponLoss) break;
    const keep = 1 - db.rules.recovery.exam;
    carry = { legs: res.player.dmg.legs * keep, body: res.player.dmg.body * keep, head: res.player.dmg.head * keep };
  }
  const respect = bows ? 1 - missed / bows : 1;
  const kumite = (fightScore / ex.kumite) * 0.8 + respect * 0.2;
  const total = (kihon.score + kataRes.score + kumite) / 3;
  const passed = total >= R.passScore && !ipponLoss;
  const s = game.save.data;
  const prev = s.exams[belt.id] || { best: 0, passed: false };
  s.exams[belt.id] = { best: Math.max(prev.best, total), passed: prev.passed || passed };
  if (passed) s.beltIndex = Math.max(s.beltIndex, beltIdx);
  game.save.write();

  const scores = `<div class="row" style="justify-content:center">
    <div><div class="muted">Kihon</div><b>${pct(kihon.score)}</b></div><div><div class="muted">Kata</div><b>${pct(kataRes.score)}</b></div>
    <div><div class="muted">Kumite</div><b>${pct(kumite)}</b></div><div><div class="muted">${t('exam.respect')}</div><b>${pct(respect)}</b></div></div>`;
  if (!passed) {
    await game.ui.ask(`<div class="panel center"><h2>${t('exam.failed')}</h2><div class="score-big">${pct(total)}</div>${scores}
      <p>${ipponLoss ? t('exam.failedIppon') : t('exam.failedScore', { pass: pct(R.passScore) })}</p><p class="muted">${t('exam.retry')}</p>
      <button class="btn primary" data-act="go">${t('ui.next')}</button></div>`);
    return false;
  }
  // Scena: sensei užriša naują diržą, „OSU!“, atrakintų technikų sąrašas.
  game.audio.osu();
  game.audio.speak('Osu');
  const { techs, combos } = chapterItems(db, belt.id);
  await game.ui.ask(`<div class="panel center">
    <div class="title-logo">OSU!</div>
    <h2>${t('exam.passed')}</h2>
    <p><span class="belt-chip" style="background:${belt.color};width:9rem;height:1.3rem"></span></p>
    <p>${t('exam.newBelt', { belt: loc(belt, 'name'), kyu: belt.kyu[0] })}</p>
    <div class="score-big">${pct(total)}</div>${scores}
    <p class="muted">${t(`story.${belt.id}`)}</p>
    <h3>${t('exam.unlocked')}</h3>
    <div class="list">${techs.map((x) => techRow(db, x)).join('')}${combos.map((c) => comboRow(db, c)).join('')}</div>
    <button class="btn primary" data-act="go">Osu!</button></div>`, 'top');
  return true;
}
