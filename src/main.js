// SPDX-License-Identifier: BUSL-1.1
// Paleidimas ir scenų valdytojas.

import { loadData } from './core/data.js';
import { startLoop } from './core/loop.js';
import { Input } from './core/input.js';
import { AudioSys } from './core/audio.js';
import { Save } from './core/save.js';
import { setLang, detectLang, t } from './core/i18n.js';
import { TouchControls } from './ui/touchControls.js';
import { Ui } from './ui/ui.js';
import { mainMenu } from './ui/menus.js';
import { FightScene } from './fight/fightScene.js';
import { makeBackground, W, H } from './fight/render.js';

const $ = (id) => document.getElementById(id);

// Senesnėms naršyklėms (pvz., iPad su Safari < 16), kuriose nėra CanvasRenderingContext2D.roundRect.
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function roundRect(x, y, w, h, r = 0) {
    const k = Math.min(r, w / 2, h / 2);
    this.moveTo(x + k, y);
    this.arcTo(x + w, y, x + w, y + h, k);
    this.arcTo(x + w, y + h, x, y + h, k);
    this.arcTo(x, y + h, x, y, k);
    this.arcTo(x, y, x + w, y, k);
    this.closePath();
  };
}

class Game {
  constructor(db) {
    this.db = db;
    this.save = new Save();
    this.save.load();
    this.settings = this.save.data.settings;
    if (!this.settings.lang) { this.settings.lang = detectLang(); this.save.write(); }
    setLang(db, this.settings.lang);
    this.canvas = $('game');
    this.ctx = this.canvas.getContext('2d');
    this.input = new Input();
    this.input.attachKeyboard(window);
    this.input.onPause = () => this.pause();
    this.audio = new AudioSys(this.settings);
    this.touch = new TouchControls($('touch'), this.input, this.settings);
    this.ui = new Ui($('ui'), this.audio);
    this.scene = null;
    this.paused = false;
    this.debugBoxes = false;
    this.menuBg = makeBackground('dojo', db.rules.arena);
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 250));
    const onFs = () => {
      document.querySelectorAll('[data-fs-label]').forEach((el) => { el.textContent = this.fullscreenLabel(); });
      setTimeout(() => this.resize(), 60);
    };
    document.addEventListener('fullscreenchange', onFs);
    document.addEventListener('webkitfullscreenchange', onFs);
    window.addEventListener('keydown', (e) => { if (e.code === 'KeyF' && !e.repeat && !e.ctrlKey && !e.metaKey) this.toggleFullscreen(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.scene) this.pause(); });
    $('rotate').textContent = t('ui.rotate');
  }

  // Virtuali 1280×720 raiška, letterbox, canvas × devicePixelRatio (daugiausia 2).
  resize() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(vw / W, vh / H);
    const cw = Math.floor(W * scale);
    const ch = Math.floor(H * scale);
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    this.canvas.style.width = `${cw}px`;
    this.canvas.style.height = `${ch}px`;
    this.canvas.style.left = `${Math.floor((vw - cw) / 2)}px`;
    this.canvas.style.top = `${Math.floor((vh - ch) / 2)}px`;
    this.canvas.width = Math.round(cw * dpr);
    this.canvas.height = Math.round(ch * dpr);
    this.viewScale = (cw * dpr) / W;
    this.touch.layout();
  }

  // Pirmas bakstelėjimas: pilnas ekranas, horizontali padėtis ir garso atrakinimas.
  enterFullscreen() {
    this.audio.unlock();
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (!req || document.fullscreenElement) return;
    try {
      const p = req.call(el, { navigationUI: 'hide' });
      if (p && p.then) p.then(() => screen.orientation?.lock?.('landscape')?.catch?.(() => {})).catch(() => {});
    } catch (e) { /* iPhone Safari: naudojamas PWA režimas */ }
  }

  fullscreenSupported() {
    const el = document.documentElement;
    return !!(el.requestFullscreen || el.webkitRequestFullscreen);
  }

  isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }

  exitFullscreen() {
    const exit = document.exitFullscreen || document.webkitExitFullscreen;
    if (!exit || !this.isFullscreen()) return;
    try {
      screen.orientation?.unlock?.();
      const p = exit.call(document);
      if (p && p.catch) p.catch(() => {});
    } catch (e) { /* nepalaikoma */ }
  }

  // Pilno ekrano režimo įjungimas / išjungimas (mygtukas meniu, nustatymuose ir pauzėje; klaviatūroje – F).
  toggleFullscreen() {
    if (this.isFullscreen()) this.exitFullscreen();
    else this.enterFullscreen();
  }

  fullscreenLabel() {
    return t(this.isFullscreen() ? 'ui.fsExit' : 'ui.fsEnter');
  }

  // Mygtukas su užrašu, kuris pats atsinaujina pasikeitus režimui. attr – pvz., data-act="fs".
  fullscreenButton(attr, cls = 'btn small') {
    if (!this.fullscreenSupported()) return '';
    return `<button class="${cls}" ${attr} data-fs-label>${this.fullscreenLabel()}</button>`;
  }

  vibrate(ms) {
    if (this.settings.vibrate && navigator.vibrate) { try { navigator.vibrate(ms); } catch (e) { /* nepalaikoma */ } }
  }

  applySettings() {
    setLang(this.db, this.settings.lang);
    this.touch.layout();
    $('rotate').textContent = t('ui.rotate');
    this.save.write();
  }

  runScene(scene) {
    return new Promise((resolve) => {
      this.ui.clear();
      this.scene = scene;
      scene.onDone = (result) => {
        scene.destroy();
        if (this.scene === scene) this.scene = null;
        resolve(result);
      };
    });
  }

  runFight(opts) {
    return this.runScene(new FightScene(this, opts));
  }

  pause() {
    if (!this.scene || this.paused) return;
    this.paused = true;
    this.input.clear();
    const el = $('pause');
    el.style.display = 'flex';
    el.innerHTML = `<div class="panel center"><h2>${t('ui.paused')}</h2>
      <button class="btn primary" data-p="resume">${t('ui.resume')}</button>
      <button class="btn" data-p="quit">${t('ui.quit')}</button>
      <p>${this.fullscreenButton('data-p="fs"')}</p></div>`;
    el.onclick = (e) => {
      const b = e.target.closest('[data-p]');
      if (!b) return;
      if (b.dataset.p === 'fs') { this.toggleFullscreen(); return; }
      el.style.display = 'none';
      this.paused = false;
      this.input.clear();
      if (b.dataset.p === 'quit' && this.scene) this.scene.finish({ aborted: true });
    };
  }

  update(dt) {
    if (this.scene && !this.paused) this.scene.update(dt);
  }

  render(alpha) {
    const ctx = this.ctx;
    ctx.setTransform(this.viewScale, 0, 0, this.viewScale, 0, 0);
    if (this.scene) this.scene.render(ctx, this.paused ? 1 : alpha);
    else {
      ctx.drawImage(this.menuBg, 0, 0);
      ctx.fillStyle = 'rgba(12,14,22,0.55)';
      ctx.fillRect(0, 0, W, H);
    }
  }
}

async function boot() {
  let db;
  try {
    db = await loadData();
  } catch (e) {
    $('ui').className = 'ui-on';
    $('ui').innerHTML = `<div class="panel center"><h2>Nepavyko įkelti žaidimo duomenų</h2><p>${String(e.message || e)}</p></div>`;
    return;
  }
  const game = new Game(db);
  window.__game = game;
  startLoop((dt) => game.update(dt), (a) => game.render(a));
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  mainMenu(game);
}

boot();
