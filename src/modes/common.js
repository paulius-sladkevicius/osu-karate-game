// SPDX-License-Identifier: BUSL-1.1
// Bendri režimų pagalbininkai: progresas, žaidėjo technikų rinkinys, rezultatų ekranas.

import { techsUpTo, combosUpTo } from '../core/data.js';
import { inputGlyphs } from '../core/combo.js';
import { t, loc, esc } from '../core/i18n.js';

// Skyriaus (diržo) mokomoji medžiaga: technikos ir tradicinės kombinacijos.
export function chapterItems(db, beltId) {
  return {
    techs: db.techniques.filter((x) => x.belt === beltId && x.type !== 'mode' && x.condition !== 'afterSweep'),
    combos: db.combos.filter((c) => c.belt === beltId),
  };
}

export function lessonsDone(game, beltId) {
  const { techs, combos } = chapterItems(game.db, beltId);
  const s = game.save.data;
  return techs.every((x) => s.learned.includes(x.id)) && combos.every((c) => s.learnedCombos.includes(c.id));
}

export function lessonProgress(game, beltId) {
  const { techs, combos } = chapterItems(game.db, beltId);
  const s = game.save.data;
  return {
    done: techs.filter((x) => s.learned.includes(x.id)).length + combos.filter((c) => s.learnedCombos.includes(c.id)).length,
    total: techs.length + combos.length,
  };
}

// Paprasčiausios kiekvieno mygtuko technikos prieinamos visada.
export function baseTechs(db) {
  return db.techniques.filter((x) => x.belt === db.belts[0].id && x.input.length === 1 && !x.hold).map((x) => x.id);
}

// Žaidėjo technikos kelionėje: tik išmoktos pamokose (+ bazinės).
export function playerSet(game, extraTechs = [], extraCombos = []) {
  const s = game.save.data;
  return {
    unlocked: new Set([...baseTechs(game.db), ...s.learned, ...extraTechs]),
    combos: new Set([...s.learnedCombos, ...extraCombos]),
  };
}

// Visos technikos iki diržo imtinai (greita kova, AI).
export function fullSet(db, beltId) {
  return { unlocked: techsUpTo(db, beltId), combos: combosUpTo(db, beltId) };
}

export function currentBelt(game) {
  return game.db.belts[game.save.data.beltIndex];
}

// Skyrius atviras, jei diržas jau turimas arba tai kitas diržas ir ankstesnio skyriaus pamokos baigtos.
export function chapterOpen(game, i) {
  const db = game.db;
  const cur = game.save.data.beltIndex;
  if (!db.belts[i] || !db.belts[i].available) return false;
  return i <= cur || (i === cur + 1 && lessonsDone(game, db.belts[cur].id));
}

export function kyuLabel(game, i) {
  const b = game.db.belts[i];
  const stripe = !!game.save.data.stripes[b.id];
  const k = b.kyu.length > 1 ? b.kyu[stripe ? 1 : 0] : b.kyu[0];
  return typeof k === 'number' ? `${k} kyu` : k;
}

export function beltChip(game, i) {
  const b = game.db.belts[i];
  return `<span class="belt-chip${game.save.data.stripes[b.id] ? ' stripe' : ''}" style="background:${b.color}"></span>`;
}

export function glyphs(input) {
  return inputGlyphs(input).join(' ');
}

export function comboGlyphs(db, combo) {
  return combo.sequence.map((id) => (id === '@block' ? 'G✓' : inputGlyphs(db.tech[id].input).join(''))).join('  ');
}

export function oppFromRoster(db, r) {
  return { name: r.name, belt: r.belt, archetype: r.archetype };
}

export function rosterFor(db, beltId) {
  return db.opponents.roster.filter((r) => r.belt === beltId);
}

// Kovos rezultato ekranas. Grąžina paspausto mygtuko veiksmą.
export async function fightResultScreen(game, res, buttons) {
  const s = game.save.data;
  s.stats.fights++;
  if (res.playerWon) s.stats.wins++;
  game.save.write();
  const v = res.votes;
  const zone = (d) => `${t('zone.legs')} ${d.legs.toFixed(0)} · ${t('zone.body')} ${d.body.toFixed(0)} · ${t('zone.head')} ${d.head.toFixed(0)}`;
  const html = `<div class="panel center">
    <h1>${res.playerWon ? t('result.win') : t('result.lose')}</h1>
    <p class="jp">${esc(game.db.rules.calls[`${res.winner}_no_kachi`])} · ${Math.max(v.aka, v.shiro)}:${Math.min(v.aka, v.shiro)} ${t(`result.${res.by}`)}</p>
    <p class="muted">${t(`result.${res.by}.desc`)}${res.round > 0 ? ` · ${t('result.encho', { n: res.round })}` : ''}</p>
    <p>${t('result.yourDamage')}: ${zone(res.player.dmg)}</p>
    <p>${t('result.oppDamage')}: ${zone(res.opp.dmg)}</p>
    <p class="muted">Waza-ari ${res.player.wazaAri}:${res.opp.wazaAri} · Chui ${res.player.chui}:${res.opp.chui}${res.bowsMissed ? ` · ${t('result.bowsMissed', { n: res.bowsMissed })}` : ''}</p>
    <div>${buttons.map((b, i) => `<button class="btn${i === 0 ? ' primary' : ''}" data-act="${b.act}">${b.label}</button>`).join('')}</div>
  </div>`;
  const { act } = await game.ui.ask(html);
  return act;
}

export function techRow(db, x, opts = {}) {
  const kum = x.type === 'mode' ? '' : `<span class="tag ${x.legalInKumite ? 'yes' : 'no'}">Kumite: ${x.legalInKumite ? t('ui.yes') : t('ui.no')}</span>`;
  return `<div class="item ${opts.cls || ''}">
    <div class="keys">${glyphs(x.input)}${x.hold ? ` ${t('ui.hold')}` : ''}</div>
    <div class="grow"><div class="name">${esc(x.name)} ${kum}</div><div class="muted">${esc(loc(x, 'name'))} – ${esc(loc(x, 'desc'))}</div></div>
    ${opts.button || ''}</div>`;
}

export function comboRow(db, c, opts = {}) {
  return `<div class="item ${opts.cls || ''}">
    <div class="keys">${comboGlyphs(db, c)}</div>
    <div class="grow"><div class="name">${esc(c.name)} <span class="tag yes">renzoku</span></div><div class="muted">${esc(loc(c, 'name'))} · ${bonusText(c)}</div></div>
    ${opts.button || ''}</div>`;
}

export function bonusText(c) {
  const b = c.bonus;
  const parts = [];
  if (b.damageMult) parts.push(`+${Math.round((b.damageMult - 1) * 100)} % ${t('bonus.damage')}`);
  if (b.legDamageMult) parts.push(`${t('bonus.leg')} ×${b.legDamageMult}`);
  if (b.balanceBonus) parts.push(`${t('bonus.balance')} −${b.balanceBonus}`);
  if (b.unblockable) parts.push(t('bonus.unblockable'));
  return parts.join(', ') || t('bonus.later');
}
