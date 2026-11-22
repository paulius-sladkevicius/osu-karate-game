// SPDX-License-Identifier: BUSL-1.1
// Startas, pagrindinis meniu ir nustatymai.

import { t, loc, esc } from '../core/i18n.js';
import { journey } from '../modes/journey.js';
import { dojoMenu, wazaCho } from '../modes/dojo.js';
import { quickFight } from '../modes/quickfight.js';
import { debugScreen } from '../modes/debug.js';
import { currentBelt, kyuLabel, beltChip } from '../modes/common.js';

function isIos() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isStandalone() {
  return (window.matchMedia && window.matchMedia('(display-mode: fullscreen), (display-mode: standalone)').matches) || navigator.standalone === true;
}

// Startas: „Bakstelėk, kad pradėtum“ – šis bakstelėjimas įjungia pilno ekrano režimą ir garsą.
async function startScreen(game) {
  const ios = isIos() && !isStandalone();
  await game.ui.ask(`<div class="start" data-act="start"><div class="panel center">
    <div class="title-logo">OSU!</div>
    <div class="title-sub">${t('app.subtitle')}</div>
    <p class="muted">${t('app.tagline')}</p>
    <p><button class="btn primary" data-act="start">${t('start.tap')}</button></p>
    ${ios ? `<p class="muted">${t('start.ios')}</p>` : ''}
    <p class="muted">© 2026 Paulius Sladkevičius · BUSL-1.1</p></div></div>`);
  game.enterFullscreen();
}

async function settingsScreen(game) {
  const s = game.settings;
  const chk = (key) => `<label class="setting"><span>${t(`set.${key}`)}</span><input type="checkbox" data-set="${key}" ${s[key] ? 'checked' : ''}></label>`;
  const rng = (key, min, max, step) => `<label class="setting"><span>${t(`set.${key}`)}</span><input type="range" data-set="${key}" min="${min}" max="${max}" step="${step}" value="${s[key]}"></label>`;
  const seg = (key, items) => `<div class="setting"><span>${t(`set.${key}`)}</span><div class="seg">${items.map(([v, label]) => `<button data-act="set:${key}:${v}" class="${s[key] === v ? 'on' : ''}">${label}</button>`).join('')}</div></div>`;
  for (;;) {
    const html = `<div class="panel">
      <div class="head"><h2>${t('menu.settings')}</h2><button class="btn small" data-act="back">${t('ui.back')}</button></div>
      <div class="cols"><div>
        ${seg('lang', [['lt', 'Lietuvių'], ['en', 'English']])}
        ${seg('difficulty', ['easy', 'normal', 'hard'].map((d) => [d, t(`diff.${d}`)]))}
        ${chk('sound')}${chk('music')}${chk('voice')}${chk('vibrate')}
      </div><div>
        ${rng('btnScale', 0.8, 1.5, 0.05)}${rng('btnOpacity', 0.3, 1, 0.05)}
        ${chk('leftHanded')}${chk('assist')}${chk('kihonHints')}${chk('termsTranslated')}
        <div class="setting"><span>${t('set.reset')}</span><button class="btn small" data-act="reset">${t('set.resetBtn')}</button></div>
      </div></div>
      ${game.fullscreenSupported() ? `<div class="setting"><span>${t('set.fullscreen')}</span>${game.fullscreenButton('data-act="fs"')}</div>` : ''}
      <p class="muted">${t('set.install')}</p></div>`;
    const wait = game.ui.ask(html, 'top');
    game.ui.root.querySelectorAll('[data-set]').forEach((el) => {
      el.addEventListener('input', () => {
        s[el.dataset.set] = el.type === 'checkbox' ? el.checked : Number(el.value);
        game.applySettings();
        if (el.dataset.set === 'music') game.audio.music(s.music ? 'taiko' : null);
      });
    });
    const { act } = await wait;
    if (act === 'back') return;
    if (act === 'fs') { game.toggleFullscreen(); continue; }
    if (act === 'reset') {
      const c = await game.ui.ask(`<div class="panel center"><h2>${t('set.resetAsk')}</h2>
        <button class="btn primary" data-act="yes">${t('set.resetBtn')}</button><button class="btn" data-act="no">${t('ui.back')}</button></div>`);
      if (c.act === 'yes') { game.save.reset(); game.settings = game.save.data.settings; }
    } else if (act.startsWith('set:')) {
      const [, key, v] = act.split(':');
      s[key] = v;
      game.applySettings();
    }
  }
}

export async function mainMenu(game) {
  if (new URLSearchParams(location.search).has('debug')) { game.audio.unlock(); await debugScreen(game); }
  else await startScreen(game);
  for (;;) {
    game.audio.music('taiko');
    const belt = currentBelt(game);
    const s = game.save.data;
    const fresh = s.learned.length === 0 && s.stats.fights === 0;
    const html = `<div class="panel narrow center">
      <div class="title-logo">OSU!</div>
      <div class="title-sub">${t('app.subtitle')}</div>
      <p class="muted">${t('app.tagline')}</p>
      <p>${beltChip(game, s.beltIndex)} ${esc(loc(belt, 'name'))} · ${kyuLabel(game, s.beltIndex)}${s.trophies.length ? ` · 🏆 ${s.trophies.length}` : ''}</p>
      <div class="menu-grid">
        <button class="btn primary wide" data-act="journey">${fresh ? t('menu.begin') : t('menu.journey')}</button>
        <button class="btn" data-act="dojo">Dojo</button>
        <button class="btn" data-act="quick">${t('menu.quick')}</button>
        <button class="btn" data-act="wazacho">Waza-chō</button>
        <button class="btn" data-act="settings">${t('menu.settings')}</button>
      </div>
      <p>${game.fullscreenButton('data-act="fs"')}<button class="btn small" data-act="debug">Debug</button></p></div>`;
    const { act } = await game.ui.ask(html);
    game.audio.music(null);
    if (act === 'journey') await journey(game);
    else if (act === 'dojo') await dojoMenu(game);
    else if (act === 'quick') await quickFight(game);
    else if (act === 'wazacho') await wazaCho(game);
    else if (act === 'settings') await settingsScreen(game);
    else if (act === 'fs') game.toggleFullscreen();
    else if (act === 'debug') await debugScreen(game);
  }
}
