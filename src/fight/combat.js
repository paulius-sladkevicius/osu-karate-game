// SPDX-License-Identifier: BUSL-1.1
// Kovos branduolys: judėjimas, technikų fazės (startup/active/recovery), pataikymai, gynyba, žala zonose,
// pusiausvyra, ištvermė, ki, knockdown. Grynas modulis – be DOM, fiksuotu žingsniu.

import { createFighter, setState, HALF_W } from './fighter.js';
import { getUpTimeMs } from './rules.js';

const EMPTY = Object.freeze({});

export class Fight {
  // opts: { mode: 'match' | 'practice', rng }
  constructor(db, cfgA, cfgB, opts = {}) {
    this.db = db;
    this.C = db.rules.combat;
    this.A = db.rules.arena;
    this.M = db.rules.match;
    this.rng = opts.rng || Math.random;
    this.mode = opts.mode || 'match';
    this.fighters = [createFighter(db, { ...cfgA, id: 0 }), createFighter(db, { ...cfgB, id: 1 })];
    this.phase = this.mode === 'match' ? 'locked' : 'live';
    this.time = 0;
    this.hitStop = 0;
    this.events = [];
    this.resetPositions(true);
  }

  emit(ev) { this.events.push(ev); }

  takeEvents() {
    const e = this.events;
    this.events = [];
    return e;
  }

  resetPositions(force) {
    for (const f of this.fighters) {
      if (f.state === 'down' && !force) continue;
      f.x = f.px = f.side === 'aka' ? this.A.startAka : this.A.startShiro;
      if (!f.lockFacing) f.facing = f.side === 'aka' ? 1 : -1;
      f.tech = null; f.guard = null; f.down = null; f.pose = null; f.dash = null;
      f.balance = Math.max(f.balance, 50);
      f.holdT = 0; f.open = 0; f.invul = 0; f.counterT = 0;
      f.chainList = []; f.chainCount = 0;
      setState(f, 'idle');
    }
  }

  // Scenarinė poza (nusilenkimas ir pan.) – kovotojas kurį laiką nevaldomas.
  pose(f, name, ms) {
    f.tech = null; f.guard = null;
    f.pose = { name, dur: ms };
    setState(f, 'pose');
  }

  update(dt, intents) {
    for (const f of this.fighters) f.px = f.x;
    if (this.hitStop > 0) { this.hitStop -= dt; return; }
    this.time += dt;
    const [a, b] = this.fighters;
    this.step(a, b, intents[0] || EMPTY, dt);
    this.step(b, a, intents[1] || EMPTY, dt);
    this.separate();
    if (this.phase === 'live' && this.mode === 'match') {
      for (const f of this.fighters) {
        if (f.x < this.A.xMin || f.x > this.A.xMax) { this.emit({ type: 'jogai', f, pushed: f.sinceHit < 600 }); break; }
      }
    }
  }

