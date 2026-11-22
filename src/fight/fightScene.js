// SPDX-License-Identifier: BUSL-1.1
// Kovos scena: sujungia kovos branduolį, teisėją, valdiklius, HUD, garsą ir piešimą.
// Naudojama ir kumite kovoms (mode 'match'), ir dojo / egzamino treniruotėms (mode 'practice' + director).

import { Fight } from './combat.js';
import { Referee } from './referee.js';
import { PlayerController } from './player.js';
import { AIController, DummyController, buildProfile } from './ai.js';
import { fighterPose, lerpPose, drawFigure, drawShadow } from './skeleton.js';
import { makeBackground, judgeSpots, drawCornerJudge, drawShushin, Particles, W, H } from './render.js';
import { hurtboxes, attackBox, ZONE_Y } from './fighter.js';
import { Hud } from '../ui/hud.js';
import { techsUpTo, combosUpTo } from '../core/data.js';
import { t, loc } from '../core/i18n.js';

export class FightScene {
  // opts: { mode, bg, playerSide, player: { name, belt, unlocked, combos, carry, lockFacing },
  //         opponent: { name, belt, archetype, dummy, techId, carry } | null, difficulty, timeSec,
  //         hints, director, debug, rng, showPanels, judgesPreview }
  constructor(game, opts) {
    this.game = game;
    this.db = game.db;
    this.opts = opts;
    const db = this.db;
    const mode = opts.mode || 'match';
    const pSide = opts.playerSide || 'aka';
    const oSide = pSide === 'aka' ? 'shiro' : 'aka';
    const practice = mode === 'practice';
    const p = opts.player;
    const o = opts.opponent;
    const profile = o && !o.dummy ? buildProfile(db, o, opts.difficulty || game.settings.difficulty) : null;
    const pCfg = {
      side: pSide, name: p.name || t('hud.player'), belt: p.belt, isPlayer: true, unlocked: p.unlocked, combos: p.combos,
      carry: p.carry, immortal: practice, lockFacing: !!p.lockFacing,
    };
    const oBelt = o ? o.belt : p.belt;
    const oCfg = {
      side: oSide, name: o ? o.name : '', belt: oBelt, hidden: !o, immortal: practice,
      unlocked: techsUpTo(db, oBelt), combos: combosUpTo(db, oBelt), dmgMult: profile ? profile.dmgMult : 1, carry: o ? o.carry : null,
    };
    this.fight = new Fight(db, pSide === 'aka' ? pCfg : oCfg, pSide === 'aka' ? oCfg : pCfg, { mode, rng: opts.rng });
    this.pi = pSide === 'aka' ? 0 : 1;
    this.player = this.fight.fighters[this.pi];
    this.opp = this.fight.fighters[1 - this.pi];
    this.ctrl = new PlayerController(this.player, db, game.input);
    this.ai = null;
    if (o) {
      this.ai = o.dummy
        ? new DummyController(this.opp, this.player, db, o.dummy, { techId: o.techId, intervalMs: o.intervalMs })
        : new AIController(this.opp, this.player, profile, db, opts.rng);
    }
    this.bg = makeBackground(opts.bg || 'dojo', db.rules.arena);
    this.spots = judgeSpots(db.rules.arena);
    this.hud = new Hud(this);
    this.particles = new Particles();
    this.cam = { shake: 0, zoom: 1, zx: 640 };
    this.official = null;
    this.time = 0;
    this.done = false;
    this.onDone = null;
    this.showPanels = opts.showPanels ?? true;
    this.showTrail = !!opts.hints && game.settings.assist;
    if (opts.hints && game.settings.assist) this.hud.buildHints(this.player);
    this.debug = !!opts.debug;
    this.judgesPreview = opts.judgesPreview || null;
    this.director = opts.director || null;
    game.input.clear();
    game.touch.setMode('fight');
    game.touch.showRei(false);
    this.official = mode === 'match'
      ? new Referee(this.fight, db, { rng: opts.rng, timeSec: opts.timeSec, onEvent: (ev) => this.onOfficial(ev) })
      : null;
    game.audio.music(opts.bg === 'hall' || opts.bg === 'arena' ? 'crowd' : null);
    if (this.director) this.director.attach(this);
  }

