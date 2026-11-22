// SPDX-License-Identifier: BUSL-1.1
// Kelionės žemėlapis: 7 diržų skyriai kaip laiptai; kiekviename – pamokos, egzaminas, turnyras.

import { t, loc, esc } from '../core/i18n.js';
import { chapterOpen, lessonsDone, lessonProgress, kyuLabel } from './common.js';
import { lessonList } from './dojo.js';
import { runExam } from './exam.js';
import { runTournament } from './tournament.js';

export async function journey(game) {
  const db = game.db;
  let sel = Math.min(game.save.data.beltIndex + (lessonsDone(game, db.belts[game.save.data.beltIndex].id) ? 1 : 0), 2);
  for (;;) {
    const s = game.save.data;
    const cur = s.beltIndex;
    const steps = db.belts.map((b, i) => {
      const open = chapterOpen(game, i);
      return `<button class="step${i === sel ? ' sel' : ''}${open ? '' : ' locked'}" style="--belt:${b.color};height:${3.2 + i * 0.55}rem" data-act="sel:${i}">
        ${esc(loc(b, 'name'))}${i <= cur ? ' ✓' : ''}</button>`;
    }).join('');
    const b = db.belts[sel];
    const open = chapterOpen(game, sel);
    const prog = lessonProgress(game, b.id);
    const lessons = lessonsDone(game, b.id);
    const owned = cur >= sel;
    const T = b.tournament;
    let body;
    if (!b.available) body = `<p>${t('journey.stage4')}</p><p class="muted">${esc(loc(b, 'unlocks'))}</p>`;
    else if (!open) body = `<p>${t('journey.locked')}</p><p class="muted">${esc(loc(b, 'unlocks'))}</p>`;
    else {
      const examBtn = b.exam
        ? `<div class="item${owned ? ' done' : ''}"><div class="grow"><div class="name">${t('journey.exam')} (shinsa)</div>
            <div class="muted">${owned ? t('journey.examPassed') : lessons ? t('journey.examReady', { n: b.exam.kumite }) : t('journey.examNeedsLessons')}${s.exams[b.id] ? ` · ${Math.round(s.exams[b.id].best * 100)} %` : ''}</div></div>
            <button class="btn small${!owned && lessons ? ' primary' : ''}" data-act="exam" ${lessons ? '' : 'disabled'}>${owned ? t('dojo.repeat') : t('journey.take')}</button></div>`
        : `<div class="item done"><div class="grow"><div class="name">${t('journey.exam')}</div><div class="muted">${t('journey.noExam')}</div></div></div>`;
      const tourReady = owned && lessons;
      body = `<div class="list">
        <div class="item${lessons ? ' done' : ''}"><div class="grow"><div class="name">${t('dojo.lessons')}</div>
          <div class="muted">${esc(loc(b, 'unlocks'))} · ${prog.done}/${prog.total}</div></div>
          <button class="btn small${lessons ? '' : ' primary'}" data-act="lessons">${t('journey.open')}</button></div>
        ${examBtn}
        <div class="item${s.trophies.includes(T.id) ? ' done' : ''}"><div class="grow"><div class="name">${esc(loc(T, 'name'))}${s.trophies.includes(T.id) ? ' 🏆' : ''}</div>
          <div class="muted">${T.format === 'series' ? t('journey.series', { n: T.size - 1 }) : t('journey.bracket', { n: T.size })} · ${t('journey.optional')}</div></div>
          <button class="btn small" data-act="tour" ${tourReady ? '' : 'disabled'}>${t('journey.enter')}</button></div>
      </div>`;
    }
    const html = `<div class="panel">
      <div class="head"><h2>${t('journey.title')}</h2><span class="muted">${t('journey.current')}: ${esc(loc(db.belts[cur], 'name'))} (${kyuLabel(game, cur)})</span>
        <button class="btn small" data-act="back">${t('ui.back')}</button></div>
      <div class="stairs">${steps}</div>
      <h3>${sel + 1}. ${esc(loc(b, 'name'))} <span class="muted">${b.kyu.map((k) => (typeof k === 'number' ? `${k} kyu` : k)).join(', ')}</span></h3>
      ${body}</div>`;
    const { act } = await game.ui.ask(html, 'top');
    if (act === 'back') return;
    if (act.startsWith('sel:')) sel = Number(act.slice(4));
    else if (act === 'lessons') await lessonList(game, sel);
    else if (act === 'exam') { if (await runExam(game, sel)) sel = Math.min(sel, 2); }
    else if (act === 'tour') await runTournament(game, sel);
  }
}