  step(f, o, it, dt) {
    const C = this.C;
    f.sinceHit += dt; f.sinceAct += dt; f.chainT += dt; f.st += dt;
    f.invul = Math.max(0, f.invul - dt); f.open = Math.max(0, f.open - dt);
    f.counterT = Math.max(0, f.counterT - dt); f.flash = Math.max(0, f.flash - dt);
    f.suneT = Math.max(0, f.suneT - dt);
    if (f.kiaiT > 0) f.kiaiT -= dt;
    f.moving = 0;
    const live = this.phase === 'live';
    const halt = this.phase === 'halt';

    // Atsistatymas: žala neatsistato, ištvermė ir pusiausvyra – taip.
    if (f.state !== 'down') {
      if (f.sinceAct > C.staminaRegenDelayMs) {
        f.stamina = Math.min(100, f.stamina + C.staminaRegen * (f.dmg.body > 50 ? C.bodyRegenFactor : 1) * dt / 1000);
      }
      if (f.sinceHit > C.balanceRegenDelayMs && f.state !== 'stagger') {
        const max = f.dmg.legs > 50 ? C.legBalanceMax : 100;
        if (f.balance < max) f.balance = Math.min(max, f.balance + C.balanceRegen * dt / 1000);
      }
      if (f.immortal && f.sinceHit > 1500) for (const z of ['legs', 'body', 'head']) f.dmg[z] = Math.max(0, f.dmg[z] - 40 * dt / 1000);
    }

    switch (f.state) {
      case 'down': {
        f.down.t += dt;
        if (it.mash) f.down.mash = Math.min(C.getUp.mashMax, f.down.mash + it.mash * C.getUp.mashStep);
        if (!f.down.stay && f.down.t >= f.down.getUpAt * (1 - f.down.mash)) {
          const d = f.down;
          if (d.cause === 'zone') f.dmg[d.zone] = Math.min(f.dmg[d.zone], C.zoneAfterGetUp);
          if (d.cause === 'head') f.dmg.head = Math.min(f.dmg.head, C.headAfterGetUp);
          f.balance = 60;
          setState(f, 'getup');
          this.emit({ type: 'getup', f });
        }
        return;
      }
      case 'getup': if (f.st >= C.getUp.riseMs) { f.down = null; setState(f, 'idle'); } return;
      case 'hit': if (f.st >= f.stun) setState(f, 'idle'); return;
      case 'stagger': if (f.st >= C.staggerMs) { f.balance = 40; setState(f, 'idle'); } return;
      case 'pose': if (f.st >= f.pose.dur) { f.pose = null; setState(f, 'idle'); } return;
      case 'dash': {
        f.x += f.dash.v * dt;
        if (f.st >= f.dash.dur) { f.dash = null; setState(f, 'idle'); }
        return;
      }
      case 'attack': this.stepTech(f, o, it, dt); return;
      default: break;
    }

    // idle / walk / guard
    if (!f.lockFacing && !o.hidden && o.x !== f.x) f.facing = o.x > f.x ? 1 : -1;
    f.crouch = false;
    if (!live && !halt) { f.guard = null; if (f.state !== 'idle') setState(f, 'idle'); return; }

    if (it.kiai && live) this.tryKiai(f);
    if (it.tech && f.open <= 0 && this.startTech(f, o, it.tech, it, false)) return;
    if (!live) { f.guard = null; if (f.state !== 'idle') setState(f, 'idle'); return; }

    if (it.guard && f.open <= 0) {
      if (!f.guard || it.guardPressed) {
        f.guard = { level: it.guard, t: 0, morote: false };
        if (f.state !== 'guard') setState(f, 'guard');
        const gt = this.db.guardByLevel[it.guard];
        this.emit({ type: 'guard', f, level: it.guard, techId: gt ? gt.id : null });
      } else {
        f.guard.level = it.guard;
        f.guard.t += dt;
        if (!f.guard.morote && f.guard.t >= C.moroteHoldMs && f.unlocked.has('morote_uke')) {
          f.guard.morote = true;
          this.emit({ type: 'guard', f, level: f.guard.level, techId: 'morote_uke' });
        }
      }
      f.sinceAct = 0;
      if (f.kiaiT <= 0) f.stamina = Math.max(0, f.stamina - C.guardStaminaDrain * dt / 1000);
      // Per ilgai laikoma gynyba arti varžovo = laikymas / stūmimas.
      if (!o.hidden && Math.abs(o.x - f.x) < this.M.holdFoulDist) {
        f.holdT += dt;
        if (f.holdT >= this.M.holdFoulSec * 1000) { f.holdT = 0; this.emit({ type: 'holding', f }); }
      } else f.holdT = 0;
      return;
    }
    f.guard = null;
    f.holdT = 0;

    if (it.dash && f.stamina >= C.dashStamina) {
      const fwd = it.dash === 'F';
      const dist = fwd ? C.dashDist : C.backdashDist;
      const dur = fwd ? C.dashMs : C.backdashMs;
      f.dash = { v: (fwd ? 1 : -1) * f.facing * dist / dur, dur, fwd };
      if (!fwd) f.invul = C.backdashIframesMs; // tai sabaki
      f.stamina -= C.dashStamina;
      f.sinceAct = 0;
      setState(f, 'dash');
      this.emit({ type: 'dash', f, fwd });
      return;
    }

    f.crouch = !!it.crouch;
    const mv = f.crouch ? 0 : (it.move || 0);
    if (mv) {
      const slow = f.dmg.legs > 50 ? C.legSlow : 1;
      const speed = (mv > 0 ? C.walkSpeed : C.backSpeed) * slow;
      f.x += f.facing * mv * speed * dt / 1000;
      f.moving = mv;
      if (mv > 0) {
        f.stats.initiative += dt;
        f.ki = Math.min(100, f.ki + C.kiInitiative * dt / 1000);
      }
      if (f.state !== 'walk') setState(f, 'walk');
    } else if (f.state !== 'idle') setState(f, 'idle');
  }