  update(dt) {
    if (this.done) return;
    this.time += dt;
    const intents = [null, null];
    const pIt = this.ctrl.update();
    intents[this.pi] = pIt;
    if (this.ai) intents[1 - this.pi] = this.ai.update(dt, this.fight);
    if (this.director && this.director.intents) this.director.intents(intents, dt);
    if (this.official && this.game.input.takeRei()) this.official.bow(this.pi);
    this.fight.update(dt, intents);
    const evs = this.fight.takeEvents();
    for (const ev of evs) this.onFightEvent(ev);
    if (this.official) {
      this.official.handle(evs);
      this.official.update(dt);
      const z = this.official.zoom;
      this.cam.zoom += ((z ? z.k : 1) - this.cam.zoom) * 0.06;
      if (z) this.cam.zx += (z.x - this.cam.zx) * 0.08;
    }
    if (this.ctrl.lastLocked) {
      const tech = this.db.tech[this.ctrl.lastLocked.id];
      this.hud.popup(this.player.x, 300, `${tech.name} – ${t('hud.locked')}`, { color: '#ffb0a0', size: 18 });
      this.ctrl.lastLocked = null;
    }
    this.game.touch.setKiai(this.player.ki >= 100 && this.player.unlocked.has('kiai_mode'));
    if (this.director) this.director.update(dt);
    this.hud.update(dt);
    this.particles.update(dt);
    this.cam.shake = Math.max(0, this.cam.shake - dt * 0.04);
  }

  onFightEvent(ev) {
    const g = this.game;
    const gy = this.db.rules.arena.groundY;
    switch (ev.type) {
      case 'techStart':
        if (ev.f === this.player) {
          const sub = g.settings.termsTranslated ? ` · ${loc(ev.def, 'name')}` : '';
          this.hud.popup(ev.f.x, gy - 250, ev.def.name + sub, { size: 19, color: ev.def.legalInKumite ? '#fff' : '#ffb0a0' });
        }
        break;
      case 'techActive': g.audio.whoosh(); break;
      case 'combo':
        if (ev.f === this.player) { this.hud.popup(640, 330, `OSU! ${ev.combo.name}`, { size: 34, color: '#ffd54a', ms: 1300 }); g.audio.osu(); }
        break;
      case 'kiai': g.audio.kiai(ev.f.id); this.hud.popup(ev.f.x, gy - 270, 'KIAI!', { size: 40, color: '#ffe36b' }); break;
      case 'hit': {
        const d = ev.defender;
        const y = gy - (ZONE_Y[ev.zone || 'body'][0] + ZONE_Y[ev.zone || 'body'][1]) / 2;
        const dir = Math.sign(d.x - ev.attacker.x) || 1;
        if (ev.blocked) {
          if (ev.sune) g.audio.sune(); else g.audio.block();
          this.particles.burst(d.x - dir * 20, y, dir, 4, 'rgba(255,240,180,0.9)');
          if (ev.perfect) this.hud.popup(d.x, y - 60, t('hud.perfect'), { color: '#8ff0ff', size: 22 });
        } else if (!ev.foul || ev.foul === 'illegal') {
          g.audio.hit(ev.zone || 'body', Math.min(1, (ev.amount || 6) / 25));
          this.particles.burst(d.x - dir * 14, y, dir, 6 + Math.round((ev.amount || 0) / 3));
          this.cam.shake = Math.min(10, 3 + (ev.amount || 0) / 3);
          if (d === this.player || ev.attacker === this.player) g.vibrate(d === this.player ? 40 : 20);
        }
        if (this.opts.showDamage && ev.amount) this.hud.popup(d.x, y - 30, ev.amount.toFixed(1), { color: '#ffd54a', size: 20 });
        break;
      }
      case 'knockdown': g.audio.thud(); this.cam.shake = 12; g.vibrate(80); break;
      default: break;
    }
    if (this.director && this.director.onEvent) this.director.onEvent(ev);
  }

