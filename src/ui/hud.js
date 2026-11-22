// SPDX-License-Identifier: BUSL-1.1
// Kovos HUD: laikmatis, vardai, diržai, waza-ari ir chui ženklai, pusiausvyros / ištvermės / ki juostos,
// kūno siluetas su žala zonose, teisėjo komandos su subtitrais, įvesties pėdsakas ir užuominos.

import { W } from '../fight/render.js';
import { inputGlyphs } from '../core/combo.js';
import { t, loc } from '../core/i18n.js';

const FONT = '"Trebuchet MS", "Segoe UI", system-ui, sans-serif';

function dmgColor(v) {
  const k = Math.min(1, v / 100);
  const g = Math.round(255 - 215 * k);
  return `rgb(255,${g},${Math.round(g * 0.92)})`;
}

function bar(ctx, x, y, w, h, frac, col, left) {
  ctx.fillStyle = 'rgba(10,12,20,0.6)';
  ctx.fillRect(x, y, w, h);
  const fw = w * Math.max(0, Math.min(1, frac));
  ctx.fillStyle = col;
  ctx.fillRect(left ? x : x + w - fw, y, fw, h);
  ctx.strokeStyle = 'rgba(255,255,255,0.55)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, w, h);
}

export class Hud {
  constructor(scene) {
    this.scene = scene;
    this.callText = null;
    this.popups = [];
    this.banner = null;
    this.count = null;
    this.hints = [];
  }

  call(text, sub, ms = 1500) {
    this.callText = { text, sub, age: 0, ms };
  }

  popup(x, y, text, opts = {}) {
    this.popups.push({ x, y, text, age: 0, ms: opts.ms || 900, color: opts.color || '#fff', size: opts.size || 22 });
    if (this.popups.length > 10) this.popups.shift();
  }

  update(dt) {
    if (this.callText) { this.callText.age += dt; if (this.callText.age > this.callText.ms) this.callText = null; }
    for (const p of this.popups) p.age += dt;
    this.popups = this.popups.filter((p) => p.age < p.ms);
    if (this.count) { this.count.age += dt; if (this.count.age > 950) this.count = null; }
  }