  tryKiai(f) {
    if (f.ki < 100 || f.kiaiT > 0 || !f.unlocked.has('kiai_mode')) return false;
    f.ki = 0;
    f.kiaiT = this.C.kiaiMs;
    this.emit({ type: 'kiai', f });
    return true;
  }

  findCombo(f) {
    let best = null;
    for (const c of this.db.combos) {
      if (!f.combos.has(c.id)) continue;
      const n = c.sequence.length;
      if (f.chainList.length < n) continue;
      let ok = true;
      for (let i = 0; i < n; i++) if (f.chainList[f.chainList.length - n + i] !== c.sequence[i]) { ok = false; break; }
      if (!ok) continue;
      if (f.lastCombo && f.lastCombo.id === c.id && f.chainList.length - f.lastCombo.len < n) continue;
      if (!best || n > best.sequence.length) best = c;
    }
    return best;
  }

  startTech(f, o, def, it, chained) {
    const C = this.C;
    if (def.type === 'mode') return this.tryKiai(f);
    if (def.type !== 'strike') return false;
    const link = chained || (f.chainT <= C.chainGraceMs && f.chainList.length > 0) || f.counterT > 0;
    if (link) {
      f.chainList.push(def.id);
      if (chained || f.chainT <= C.chainGraceMs) f.chainCount++;
    } else {
      f.chainList = [def.id];
      f.chainCount = 0;
      f.lastCombo = null;
    }
    if (f.chainList.length > 8) f.chainList.shift();
    const tired = f.stamina < C.tiredBelow ? C.tiredSlow : 1;
    if (f.kiaiT <= 0) f.stamina = Math.max(0, f.stamina - def.staminaCost);
    f.sinceAct = 0;
    f.passive = 0;
    f.stats.techniques++;
    const combo = this.findCombo(f);
    if (combo) f.lastCombo = { id: combo.id, len: f.chainList.length };
    f.tech = {
      def, phase: 'startup', t: 0,
      dur: { s: def.frames.startup * tired, a: def.frames.active, r: def.frames.recovery * tired },
      mult: 1 + Math.min(C.chainBonusMax, C.chainBonus * f.chainCount),
      chain: f.chainCount, combo, unblockable: !!(combo && combo.bonus.unblockable),
      held: !!it.techHeld, sincePress: 0, charged: false, hit: false, extraRec: 0,
      inHalt: this.phase !== 'live',
    };
    f.guard = null;
    f.counterT = 0;
    setState(f, 'attack');
    this.emit({ type: 'techStart', f, def, chain: f.chainCount, combo });
    if (combo) this.emit({ type: 'combo', f, combo });
    return true;
  }

