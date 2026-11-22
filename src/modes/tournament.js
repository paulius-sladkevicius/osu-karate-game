// SPDX-License-Identifier: BUSL-1.1
// Turnyras (taikai): eliminacijos lentelė arba kovų serija; kitos poros simuliuojamos; tarp kovų atsistato 60 % žalos.

import { shuffle } from '../core/rng.js';
import { t, loc, esc } from '../core/i18n.js';
import { playerSet, rosterFor, oppFromRoster, fightResultScreen } from './common.js';

const ME = { me: true };

function entrants(game, belt, n) {
  const db = game.db;
  let list = shuffle(Math.random, rosterFor(db, belt.id));
  // Jei šio diržo varžovų trūksta, lentelė papildoma kitų diržų dalyviais (su šio diržo lygiu).
  const others = shuffle(Math.random, db.opponents.roster.filter((r) => r.belt !== belt.id));
  while (list.length < n && others.length) list.push({ ...others.pop(), belt: belt.id });
  return list.slice(0, n).map((r) => ({ ...oppFromRoster(db, r), skill: 0.5 + Math.random() * 0.5 }));
}

function simulate(a, b) {
  return Math.random() * (a.skill + 0.3) > Math.random() * (b.skill + 0.3) ? a : b;
}

function bracketHtml(rounds, names) {
  return `<div class="bracket">${rounds.map((r, ri) => `<div class="round"><div class="muted">${names[ri] || ''}</div>${r.map((p) => `
    <div class="pair${p.next ? ' next' : ''}">
      <div class="${p.w === p.a ? 'win' : ''}${p.a && p.a.me ? ' me' : ''}">${p.a ? esc(p.a.name) : '—'}</div>
      <div class="${p.w === p.b ? 'win' : ''}${p.b && p.b.me ? ' me' : ''}">${p.b ? esc(p.b.name) : '—'}</div>
    </div>`).join('')}</div>`).join('')}</div>`;
}

