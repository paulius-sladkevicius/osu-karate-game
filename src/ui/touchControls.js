// SPDX-License-Identifier: BUSL-1.1
// Lietimo valdikliai: plaukiojantis džoistikas (kairė ~40 % ekrano) ir mygtukai A / K / G + KIAI lanku dešinėje.
// Pointer Events su multi-touch: kiekvienas pointerId sekamas atskirai, todėl džoistikas ir mygtukai veikia vienu metu.

import { dirFromVector } from '../core/combo.js';

const GAP = 12;
const STICK_R = 62;

export class TouchControls {
  constructor(root, input, settings) {
    this.root = root;
    this.input = input;
    this.settings = settings;
    this.stickId = null;
    this.origin = { x: 0, y: 0 };
    this.btnPointers = new Map();
    this.kiaiReady = false;
    root.innerHTML = `
      <div class="tc-zone"></div>
      <div class="tc-stick"><div class="tc-knob"></div></div>
      <button class="tc-btn tc-a" data-btn="A"><b>A</b><span>TE</span></button>
      <button class="tc-btn tc-k" data-btn="K"><b>K</b><span>ASHI</span></button>
      <button class="tc-btn tc-g" data-btn="G"><b>G</b><span>UKE</span></button>
      <button class="tc-btn tc-kiai" data-btn="KIAI"><b>気</b><span>KIAI</span></button>
      <button class="tc-pause" aria-label="Pause">II</button>
      <button class="tc-rei">REI</button>`;
    this.zone = root.querySelector('.tc-zone');
    this.stick = root.querySelector('.tc-stick');
    this.knob = root.querySelector('.tc-knob');
    this.rei = root.querySelector('.tc-rei');
    this.pause = root.querySelector('.tc-pause');
    this.buttons = [...root.querySelectorAll('.tc-btn')];

    const stop = (e) => { e.preventDefault(); e.stopPropagation(); };
    this.zone.addEventListener('pointerdown', (e) => {
      stop(e);
      if (this.stickId !== null) return;
      this.stickId = e.pointerId;
      try { this.zone.setPointerCapture(e.pointerId); } catch (err) { /* sintetiniai įvykiai */ }
      this.origin = { x: e.clientX, y: e.clientY };
      this.stick.style.display = 'block';
      this.stick.style.left = `${e.clientX}px`;
      this.stick.style.top = `${e.clientY}px`;
      this.moveStick(e);
    });
    this.zone.addEventListener('pointermove', (e) => { if (e.pointerId === this.stickId) { stop(e); this.moveStick(e); } });
    const endStick = (e) => {
      if (e.pointerId !== this.stickId) return;
      stop(e);
      this.stickId = null;
      this.stick.style.display = 'none';
      this.input.setDir('N');
    };
    this.zone.addEventListener('pointerup', endStick);
    this.zone.addEventListener('pointercancel', endStick);

    for (const el of this.buttons) {
      const btn = el.dataset.btn;
      el.addEventListener('pointerdown', (e) => {
        stop(e);
        try { el.setPointerCapture(e.pointerId); } catch (err) { /* sintetiniai įvykiai */ }
        this.btnPointers.set(e.pointerId, btn);
        el.classList.add('down');
        this.input.button(btn, true);
      });
      const up = (e) => {
        if (!this.btnPointers.has(e.pointerId)) return;
        stop(e);
        this.btnPointers.delete(e.pointerId);
        el.classList.remove('down');
        this.input.button(btn, false);
      };
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
    }
    this.rei.addEventListener('pointerdown', (e) => { stop(e); this.input.pressRei(); });
    this.pause.addEventListener('pointerdown', (e) => { stop(e); this.input.onPause?.(); });
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    globalThis.addEventListener?.('resize', () => this.layout());
    this.setMode('none');
    this.layout();
  }

  moveStick(e) {
    let dx = (e.clientX - this.origin.x) / STICK_R;
    let dy = (e.clientY - this.origin.y) / STICK_R;
    const m = Math.hypot(dx, dy);
    if (m > 1) { dx /= m; dy /= m; }
    this.knob.style.transform = `translate(${dx * STICK_R}px, ${dy * STICK_R}px)`;
    this.input.setDir(dirFromVector(dx, dy, 0.2));   // mirtina zona – 20 % spindulio
  }

  // Mygtukai ≥ 64×64 CSS px, tarpai ≥ 12 px; dydis ir permatomumas – iš nustatymų; kairiarankiams zonos sukeičiamos.
  layout() {
    const s = this.settings;
    const S = Math.max(64, Math.round(84 * (s.btnScale || 1)));
    const m = 18;
    const side = s.leftHanded ? 'left' : 'right';
    const other = s.leftHanded ? 'right' : 'left';
    const pos = {
      A: [2.75 * S + 2 * GAP, 0.3 * S, S],
      K: [1.55 * S + GAP, 0.62 * S, S],
      G: [0.3 * S, 1.45 * S, S],
      KIAI: [1.75 * S + GAP, 1.95 * S, Math.max(52, Math.round(S * 0.7))],
    };
    for (const el of this.buttons) {
      const [x, y, size] = pos[el.dataset.btn];
      el.style[side] = `calc(${m + x}px + env(safe-area-inset-${side}, 0px))`;
      el.style[other] = 'auto';
      el.style.bottom = `calc(${m + y}px + env(safe-area-inset-bottom, 0px))`;
      el.style.width = el.style.height = `${size}px`;
      el.style.fontSize = `${Math.round(size * 0.34)}px`;
    }
    this.zone.style[other] = '0';
    this.zone.style[side] = 'auto';
    this.root.style.setProperty('--tc-alpha', String(s.btnOpacity ?? 0.6));
  }

  // mode: 'fight' – visi valdikliai; 'none' – paslėpti.
  setMode(mode) {
    this.root.style.display = mode === 'none' ? 'none' : 'block';
    if (mode === 'none') { this.showRei(false); this.stickId = null; this.stick.style.display = 'none'; this.btnPointers.clear(); }
    for (const el of this.buttons) el.classList.remove('down');
  }

  showRei(on) {
    this.rei.style.display = on ? 'block' : 'none';
  }

  setKiai(ready) {
    if (ready === this.kiaiReady) return;
    this.kiaiReady = ready;
    this.root.querySelector('.tc-kiai').classList.toggle('ready', ready);
  }
}