  stepTech(f, o, it, dt) {
    const C = this.C;
    const T = f.tech;
    T.t += dt;
    T.sincePress += dt;
    if (!it.techHeld) T.held = false;
    if (T.phase === 'startup') {
      if (T.def.advance && T.t <= T.dur.s + dt) f.x += f.facing * T.def.advance * dt / T.dur.s;
      if (T.t >= T.dur.s) {
        if (T.held && !T.charged) {
          // Laikant mygtuką ≥ holdMs – sustiprinta versija.
          if (T.sincePress < this.db.rules.input.holdMs) { T.t = T.dur.s; return; }
          T.charged = true;
          T.dur.r *= C.holdBonus.slow;
          if (f.kiaiT <= 0) f.stamina = Math.max(0, f.stamina - T.def.staminaCost * (C.holdBonus.stamina - 1));
          this.emit({ type: 'charged', f, def: T.def });
        }
        T.phase = 'active';
        T.t = 0;
        this.emit({ type: 'techActive', f, def: T.def });
      }
      return;
    }
    if (T.phase === 'active') {
      if (!T.hit) this.resolveHit(f, o, T);
      if (f.tech !== T) return;
      if (T.t >= T.dur.a) {
        T.phase = 'recovery';
        T.t = 0;
        if (!T.hit) this.emit({ type: 'whiff', f, def: T.def });
      }
      return;
    }
    // recovery: paskutiniame animacijos lange galima susieti kitą techniką (renzoku).
    const total = T.dur.s + T.dur.a + T.dur.r;
    const frac = (T.dur.s + T.dur.a + T.t) / total;
    if (it.tech && f.open <= 0 && frac >= 1 - C.chainWindow && (this.phase === 'live' || this.phase === 'halt')) {
      if (this.startTech(f, o, it.tech, it, true)) return;
    }
    if (T.t >= T.dur.r + T.extraRec) {
      f.tech = null;
      f.chainT = 0;
      setState(f, 'idle');
    }
  }

