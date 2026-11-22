// SPDX-License-Identifier: BUSL-1.1
// Dojo: pamokos (5 kartus iš eilės be klaidos → technika išmokta), Waza-chō (technikų knygelė), laisva praktika.

import { evalAnim, getPose, drawFigure } from '../fight/skeleton.js';
import { inputGlyphs } from '../core/combo.js';
import { t, loc, esc } from '../core/i18n.js';
import { chapterItems, playerSet, fullSet, currentBelt, techRow, comboRow, beltChip } from './common.js';

const FONT = '"Trebuchet MS", "Segoe UI", system-ui, sans-serif';

function wrap(ctx, text, x, y, maxW, lh) {
  let line = '';
  for (const w of text.split(' ')) {
    if (ctx.measureText(`${line}${w}`).width > maxW && line) { ctx.fillText(line.trim(), x, y); y += lh; line = ''; }
    line += `${w} `;
  }
  if (line.trim()) ctx.fillText(line.trim(), x, y);
  return y + lh;
}

// Pamokos režisierius: seka žaidėjo veiksmus, skaičiuoja pakartojimus, piešia paaiškinimą ir „vaiduoklį“.
export class LessonDirector {
  // item: { kind: 'tech' | 'combo', def }, opts: { reps, free }
  constructor(game, item, opts = {}) {
    this.game = game;
    this.item = item;
    this.free = !!opts.free;
    this.reps = opts.reps || 5;
    this.count = 0;
    this.total = 0;
    this.time = 0;
    this.doneT = null;
    const d = item.def;
    this.seq = item.kind === 'combo' ? d.sequence : [d.id];
    this.glyphs = item.kind === 'combo'
      ? d.sequence.map((id) => (id === '@block' ? ['G✓'] : inputGlyphs(game.db.tech[id].input)))
      : [inputGlyphs(d.input).concat(d.hold ? [t('ui.hold')] : [])];
  }

  attach(scene) {
    this.scene = scene;
    this.game.audio.speak(this.item.def.name);
  }

  ok() {
    if (this.doneT != null) return;
    this.count++;
    this.total++;
    this.game.audio.good();
    this.scene.hud.popup(640, 380, this.free ? `✓ ${this.total}` : `✓ ${this.count}/${this.reps}`, { color: '#8ff08a', size: 34 });
    if (!this.free && this.count >= this.reps) {
      this.doneT = 0;
      this.scene.hud.call('OSU!', t('lesson.learned'), 1800);
      this.game.audio.osu();
      this.game.audio.speak('Osu');
    }
  }

  fail() {
    if (this.doneT != null || this.free) return;
    if (this.count > 0) this.scene.hud.popup(640, 380, t('lesson.again'), { color: '#ffb0a0', size: 26 });
    if (this.count > 0) this.game.audio.bad();
    this.count = 0;
  }

  onEvent(ev) {
    const { item, scene } = this;
    const p = scene.player;
    const d = item.def;
    if (item.kind === 'combo') {
      if (ev.type === 'combo' && ev.f === p && ev.combo.id === d.id) this.ok();
      return;
    }
    if (d.type === 'strike') {
      if (ev.type === 'techStart' && ev.f === p) { if (ev.def.id === d.id) this.ok(); else this.fail(); }
    } else if (d.auto) {
      // Sune uke: skaičiuojamas sėkmingas žemo spyrio blokas.
      if (ev.type === 'hit' && ev.defender === p) { if (ev.blocked && ev.sune) this.ok(); else if (!ev.blocked) this.fail(); }
    } else if (d.hold) {
      if (ev.type === 'guard' && ev.f === p && ev.techId === d.id) this.ok();
    } else if (ev.type === 'guard' && ev.f === p && ev.techId !== 'morote_uke') {
      if (ev.techId === d.id) this.ok(); else this.fail();
    } else if (ev.type === 'techStart' && ev.f === p) this.fail();
  }

  update(dt) {
    this.time += dt;
    if (this.doneT != null) {
      this.doneT += dt;
      if (this.doneT > 1900) this.scene.finish({ learned: true });
    }
  }