export async function runTournament(game, beltIdx) {
  const db = game.db;
  const belt = db.belts[beltIdx];
  const T = belt.tournament;
  const name = loc(T, 'name');
  const me = { ...ME, name: t('hud.player') };
  const set = playerSet(game);
  const keep = 1 - db.rules.recovery.tournament;
  let carry = null;

  const fightVs = async (opp) => {
    // Žaidėjas atsitiktinai gauna Aka arba Shiro pusę.
    const res = await game.runFight({
      mode: 'match', bg: T.bg, hints: true, timeSec: belt.matchTimeSec,
      playerSide: Math.random() < 0.5 ? 'aka' : 'shiro',
      player: { name: me.name, belt: db.belts[game.save.data.beltIndex].id, ...set, carry },
      opponent: opp,
    });
    if (!res || res.aborted) return null;
    carry = { legs: res.player.dmg.legs * keep, body: res.player.dmg.body * keep, head: res.player.dmg.head * keep };
    await fightResultScreen(game, res, [{ act: 'go', label: t('ui.next') }]);
    return res.playerWon;
  };

  let won = false;
  if (T.format === 'series') {
    const opps = entrants(game, belt, T.size - 1);
    won = true;
    for (let i = 0; i < opps.length; i++) {
      const { act } = await game.ui.ask(`<div class="panel center"><h2>${esc(name)}</h2>
        <p>${t('tour.fight', { n: i + 1, total: opps.length })}: <b>${esc(opps[i].name)}</b></p>
        <p class="muted">${t(`arch.${opps[i].archetype}`)}</p>
        <button class="btn primary" data-act="go">${t('tour.fightBtn')}</button><button class="btn" data-act="back">${t('ui.quit')}</button></div>`);
      if (act !== 'go') return false;
      const r = await fightVs(opps[i]);
      if (r === null) return false;
      if (!r) { won = false; break; }
    }
  } else {
    const all = shuffle(Math.random, [me, ...entrants(game, belt, T.size - 1)]);
    const roundNames = { 8: t('tour.quarter'), 4: t('tour.semi'), 2: t('tour.final') };
    const rounds = [];
    let cur = all;
    while (cur.length >= 2) {
      const pairs = [];
      for (let i = 0; i < cur.length; i += 2) pairs.push({ a: cur[i], b: cur[i + 1], w: null });
      rounds.push(pairs);
      const mine = pairs.find((p) => p.a.me || p.b.me);
      const names = rounds.map((r) => roundNames[r.length * 2] || '');
      if (mine) {
        mine.next = true;
        const opp = mine.a.me ? mine.b : mine.a;
        const { act } = await game.ui.ask(`<div class="panel"><div class="head"><h2>${esc(name)}</h2><span class="muted">${names[names.length - 1]}</span></div>
          ${bracketHtml(rounds, names)}
          <p>${t('tour.next')}: <b>${esc(opp.name)}</b> <span class="muted">${t(`arch.${opp.archetype}`)}</span></p>
          <button class="btn primary" data-act="go">${t('tour.fightBtn')}</button><button class="btn" data-act="back">${t('ui.quit')}</button></div>`, 'top');
        if (act !== 'go') return false;
        const r = await fightVs(opp);
        if (r === null) return false;
        mine.next = false;
        mine.w = r ? (mine.a.me ? mine.a : mine.b) : opp;
      }
      // Kitos poros kovos simuliuojamos.
      for (const p of pairs) if (!p.w) p.w = simulate(p.a, p.b);
      cur = pairs.map((p) => p.w);
      if (mine && !mine.w.me) {
        while (cur.length >= 2) {
          const more = [];
          for (let i = 0; i < cur.length; i += 2) more.push({ a: cur[i], b: cur[i + 1], w: simulate(cur[i], cur[i + 1]) });
          rounds.push(more);
          cur = more.map((p) => p.w);
        }
        const names2 = rounds.map((r) => roundNames[r.length * 2] || '');
        await game.ui.ask(`<div class="panel"><h2>${esc(name)}</h2>${bracketHtml(rounds, names2)}
          <p>${t('tour.out')} ${t('tour.champion')}: <b>${esc(cur[0].name)}</b></p>
          <button class="btn primary" data-act="go">${t('ui.next')}</button></div>`, 'top');
        return false;
      }
    }
    won = cur[0].me;
  }

  if (!won) {
    await game.ui.ask(`<div class="panel center"><h2>${esc(name)}</h2><p>${t('tour.out')}</p><button class="btn primary" data-act="go">${t('ui.next')}</button></div>`);
    return false;
  }
  // Finalo scena: apdovanojimai ir taurė.
  const s = game.save.data;
  if (!s.trophies.includes(T.id)) s.trophies.push(T.id);
  const stripe = belt.kyu.length > 1 && s.beltIndex >= beltIdx && !s.stripes[belt.id];
  if (stripe) s.stripes[belt.id] = true;
  game.save.write();
  game.audio.osu();
  await game.ui.ask(`<div class="panel center">
    <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
      <path d="M35 15h50v30a25 25 0 0 1-50 0z" fill="#ffd54a" stroke="#8a6a10" stroke-width="4"/>
      <path d="M35 22H18a17 17 0 0 0 20 22M85 22h17a17 17 0 0 1-20 22" fill="none" stroke="#8a6a10" stroke-width="5"/>
      <rect x="54" y="68" width="12" height="20" fill="#d9a520"/><rect x="38" y="88" width="44" height="12" rx="3" fill="#8a6a10"/>
    </svg>
    <h1>${t('tour.won')}</h1><p>${esc(name)}</p>
    ${stripe ? `<p class="jp">${t('tour.stripe', { kyu: belt.kyu[1] })}</p>` : ''}
    <button class="btn primary" data-act="go">Osu!</button></div>`);
  return true;
}