  onOfficial(ev) {
    const g = this.game;
    switch (ev.type) {
      case 'call': {
        const who = ev.side ? `${this.db.rules.calls[ev.side]}, ` : '';
        const text = who + this.db.rules.calls[ev.id];
        let sub = g.settings.termsTranslated ? t(`call.${ev.id}`) : '';
        if (ev.reason) sub = t(`foul.${ev.reason}`) + (sub ? ` · ${sub}` : '');
        this.hud.call(text, sub, ev.ms || 1500);
        g.audio.speak(text);
        break;
      }
      case 'whistle': g.audio.whistle(ev.kind); break;
      case 'rei': g.touch.showRei(ev.open && !this.player.hidden); break;
      case 'count': this.hud.count = { n: ev.n, age: 0 }; g.audio.taiko(0.3); break;
      case 'result': {
        const r = ev.result;
        const v = r.votes;
        const hi = Math.max(v.aka, v.shiro);
        const lo = Math.min(v.aka, v.shiro);
        this.hud.banner = { side: r.winner, title: this.db.rules.calls[`${r.winner}_no_kachi`], votes: `${hi}:${lo} ${t(`result.${r.by}`)}` };
        break;
      }
      case 'end': this.finish(this.buildResult(ev.result)); break;
      default: break;
    }
    if (this.director && this.director.onOfficial) this.director.onOfficial(ev);
  }

  buildResult(r) {
    const p = this.player;
    return {
      ...r,
      playerWon: r.winner === p.side,
      playerSide: p.side,
      player: { dmg: { ...p.dmg }, chui: p.chui, wazaAri: p.wazaAri },
      opp: { dmg: { ...this.opp.dmg }, chui: this.opp.chui, wazaAri: this.opp.wazaAri, name: this.opp.name },
      bowsMissed: this.official ? this.official.respectMiss[this.pi] : 0,
      bowsTotal: this.official ? this.official.bowCalls : 0,
    };
  }

  finish(result) {
    if (this.done) return;
    this.done = true;
    this.onDone?.(result);
  }

  destroy() {
    this.game.touch.setMode('none');
    this.game.input.clear();
  }

  drawFighter(ctx, f, alpha) {
    if (f.hidden) return;
    const db = this.db;
    const gy = db.rules.arena.groundY;
    const target = fighterPose(f, db.anim, this.time);
    const k = f.state === 'attack' ? 0.8 : 0.4;
    f._rp = f._rp ? lerpPose(f._rp, target, k) : target;
    if (target.hipH == null && f._rp.hipH != null && Math.abs(f._rp.rot) < 1) delete f._rp.hipH;
    const x = f.px + (f.x - f.px) * alpha;
    drawShadow(ctx, x, gy, f.state === 'down' ? 90 : 60);
    drawFigure(ctx, x, gy, f.facing, f._rp, {
      belt: db.belts[db.beltIdx[f.belt]].color, aka: f.side === 'aka', flash: f.flash > 0, kiai: f.kiaiT > 0,
      hair: f.id === this.pi ? '#2b2118' : '#4a2f1a',
    });
  }

  render(ctx, alpha) {
    const db = this.db;
    const gy = db.rules.arena.groundY;
    ctx.save();
    if (this.cam.shake > 0.2) ctx.translate((Math.random() - 0.5) * this.cam.shake, (Math.random() - 0.5) * this.cam.shake);
    if (this.cam.zoom > 1.005) {
      ctx.translate(this.cam.zx, 430);
      ctx.scale(this.cam.zoom, this.cam.zoom);
      ctx.translate(-this.cam.zx, -430);
    }
    ctx.drawImage(this.bg, 0, 0);
    const panel = this.official ? this.official.judges : this.judgesPreview;
    if (panel) for (let i = 0; i < 2; i++) drawCornerJudge(ctx, panel.corners[i], this.spots[i]);
    if (this.official) drawShushin(ctx, this.official.shushin, gy, this.time);
    if (this.director && this.director.drawWorld) this.director.drawWorld(ctx);
    const [a, b] = this.fight.fighters;
    const first = a.state === 'attack' || (b.state !== 'attack' && a.isPlayer) ? b : a;
    this.drawFighter(ctx, first, alpha);
    this.drawFighter(ctx, first === a ? b : a, alpha);
    this.particles.draw(ctx);
    if (panel) for (let i = 2; i < 4; i++) drawCornerJudge(ctx, panel.corners[i], this.spots[i]);
    if (this.debug || this.game.debugBoxes) this.drawDebug(ctx);
    ctx.restore();
    this.hud.draw(ctx);
    if (this.director && this.director.draw) this.director.draw(ctx);
  }