  draw(ctx) {
    const d = this.item.def;
    const db = this.game.db;
    ctx.save();
    // Paaiškinimo skydelis
    ctx.fillStyle = 'rgba(14,16,24,0.82)';
    ctx.beginPath(); ctx.roundRect(20, 16, 520, 216, 14); ctx.fill();
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffd54a';
    let size = 32;
    ctx.font = `bold ${size}px ${FONT}`;
    while (ctx.measureText(d.name).width > 490 && size > 18) { size -= 2; ctx.font = `bold ${size}px ${FONT}`; }
    ctx.fillText(d.name, 36, 56);
    ctx.fillStyle = '#fff';
    ctx.font = `bold 19px ${FONT}`;
    ctx.fillText(loc(d, 'name'), 36, 84);
    ctx.font = `16px ${FONT}`;
    ctx.fillStyle = '#d8d4ca';
    let y = 108;
    if (this.item.kind === 'tech') {
      y = wrap(ctx, loc(d, 'desc'), 36, y, 490, 20);
      ctx.fillStyle = d.legalInKumite ? '#8ff08a' : '#ff8a7a';
      ctx.font = `bold 15px ${FONT}`;
      ctx.fillText(`Kumite: ${d.legalInKumite ? t('ui.yes') : t('ui.no')}`, 36, y);
    } else y = wrap(ctx, t('lesson.chainTip'), 36, y, 490, 20);
    // Įvesties seka su animuota žyma
    const flat = [];
    this.glyphs.forEach((g, i) => { g.forEach((x) => flat.push({ x, grp: i })); });
    const active = Math.floor(this.time / 450) % (flat.length + 2);
    let gx = 36;
    ctx.font = `bold 30px ${FONT}`;
    flat.forEach((g, i) => {
      if (i > 0 && flat[i - 1].grp !== g.grp) gx += 16;
      const w = Math.max(40, ctx.measureText(g.x).width + 18);
      ctx.fillStyle = i === active ? '#ffd54a' : 'rgba(255,255,255,0.14)';
      ctx.beginPath(); ctx.roundRect(gx, 180, w, 40, 8); ctx.fill();
      ctx.fillStyle = i === active ? '#14161f' : '#fff';
      ctx.textAlign = 'center';
      ctx.fillText(g.x, gx + w / 2, 211);
      gx += w + 6;
    });
    // Progresas
    ctx.textAlign = 'right';
    ctx.font = `bold 20px ${FONT}`;
    ctx.fillStyle = '#fff';
    if (this.free) ctx.fillText(`${t('lesson.free')}: ${this.total}`, 528, 56);
    else for (let i = 0; i < this.reps; i++) {
      ctx.beginPath();
      ctx.arc(520 - i * 26, 48, 9, 0, Math.PI * 2);
      ctx.fillStyle = i < this.reps - this.count ? 'rgba(255,255,255,0.2)' : '#8ff08a';
      ctx.fill();
    }
    // „Vaiduoklis“, rodantis judesį
    ctx.fillStyle = 'rgba(14,16,24,0.82)';
    ctx.beginPath(); ctx.roundRect(1000, 16, 260, 216, 14); ctx.fill();
    ctx.fillStyle = '#b8b4aa';
    ctx.font = `14px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.fillText(t('lesson.demo'), 1130, 36);
    const cyc = 1900;
    const idx = Math.floor(this.time / cyc) % this.seq.length;
    const id = this.seq[idx];
    const k = (this.time % cyc) / cyc;
    let pose;
    if (id === '@block') pose = getPose(db.anim, 'guard_chudan');
    else {
      const tech = db.tech[id];
      pose = tech.type === 'strike' ? evalAnim(db.anim, tech.anim, Math.min(3, k * 4)) : (k < 0.15 || k > 0.8 ? getPose(db.anim, 'kamae') : getPose(db.anim, tech.anim));
    }
    drawFigure(ctx, 1110, 222, 1, pose, { scale: 0.78, alpha: 0.85, gi: '#cfe6ff', far: '#a9c4e0', belt: '#f4f1ea' });
    ctx.restore();
  }
}

export function lessonOpts(game, item, free) {
  const db = game.db;
  const d = item.def;
  const techIds = item.kind === 'combo' ? d.sequence.filter((id) => id !== '@block') : [d.id];
  const set = playerSet(game, techIds, item.kind === 'combo' ? [d.id] : []);
  const partnerTech = d.lesson && d.lesson.partner;
  const needsTarget = item.kind === 'combo' || d.type === 'strike';
  const belt = currentBelt(game).id;
  return {
    mode: 'practice', bg: 'dojo', showPanels: false, hints: true, showDamage: true,
    player: { name: t('hud.player'), belt, ...set },
    opponent: partnerTech
      ? { name: t('dojo.partner'), belt, dummy: 'attack', techId: partnerTech, intervalMs: 1900 }
      : needsTarget ? { name: t('dojo.partner'), belt, dummy: 'passive' } : null,
    director: new LessonDirector(game, item, { reps: item.kind === 'combo' ? db.rules.lesson.comboReps : db.rules.lesson.reps, free }),
  };
}

export async function runLesson(game, item) {
  const res = await game.runFight(lessonOpts(game, item, false));
  if (res && res.learned) {
    game.save.learn(item.def.id, item.kind === 'combo');
    return true;
  }
  return false;
}

// Skyriaus pamokų sąrašas.
export async function lessonList(game, beltIdx) {
  const db = game.db;
  const belt = db.belts[beltIdx];
  for (;;) {
    const s = game.save.data;
    const { techs, combos } = chapterItems(db, belt.id);
    const row = (kind, d) => {
      const done = (kind === 'combo' ? s.learnedCombos : s.learned).includes(d.id);
      // Kombinacijos pamoka atsiveria išmokus visas jos technikas.
      const ready = kind === 'tech' || d.sequence.every((id) => id === '@block' || s.learned.includes(id));
      const btn = `<button class="btn small${done ? '' : ' primary'}" data-act="${kind}:${d.id}" ${ready ? '' : 'disabled'}>${done ? t('dojo.repeat') : t('dojo.learn')}</button>`;
      return kind === 'combo' ? comboRow(db, d, { cls: done ? 'done' : '', button: btn }) : techRow(db, d, { cls: done ? 'done' : '', button: btn });
    };
    const html = `<div class="panel">
      <div class="head"><h2>${t('dojo.lessons')} · ${beltChip(game, beltIdx)} ${esc(loc(belt, 'name'))}</h2><button class="btn small" data-act="back">${t('ui.back')}</button></div>
      <p class="muted">${t('dojo.lessonsHelp', { n: db.rules.lesson.reps })}</p>
      <div class="list">${techs.map((x) => row('tech', x)).join('')}${combos.map((c) => row('combo', c)).join('')}</div>
    </div>`;
    const { act } = await game.ui.ask(html, 'top');
    if (act === 'back') return;
    const [kind, id] = act.split(':');
    await runLesson(game, { kind, def: kind === 'combo' ? db.combo[id] : db.tech[id] });
  }
}

// Waza-chō: visų išmoktų technikų ir kombinacijų sąrašas su įvestimis, kumite leistinumu ir mygtuku „Praktikuoti“.
export async function wazaCho(game) {
  const db = game.db;
  for (;;) {
    const s = game.save.data;
    const techs = db.techniques.filter((x) => s.learned.includes(x.id));
    const combos = db.combos.filter((c) => s.learnedCombos.includes(c.id));
    const total = db.techniques.filter((x) => db.belts[db.beltIdx[x.belt]].available && x.type !== 'mode').length;
    const btn = (kind, id) => `<button class="btn small" data-act="${kind}:${id}">${t('dojo.practice')}</button>`;
    const html = `<div class="panel">
      <div class="head"><h2>Waza-chō <span class="muted">${t('wazacho.sub')}</span></h2><button class="btn small" data-act="back">${t('ui.back')}</button></div>
      <p class="muted">${t('wazacho.count', { n: techs.length, total })}</p>
      <div class="list">${techs.map((x) => techRow(db, x, { button: btn('tech', x.id) })).join('') || `<p>${t('wazacho.empty')}</p>`}
      ${combos.map((c) => comboRow(db, c, { button: btn('combo', c.id) })).join('')}</div>
    </div>`;
    const { act } = await game.ui.ask(html, 'top');
    if (act === 'back') return;
    const [kind, id] = act.split(':');
    await game.runFight(lessonOpts(game, { kind, def: kind === 'combo' ? db.combo[id] : db.tech[id] }, true));
  }
}

// Laisva praktika su sparingo partneriu: pasyvus, tik blokuoja arba tik puola. Rodo padarytą žalą.
export async function freePractice(game) {
  const belt = currentBelt(game).id;
  const { act } = await game.ui.ask(`<div class="panel narrow center">
    <h2>${t('dojo.free')}</h2><p class="muted">${t('dojo.freeHelp')}</p>
    <button class="btn block primary" data-act="passive">${t('dojo.partnerPassive')}</button>
    <button class="btn block" data-act="block">${t('dojo.partnerBlock')}</button>
    <button class="btn block" data-act="attack">${t('dojo.partnerAttack')}</button>
    <button class="btn block" data-act="back">${t('ui.back')}</button></div>`);
  if (act === 'back') return;
  const set = game.save.data.learned.length ? playerSet(game) : fullSet(game.db, belt);
  await game.runFight({
    mode: 'practice', bg: 'dojo', hints: true, showDamage: true,
    player: { name: t('hud.player'), belt, ...set },
    opponent: { name: t('dojo.partner'), belt, dummy: act, intervalMs: 1500 },
  });
}

export async function dojoMenu(game) {
  for (;;) {
    const cur = game.save.data.beltIndex;
    const { act } = await game.ui.ask(`<div class="panel narrow center">
      <h2>Dojo</h2>
      <button class="btn block primary" data-act="lessons">${t('dojo.lessons')}</button>
      <button class="btn block" data-act="free">${t('dojo.free')}</button>
      <button class="btn block" data-act="wazacho">Waza-chō</button>
      <button class="btn block" data-act="back">${t('ui.back')}</button></div>`);
    if (act === 'back') return;
    if (act === 'lessons') {
      // Mokomasi dabartinio skyriaus: turimo diržo arba kito, jei ankstesnio pamokos baigtos.
      const s = game.save.data;
      const { techs, combos } = chapterItems(game.db, game.db.belts[cur].id);
      const curDone = techs.every((x) => s.learned.includes(x.id)) && combos.every((c) => s.learnedCombos.includes(c.id));
      const next = game.db.belts[cur + 1];
      await lessonList(game, curDone && next && next.available ? cur + 1 : cur);
    } else if (act === 'free') await freePractice(game);
    else if (act === 'wazacho') await wazaCho(game);
  }
}
