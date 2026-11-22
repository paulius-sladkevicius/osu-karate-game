// SPDX-License-Identifier: BUSL-1.1
// Žaidėjo valdiklis: įvesties įvykius paverčia kovotojo ketinimais (intent) per kombinacijų atpažinimą.

import { ComboRecognizer, inputGlyphs } from '../core/combo.js';

export class PlayerController {
  constructor(fighter, db, input) {
    this.f = fighter;
    this.db = db;
    this.input = input;
    this.cfg = db.rules.input;
    this.recog = new ComboRecognizer(db.techniques, this.cfg);
    this.trail = [];        // įvesties pėdsakas pagalbos režimui: [{ g, t }]
    this.heldBtn = null;
    this.tap = { dir: null, start: 0, end: -1e9, dur: 0 };
    this.onPress = null;    // (rezultatas, mygtukas) – pamokoms ir egzaminui
    this.lastLocked = null;
  }

  pushTrail(g, t) {
    this.trail.push({ g, t });
    if (this.trail.length > 8) this.trail.shift();
  }

  update() {
    const f = this.f;
    const it = { move: 0, crouch: false, guard: null, guardPressed: false, tech: null, techHeld: false, dash: null, kiai: false, mash: 0 };
    for (const ev of this.input.drain()) {
      if (ev.k === 'dir') {
        const prev = this.recog.dir;
        this.recog.pushDir(ev.dir, ev.t);
        if (ev.dir !== 'N') this.pushTrail(inputGlyphs([ev.dir])[0], ev.t);
        // Dvigubas bakstelėjimas →→ / ←← = įsiveržimas / atsitraukimas.
        if (prev === 'F' || prev === 'B') { this.tap.end = ev.t; this.tap.dur = ev.t - this.tap.start; this.tap.dir = prev; }
        if (ev.dir === 'F' || ev.dir === 'B') {
          if (this.tap.dir === ev.dir && ev.t - this.tap.end <= this.cfg.dashTapMs && this.tap.dur <= this.cfg.dashTapMs) it.dash = ev.dir;
          this.tap.start = ev.t;
        }
      } else if (ev.k === 'down') {
        it.mash++;
        this.pushTrail(ev.btn, ev.t);
        if (ev.btn === 'KIAI') { it.kiai = true; continue; }
        const r = this.recog.press(ev.btn, ev.t, f.unlocked);
        this.lastLocked = r.locked ? { id: r.matched, t: ev.t } : null;
        if (ev.btn === 'G') it.guardPressed = true;
        else if (r.tech) { it.tech = r.tech; this.heldBtn = ev.btn; }
        this.onPress?.(r, ev.btn);
      } else if (ev.k === 'up' && ev.btn === this.heldBtn) this.heldBtn = null;
    }
    const d = this.recog.dir;
    it.move = d.includes('F') ? 1 : d.includes('B') ? -1 : 0;
    it.crouch = d === 'D';
    if (this.input.held.G) {
      const level = d.includes('U') ? 'jodan' : d.includes('D') ? 'gedan' : 'chudan';
      const gt = this.db.guardByLevel[level];
      it.guard = gt && f.unlocked.has(gt.id) ? level : 'chudan';
    }
    it.techHeld = this.heldBtn != null && this.input.held[this.heldBtn];
    return it;
  }
}