  // Derinimo sluoksnis: hurtbox'ai (žali), aktyvus hitbox'as (raudonas), nuotolio juostos ir būsenos skaičiai.
  drawDebug(ctx) {
    const gy = this.db.rules.arena.groundY;
    const R = this.db.rules.combat.ranges;
    ctx.save();
    ctx.lineWidth = 2;
    ctx.font = '13px monospace';
    for (const f of this.fight.fighters) {
      if (f.hidden) continue;
      for (const hb of hurtboxes(f)) {
        ctx.strokeStyle = 'rgba(80,255,120,0.9)';
        ctx.fillStyle = 'rgba(80,255,120,0.12)';
        ctx.fillRect(hb.x0, gy - hb.y1, hb.x1 - hb.x0, hb.y1 - hb.y0);
        ctx.strokeRect(hb.x0, gy - hb.y1, hb.x1 - hb.x0, hb.y1 - hb.y0);
      }
      const ab = attackBox(f, R);
      if (ab) {
        ctx.strokeStyle = '#ff3b30';
        ctx.fillStyle = 'rgba(255,59,48,0.35)';
        ctx.fillRect(ab.x0, gy - ab.y1, ab.x1 - ab.x0, ab.y1 - ab.y0);
        ctx.strokeRect(ab.x0, gy - ab.y1, ab.x1 - ab.x0, ab.y1 - ab.y0);
      }
      Object.entries(R).forEach(([name, r], i) => {
        ctx.strokeStyle = `rgba(255,220,80,${0.9 - i * 0.18})`;
        ctx.beginPath();
        ctx.moveTo(f.x + f.facing * r, gy + 6 + i * 5);
        ctx.lineTo(f.x, gy + 6 + i * 5);
        ctx.stroke();
        if (f.isPlayer) { ctx.fillStyle = '#ffdc50'; ctx.fillText(name, f.x + f.facing * r - 14, gy + 30 + i * 13); }
      });
      const T = f.tech;
      const lines = [
        `${f.state} ${Math.round(f.st)}ms x=${Math.round(f.x)}`,
        T ? `${T.def.id} ${T.phase} ${Math.round(T.t)}/${Math.round(T.dur[T.phase[0]])} x${T.mult.toFixed(2)}${T.charged ? ' HOLD' : ''}` : (f.guard ? `guard ${f.guard.level} ${Math.round(f.guard.t)}ms${f.guard.morote ? ' morote' : ''}` : '-'),
        `dmg L${f.dmg.legs.toFixed(0)} B${f.dmg.body.toFixed(0)} H${f.dmg.head.toFixed(0)}`,
        `bal ${f.balance.toFixed(0)} sta ${f.stamina.toFixed(0)} ki ${f.ki.toFixed(0)}`,
        `chain [${f.chainList.length}] +${f.chainCount}`,
      ];
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      const bx = f.id === 0 ? 30 : W - 330;
      ctx.fillRect(bx, 126, 300, 86);
      ctx.fillStyle = '#9dffb0';
      ctx.textAlign = 'left';
      lines.forEach((l, i) => ctx.fillText(l, bx + 8, 142 + i * 16));
    }
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    const d = Math.abs(this.fight.fighters[0].x - this.fight.fighters[1].x);
    ctx.fillText(`dist ${d.toFixed(0)} · phase ${this.fight.phase}${this.official ? ` · ${this.official.state}` : ''}`, W / 2, H - 14);
    ctx.restore();
  }
}