  resolveHit(f, o, T) {
    const C = this.C;
    const def = T.def;
    if (o.hidden) return;
    const dx = o.x - f.x;
    if (dx * f.facing <= 0) return;
    if (Math.abs(dx) - HALF_W > C.ranges[def.range]) return;
    const match = this.mode === 'match';
    if (o.state === 'down' || o.state === 'getup') {
      T.hit = true;
      if (match) this.emit({ type: 'hit', attacker: f, defender: o, def, foul: 'downed', amount: 0 });
      return;
    }
    if (o.invul > 0) return;
    if (this.phase !== 'live') {
      T.hit = true;
      // Technika pradėta po „Yame“ ir pasiekė varžovą – pražanga; pradėta anksčiau – neįskaitoma.
      if (match && T.inHalt) this.emit({ type: 'hit', attacker: f, defender: o, def, foul: 'afterYame', amount: 0 });
      return;
    }
    T.hit = true;
    const zone = def.damage.zone;
    if (match && !def.legalInKumite) {
      // „Ne“ technika kumite metu: žalos nėra, visada pražanga.
      this.hitStop = C.hitStopMs[0];
      o.flash = 160;
      this.emit({ type: 'hit', attacker: f, defender: o, def, zone, foul: 'illegal', chui: def.foulChui || 1, amount: 0 });
      return;
    }

    let amt = def.damage.amount * C.damageScale * T.mult * f.dmgMult * (f.kiaiT > 0 ? C.kiaiDamage : 1) * (T.charged ? C.holdBonus.damage : 1);
    let bal = def.balanceDamage * (T.charged ? C.holdBonus.damage : 1);
    if (T.combo) {
      const b = T.combo.bonus;
      amt *= b.damageMult || 1;
      if (zone === 'legs') amt *= b.legDamageMult || 1;
      bal += b.balanceBonus || 0;
    }
    const dir = Math.sign(dx);
    const guarding = o.state === 'guard' && o.guard && o.guard.level === def.level && !T.unblockable;

    if (guarding) {
      const B = C.block;
      const perfect = o.guard.t <= B.perfectMs;
      const sune = !!def.lowKick && o.unlocked.has('sune_uke');
      let factor = perfect ? 0 : sune ? B.suneFactor : o.guard.morote ? B.moroteFactor : B.factor;
      if (!perfect && o.stamina < C.tiredBelow) factor = Math.max(factor, B.tiredFactor);
      amt *= factor;
      bal *= factor;
      o.dmg[zone] = Math.min(99, o.dmg[zone] + amt);
      o.balance = Math.max(1, o.balance - bal);
      if (o.kiaiT <= 0) o.stamina = Math.max(0, o.stamina - B.staminaCost);
      o.sinceAct = 0;
      o.ki = Math.min(100, o.ki + C.kiBlock + (perfect ? B.perfectKi : 0));
      o.counterT = B.counterMs;
      o.chainList = ['@block'];
      o.chainCount = 0;
      o.lastCombo = null;
      o.holdT = 0;
      if (sune) o.suneT = 350;
      o.x += dir * 8;
      if (perfect) { f.open = B.openMs; T.extraRec = B.openMs; }
      f.stats.dmg += amt;
      this.hitStop = C.hitStopMs[0] * 0.6;
      this.emit({ type: 'hit', attacker: f, defender: o, def, zone, blocked: true, perfect, sune, amount: amt });
      return;
    }

    const wasBroken = o.state === 'stagger' || o.balance <= 0;
    o.dmg[zone] = Math.min(100, o.dmg[zone] + amt);
    o.balance = Math.max(0, o.balance - bal);
    o.sinceHit = 0;
    o.flash = 180;
    o.tech = null;
    o.guard = null;
    o.dash = null;
    f.ki = Math.min(100, f.ki + amt * C.kiPerDamage);
    o.ki = Math.min(100, o.ki + amt * C.kiPerDamage * 0.3);
    f.stats.dmg += amt;
    f.stats.effective++;
    o.x += dir * (def.knockback ?? bal * 2.2);

    let kd = null;
    if (o.dmg[zone] >= 100) kd = 'zone';
    else if (zone === 'head' && o.dmg.head > C.headKnockdown) kd = 'head';
    else if (wasBroken) kd = 'balance';
    if (o.immortal) { kd = null; o.balance = Math.max(o.balance, 1); o.dmg[zone] = Math.min(o.dmg[zone], 95); }

    const k = Math.min(1, amt / 30);
    this.hitStop = C.hitStopMs[0] + (C.hitStopMs[1] - C.hitStopMs[0]) * k;
    let balanceBreak = false;
    if (kd) {
      o.down = { t: 0, mash: 0, cause: kd, zone, stay: false, getUpAt: getUpTimeMs(o, kd, C.getUp, this.rng) };
      setState(o, 'down');
    } else if (o.balance <= 0) {
      balanceBreak = true;
      setState(o, 'stagger');
    } else {
      o.stun = C.hitStunMs;
      o.hitZone = zone;
      setState(o, 'hit');
    }
    this.emit({ type: 'hit', attacker: f, defender: o, def, zone, amount: amt, knockdown: kd, balanceBreak, combo: T.combo, charged: T.charged });
    if (kd) this.emit({ type: 'knockdown', f: o, by: f, cause: kd });
    else if (balanceBreak) this.emit({ type: 'balanceBreak', f: o, by: f });
  }

  separate() {
    const [a, b] = this.fighters;
    const lo = this.A.xMin - 90;
    const hi = this.A.xMax + 90;
    if (!a.hidden && !b.hidden && a.state !== 'down' && b.state !== 'down') {
      const min = this.C.minSeparation;
      const d = b.x - a.x;
      if (Math.abs(d) < min) {
        const push = (min - Math.abs(d)) / 2;
        const s = d >= 0 ? 1 : -1;
        a.x -= s * push;
        b.x += s * push;
      }
    }
    for (const f of this.fighters) if (!f.hidden) f.x = Math.max(lo, Math.min(hi, f.x));
  }
}
