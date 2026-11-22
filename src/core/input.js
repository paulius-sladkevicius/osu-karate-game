// SPDX-License-Identifier: BUSL-1.1
// Įvesties eilė: lietimo valdikliai ir klaviatūra rašo įvykius su laiko žymomis, kovos logika juos nuskaito
// fiksuotu žingsniu – taip nė vienas paspaudimas neprarandamas net jei jis trumpesnis už kadrą.

import { dirFromVector } from './combo.js';

const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());

export class Input {
  constructor() {
    this.q = [];
    this.held = { A: false, K: false, G: false, KIAI: false };
    this.dir = 'N';
    this.rei = 0;
    this.onPause = null;
    this.keys = {};
  }

  setDir(dir, t = now()) {
    if (dir === this.dir) return;
    this.dir = dir;
    this.q.push({ k: 'dir', dir, t });
  }

  button(btn, down, t = now()) {
    if (this.held[btn] === down) return;
    this.held[btn] = down;
    this.q.push({ k: down ? 'down' : 'up', btn, t });
  }

  pressRei() { this.rei++; }

  takeRei() {
    const r = this.rei > 0;
    this.rei = 0;
    return r;
  }

  drain() {
    const q = this.q;
    this.q = [];
    return q;
  }

  clear() {
    this.q = [];
    this.rei = 0;
    for (const b of Object.keys(this.held)) this.held[b] = false;
    this.dir = 'N';
    this.keys = {};
  }

  // Klaviatūra testavimui kompiuteryje: rodyklės + J/K/L (A/K/G), I arba tarpas = KIAI, Enter = REI, Esc = pauzė.
  attachKeyboard(target) {
    const MAP = { KeyJ: 'A', KeyK: 'K', KeyL: 'G', KeyI: 'KIAI', Space: 'KIAI' };
    const ARROWS = { ArrowLeft: 1, ArrowRight: 1, ArrowUp: 1, ArrowDown: 1 };
    const updateDir = () => {
      const dx = (this.keys.ArrowRight ? 1 : 0) - (this.keys.ArrowLeft ? 1 : 0);
      const dy = (this.keys.ArrowDown ? 1 : 0) - (this.keys.ArrowUp ? 1 : 0);
      this.setDir(dirFromVector(dx, dy, 0.2));
    };
    target.addEventListener('keydown', (e) => {
      if (e.repeat) { if (ARROWS[e.code] || MAP[e.code]) e.preventDefault(); return; }
      if (ARROWS[e.code]) { this.keys[e.code] = true; updateDir(); e.preventDefault(); }
      else if (MAP[e.code]) { this.button(MAP[e.code], true); e.preventDefault(); }
      else if (e.code === 'Enter' || e.code === 'KeyR') this.pressRei();
      else if (e.code === 'Escape' || e.code === 'KeyP') this.onPause?.();
    });
    target.addEventListener('keyup', (e) => {
      if (ARROWS[e.code]) { this.keys[e.code] = false; updateDir(); }
      else if (MAP[e.code]) this.button(MAP[e.code], false);
    });
  }
}