  panel(ctx, f, left) {
    const db = this.scene.db;
    const X = (v) => (left ? 24 + v : W - 24 - v);
    const belt = db.belts[db.beltIdx[f.belt]];
    ctx.textAlign = left ? 'left' : 'right';
    ctx.textBaseline = 'alphabetic';
    // Aka / Shiro žyma ir vardas
    ctx.fillStyle = f.side === 'aka' ? '#e03127' : '#ffffff';
    ctx.beginPath(); ctx.arc(X(10), 26, 9, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#111'; ctx.lineWidth = 2; ctx.stroke();
    ctx.font = `bold 23px ${FONT}`;
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = 'rgba(0,0,0,0.75)';
    ctx.lineWidth = 4;
    const label = `${f.side === 'aka' ? 'AKA' : 'SHIRO'} · ${f.name}${f.isPlayer ? ` (${t('hud.you')})` : ''}`;
    ctx.strokeText(label, X(26), 34);
    ctx.fillText(label, X(26), 34);
    // Diržas
    ctx.fillStyle = belt.color;
    ctx.fillRect(left ? X(0) : X(0) - 64, 42, 64, 9);
    ctx.strokeStyle = '#111'; ctx.lineWidth = 1.5;
    ctx.strokeRect(left ? X(0) : X(0) - 64, 42, 64, 9);
    // Juostos
    const bx = left ? X(74) : X(74) - 300;
    bar(ctx, bx, 42, 300, 11, f.balance / 100, f.balance <= 0 ? '#ff5a4a' : '#59c8e6', left);
    bar(ctx, bx, 56, 300, 8, f.stamina / 100, f.stamina < 20 ? '#e0a03a' : '#78d06a', left);
    bar(ctx, bx, 67, 300, 8, f.ki / 100, f.kiaiT > 0 || f.ki >= 100 ? '#ffe36b' : '#d9a520', left);
    ctx.font = `11px ${FONT}`;
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.textAlign = left ? 'right' : 'left';
    ctx.fillText('気', left ? bx - 4 : bx + 304, 75);
    // Waza-ari (pusės apskritimo ikonos) ir chui (1–4)
    for (let i = 0; i < 2; i++) {
      const cx = X(14 + i * 30);
      ctx.beginPath();
      ctx.arc(cx, 96, 11, Math.PI, 0);
      ctx.closePath();
      ctx.fillStyle = i < f.wazaAri ? '#ffd54a' : 'rgba(10,12,20,0.55)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    const limit = db.rules.match.chuiLimit;
    for (let i = 0; i < limit; i++) {
      const cx = X(84 + i * 20);
      ctx.fillStyle = i < f.chui ? '#ff7a2a' : 'rgba(10,12,20,0.55)';
      ctx.fillRect(cx - 7, 85, 14, 14);
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.strokeRect(cx - 7, 85, 14, 14);
    }
    // Kūno siluetas: kojos, liemuo, galva nusidažo nuo baltos iki raudonos
    const sx = X(408);
    ctx.strokeStyle = '#15151c';
    ctx.lineWidth = 2;
    ctx.fillStyle = dmgColor(f.dmg.head);
    ctx.beginPath(); ctx.arc(sx, 30, 10, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = dmgColor(f.dmg.body);
    ctx.fillRect(sx - 12, 42, 24, 28); ctx.strokeRect(sx - 12, 42, 24, 28);
    ctx.fillStyle = dmgColor(f.dmg.legs);
    ctx.fillRect(sx - 12, 72, 10, 30); ctx.strokeRect(sx - 12, 72, 10, 30);
    ctx.fillRect(sx + 2, 72, 10, 30); ctx.strokeRect(sx + 2, 72, 10, 30);
  }

  draw(ctx) {
    const sc = this.scene;
    const off = sc.official;
    ctx.save();
    if (sc.showPanels) {
      this.panel(ctx, sc.fight.fighters[0], true);
      if (!sc.fight.fighters[1].hidden) this.panel(ctx, sc.fight.fighters[1], false);
    }
    if (off) {
      const sec = Math.max(0, Math.ceil(off.clock / 1000));
      ctx.textAlign = 'center';
      ctx.font = `bold 42px ${FONT}`;
      ctx.strokeStyle = 'rgba(0,0,0,0.8)';
      ctx.lineWidth = 5;
      ctx.fillStyle = sec <= 10 ? '#ffb347' : '#fff';
      const txt = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
      ctx.strokeText(txt, 640, 100);
      ctx.fillText(txt, 640, 100);
      if (off.round > 0) {
        ctx.font = `bold 17px ${FONT}`;
        ctx.fillStyle = '#ffd54a';
        const e = off.round > 1 ? `ENCHO ${off.round}` : 'ENCHO';
        ctx.strokeText(e, 640, 120);
        ctx.fillText(e, 640, 120);
      }
    }
    // Užuominos (tik pagalbos režime; egzaminuose išjungtos)
    if (this.hints.length) {
      ctx.textAlign = 'left';
      ctx.font = `15px ${FONT}`;
      ctx.globalAlpha = 0.8;
      this.hints.forEach((h, i) => {
        ctx.fillStyle = 'rgba(10,12,20,0.5)';
        ctx.fillRect(22, 120 + i * 21, 236, 19);
        ctx.fillStyle = '#ffd54a';
        ctx.fillText(h.glyphs, 28, 134 + i * 21);
        ctx.fillStyle = '#fff';
        ctx.fillText(h.name, 92, 134 + i * 21);
      });
      ctx.globalAlpha = 1;
    }
    // Įvesties pėdsakas
    if (sc.showTrail && sc.ctrl) {
      const now = performance.now();
      const tr = sc.ctrl.trail.filter((e) => now - e.t < 1300);
      if (tr.length) {
        ctx.textAlign = 'center';
        ctx.font = `bold 26px ${FONT}`;
        const text = tr.map((e) => e.g).join(' ');
        const w = ctx.measureText(text).width + 28;
        ctx.fillStyle = 'rgba(10,12,20,0.55)';
        ctx.beginPath(); ctx.roundRect(640 - w / 2, 672, w, 38, 10); ctx.fill();
        ctx.fillStyle = '#ffe9a8';
        ctx.fillText(text, 640, 700);
      }
    }
    for (const p of this.popups) {
      const k = p.age / p.ms;
      ctx.globalAlpha = k < 0.75 ? 1 : (1 - k) * 4;
      ctx.textAlign = 'center';
      ctx.font = `bold ${p.size}px ${FONT}`;
      ctx.strokeStyle = 'rgba(0,0,0,0.85)';
      ctx.lineWidth = 4;
      ctx.strokeText(p.text, p.x, p.y - k * 34);
      ctx.fillStyle = p.color;
      ctx.fillText(p.text, p.x, p.y - k * 34);
    }
    ctx.globalAlpha = 1;
    if (this.count) {
      ctx.textAlign = 'center';
      ctx.font = `bold 120px ${FONT}`;
      ctx.strokeStyle = 'rgba(0,0,0,0.85)';
      ctx.lineWidth = 8;
      ctx.fillStyle = '#ffd54a';
      ctx.strokeText(String(this.count.n), 640, 400);
      ctx.fillText(String(this.count.n), 640, 400);
    }
    if (this.callText) {
      const c = this.callText;
      const a = Math.min(1, c.age / 90, (c.ms - c.age) / 220);
      ctx.globalAlpha = Math.max(0, a);
      ctx.textAlign = 'center';
      let size = 74;
      ctx.font = `bold ${size}px ${FONT}`;
      while (ctx.measureText(c.text.toUpperCase()).width > 1100 && size > 34) { size -= 6; ctx.font = `bold ${size}px ${FONT}`; }
      ctx.strokeStyle = 'rgba(0,0,0,0.9)';
      ctx.lineWidth = 9;
      ctx.strokeText(c.text.toUpperCase(), 640, 240);
      ctx.fillStyle = '#fff';
      ctx.fillText(c.text.toUpperCase(), 640, 240);
      if (c.sub) {
        ctx.font = `25px ${FONT}`;
        ctx.lineWidth = 5;
        ctx.strokeText(c.sub, 640, 280);
        ctx.fillStyle = '#ffe9a8';
        ctx.fillText(c.sub, 640, 280);
      }
      ctx.globalAlpha = 1;
    }
    if (this.banner) {
      const b = this.banner;
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(10,12,20,0.82)';
      ctx.beginPath(); ctx.roundRect(340, 596, 600, 96, 14); ctx.fill();
      ctx.strokeStyle = b.side === 'aka' ? '#e03127' : '#ffffff';
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.font = `bold 38px ${FONT}`;
      ctx.fillStyle = '#fff';
      ctx.fillText(b.title, 640, 640);
      ctx.font = `bold 26px ${FONT}`;
      ctx.fillStyle = '#ffd54a';
      ctx.fillText(b.votes, 640, 676);
    }
    ctx.restore();
  }

  // Užuominų sąrašas: atrakintos technikos su ilgesne nei vieno mygtuko įvestimi.
  buildHints(fighter) {
    const db = this.scene.db;
    const termsTr = this.scene.game.settings.termsTranslated;
    this.hints = db.techniques
      .filter((x) => fighter.unlocked.has(x.id) && x.type === 'strike' && !x.auto && x.input.length > 1 && x.legalInKumite)
      .slice(-7)
      .map((x) => ({ glyphs: inputGlyphs(x.input).join(''), name: termsTr ? `${x.name}` : x.name, sub: loc(x, 'name') }));
  }
}
