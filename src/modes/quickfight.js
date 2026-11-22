// SPDX-License-Identifier: BUSL-1.1
// Greita kova: pasirenkamas savo diržas (tik pasiekti), varžovo archetipas ir sunkumas.

import { t, loc, esc } from '../core/i18n.js';
import { fullSet, fightResultScreen } from './common.js';

export async function quickFight(game) {
  const db = game.db;
  const sel = { belt: game.save.data.beltIndex, arch: 'tank', diff: game.settings.difficulty };
  for (;;) {
    const belts = db.belts.filter((b, i) => i <= game.save.data.beltIndex);
    const seg = (key, items) => `<div class="seg">${items.map(([v, label]) => `<button data-act="${key}:${v}" class="${String(sel[key]) === String(v) ? 'on' : ''}">${label}</button>`).join('')}</div>`;
    const arch = db.opponents.archetypes;
    const html = `<div class="panel narrow">
      <div class="head"><h2>${t('menu.quick')}</h2><button class="btn small" data-act="back">${t('ui.back')}</button></div>
      <div class="setting"><span>${t('quick.belt')}</span>${seg('belt', belts.map((b, i) => [i, esc(loc(b, 'name'))]))}</div>
      <div class="setting"><span>${t('quick.opponent')}</span>${seg('arch', Object.keys(arch).map((k) => [k, esc(loc(arch[k], 'name'))]))}</div>
      <p class="muted">${esc(loc(arch[sel.arch], 'desc'))}</p>
      <div class="setting"><span>${t('set.difficulty')}</span>${seg('diff', ['easy', 'normal', 'hard'].map((d) => [d, t(`diff.${d}`)]))}</div>
      <button class="btn block primary" data-act="go">Hajime!</button></div>`;
    const { act } = await game.ui.ask(html);
    if (act === 'back') return;
    if (act !== 'go') {
      const [key, v] = act.split(':');
      sel[key] = key === 'belt' ? Number(v) : v;
      continue;
    }
    const belt = db.belts[sel.belt];
    const names = db.opponents.roster.filter((r) => r.archetype === sel.arch);
    const opp = names[Math.floor(Math.random() * names.length)];
    for (;;) {
      const res = await game.runFight({
        mode: 'match', bg: sel.belt > 0 ? 'hall' : 'dojo', hints: true, difficulty: sel.diff, timeSec: belt.matchTimeSec,
        player: { name: t('hud.player'), belt: belt.id, ...fullSet(db, belt.id) },
        opponent: { name: opp.name, belt: belt.id, archetype: sel.arch },
      });
      if (!res || res.aborted) break;
      const a = await fightResultScreen(game, res, [{ act: 'again', label: t('ui.again') }, { act: 'back', label: t('ui.back') }]);
      if (a !== 'again') break;
    }
  }
}
