// SPDX-License-Identifier: BUSL-1.1
// Vyr. teisėjas (shushin) – kovos būsenų mašina:
// ENTER → BOW → KAMAETE → HAJIME → FIGHTING → YAME → (SCORE | FOUL | JOGAI | KNOCKDOWN_COUNT) → ZOKKO | END
// → HANTEI → (ENCHO) → CEREMONY → FINAL_BOW → DONE.
// Visi parametrai – data/rules.json „match“. Grynas modulis (be DOM): apie įvykius praneša per onEvent.

import { JudgePanel, WHISTLE } from './judges.js';
import { chuiCallId, otherSide } from './rules.js';
import { setState } from './fighter.js';

const BOWS = ['shomen_ni_rei', 'shushin_ni_rei', 'otagai_ni_rei'];

export class Referee {
  // opts: { rng, onEvent, timeSec, autoBow }
  constructor(fight, db, opts = {}) {
    this.fight = fight;
    this.db = db;
    this.R = db.rules.match;
    this.rng = opts.rng || Math.random;
    this.emit = opts.onEvent || (() => {});
    this.autoBow = !!opts.autoBow;
    this.judges = new JudgePanel(this.R, this.rng);
    this.mainTime = (opts.timeSec || this.R.mainTimeSec) * 1000;
    this.enchoTime = (opts.timeSec ? Math.min(opts.timeSec, this.R.enchoTimeSec) : this.R.enchoTimeSec) * 1000;
    this.clock = this.mainTime;
    this.round = 0;
    this.result = null;
    this.zoom = null;
    this.shushin = { x: 640, gesture: null, gt: 0 };
    this.jogai = [0, 0];
    this.holdWarned = [false, false];
    this.respectMiss = [0, 0];
    this.respectDone = false;
    this.bowCalls = 0;
    this.bowed = [false, false];
    this.pendingFoul = null;
    this.last = null;      // paskutinio sprendimo balsai
    this.data = null;
    this.flags = {};
    this.state = null;
    this.t = 0;
    fight.phase = 'locked';
    for (const f of fight.fighters) f.formal = true;
    this.go('ENTER');
  }

  go(state, data) {
    this.state = state;
    this.data = data || {};
    this.t = 0;
    this.flags = {};
    const fn = this[`enter_${state}`];
    if (fn) fn.call(this, this.data);
  }

  call(id, extra = {}) {
    this.emit({ type: 'call', id, ...extra });
  }

  signal(sig, side, maxFumei = 1) {
    const r = this.judges.signalAll(sig, side, maxFumei);
    this.emit({ type: 'whistle', kind: WHISTLE[sig] });
    return r;
  }

  gesture(g) {
    this.shushin.gesture = g;
    this.shushin.gt = 0;
  }

  once(key, at) {
    if (this.flags[key] || this.t < at) return false;
    this.flags[key] = true;
    return true;
  }

  fighter(side) {
    return this.fight.fighters.find((f) => f.side === side);
  }

  // ----- Žaidėjo veiksmai -----

  // REI mygtukas: nusilenkimas.
  bow(idx) {
    if ((this.state !== 'BOW' && this.state !== 'FINAL_BOW') || this.bowed[idx]) return;
    this.bowed[idx] = true;
    this.fight.pose(this.fight.fighters[idx], 'bow', 800);
    if (this.bowed[0] && this.bowed[1]) this.data.bothAt = this.t;
  }

  autoBows() {
    this.fight.fighters.forEach((f, i) => {
      if (!this.bowed[i] && (this.autoBow || !f.isPlayer) && this.t >= 420 + i * 90) this.bow(i);
    });
  }

  // ----- Kovos įvykiai -----

  handle(events) {
    for (const ev of events) {
      if (ev.type === 'techStart') ev.f.passive = 0;
      if (ev.type === 'hit' && (ev.foul === 'afterYame' || ev.foul === 'downed')) {
        // Puolimas po „Yame“ arba į gulintį – chui ni; paskelbiama prieš tęsiant kovą.
        if (!this.pendingFoul && this.state !== 'CEREMONY' && this.state !== 'DONE' && this.state !== 'FINAL_BOW') {
          this.pendingFoul = { f: ev.attacker, kind: ev.foul, n: 2 };
          if (this.state === 'FIGHTING') { this.pendingFoul = null; this.yame('FOUL', { f: ev.attacker, kind: ev.foul, n: 2 }); }
        }
        continue;
      }
      if (this.state !== 'FIGHTING') continue;
      if (ev.type === 'knockdown') { this.yame('KNOCKDOWN_COUNT', { down: ev.f, by: ev.by }); return; }
      if (ev.type === 'hit' && ev.foul === 'illegal') { this.yame('FOUL', { f: ev.attacker, kind: 'illegal', n: ev.chui || 1 }); return; }
      if (ev.type === 'balanceBreak') { this.yame('SCORE', { to: ev.by, kind: 'vote' }); return; }
      if (ev.type === 'holding') {
        const first = !this.holdWarned[ev.f.id];
        this.holdWarned[ev.f.id] = true;
        this.yame('FOUL', { f: ev.f, kind: 'holding', n: first ? 0 : 1 });
        return;
      }
      if (ev.type === 'jogai') { this.yame('JOGAI', { f: ev.f, pushed: ev.pushed }); return; }
    }
  }

  // „Yame“: kova stabdoma; trumpą laiką po komandos pradėtas ir pataikęs puolimas laikomas pražanga.
  yame(next, data) {
    this.call('yame', { ms: 900 });
    this.gesture('stop');
    this.fight.phase = 'halt';
    this.fight.haltLate = false;
    this.haltT = 0;
    this.go(next, data);
  }

  // Kova tęsiama: jei laukia pražanga – pirma ji, tada grįžimas į starto linijas ir „Zokko“.
  resume() {
    if (this.pendingFoul) {
      const p = this.pendingFoul;
      this.pendingFoul = null;
      this.go('FOUL', p);
      return;
    }
    this.go('ZOKKO');
  }

  update(dt) {
    this.t += dt;
    this.shushin.gt += dt;
    this.judges.update(dt);
    if (this.fight.phase === 'halt') {
      this.haltT += dt;
      this.fight.haltLate = this.haltT >= this.R.yameGraceMs;
      if (this.haltT >= this.R.haltWindowMs) this.lock();
    }
    const [a, b] = this.fight.fighters;
    const target = this.shushin.target ?? (a.x + b.x) / 2;
    this.shushin.x += (target - this.shushin.x) * 0.06;
    const fn = this[`update_${this.state}`];
    if (fn) fn.call(this, dt, this.data);
  }

  lock() {
    this.fight.phase = 'locked';
    for (const f of this.fight.fighters) {
      if (f.state === 'attack' || f.state === 'guard' || f.state === 'walk' || f.state === 'dash') { f.tech = null; f.guard = null; f.dash = null; setState(f, 'idle'); }
    }
  }

  // ----- Pradžia -----

  enter_ENTER() {
    this.call('aka_shiro', { ms: 1100 });
  }

  update_ENTER() {
    if (this.t >= 1200) this.go('BOW', { i: 0 });
  }

  enter_BOW(d) {
    this.bowed = [false, false];
    this.bowCalls++;
    this.call(BOWS[d.i], { ms: 1500 });
    this.emit({ type: 'rei', open: true });
  }

  update_BOW(dt, d) {
    this.autoBows();
    const bothDone = d.bothAt != null && this.t >= d.bothAt + 750;
    if (!bothDone && this.t < this.R.bowWindowMs) return;
    this.bowed.forEach((ok, i) => { if (!ok) this.respectMiss[i]++; });
    this.emit({ type: 'rei', open: false });
    if (d.i < BOWS.length - 1) { this.go('BOW', { i: d.i + 1 }); return; }
    // Nepagarba: nenusilenkta per Rei – chui prieš kovos pradžią.
    const idx = this.respectMiss.findIndex((n) => n > 0);
    if (idx >= 0 && !this.respectDone) {
      this.respectDone = true;
      this.go('FOUL', { f: this.fight.fighters[idx], kind: 'disrespect', n: 1, next: 'KAMAETE' });
    } else this.go('KAMAETE');
  }

  enter_KAMAETE() {
    this.judges.clear();
    this.gesture(null);
    this.shushin.target = null;
    this.fight.resetPositions(true);
    for (const f of this.fight.fighters) f.formal = false;
    this.call('kamaete', { ms: 900 });
  }

  update_KAMAETE() {
    if (this.t >= 950) this.go('HAJIME');
  }

  enter_HAJIME() {
    this.call('hajime', { ms: 900 });
    this.gesture('both');
  }

  update_HAJIME() {
    if (this.t >= 550) this.startFighting();
  }

  startFighting() {
    this.gesture(null);
    this.fight.phase = 'live';
    for (const f of this.fight.fighters) { f.passive = 0; f.holdT = 0; }
    this.go('FIGHTING');
  }

  // ----- Kova -----

  update_FIGHTING(dt) {
    this.clock -= dt;
    for (const f of this.fight.fighters) {
      f.passive += dt;
      if (f.passive >= this.R.passivitySec * 1000) {
        f.passive = 0;
        this.yame('FOUL', { f, kind: 'passivity', n: 1 });
        return;
      }
    }
    if (this.clock <= 0) {
      this.clock = 0;
      this.call('yame', { ms: 900 });
      this.gesture('stop');
      this.lock();
      this.go('HANTEI');
    }
  }

  enter_ZOKKO() {
    this.judges.clear();
    this.gesture(null);
    this.fight.resetPositions();
    this.lock();
    this.call('zokko', { ms: 800 });
  }

  update_ZOKKO() {
    if (this.t >= 650) this.startFighting();
  }

  // ----- Knockdown ir taškai -----

  enter_KNOCKDOWN_COUNT() {
    this.n = 0;
  }

  update_KNOCKDOWN_COUNT(dt, d) {
    const limit = this.R.knockdownCountSec;
    const n = Math.floor(this.t / 1000) + 1;
    if (n !== this.n && n <= limit) { this.n = n; this.emit({ type: 'count', n }); }
    const up = d.down.state !== 'down';
    if (up && d.down.state !== 'getup') {
      // Atsikėlė per 3 s → waza-ari.
      this.go('SCORE', { to: d.by, kind: 'wazaari' });
    } else if (!up && this.t >= limit * 1000) {
      // Neatsikėlė → ippon.
      d.down.down.stay = true;
      this.go('SCORE', { to: d.by, kind: 'ippon' });
    }
  }

  enter_SCORE(d) {
    const side = d.to.side;
    if (d.kind === 'vote') {
      // Pusiausvyros praradimas be kritimo: kampiniai gali skirti waza-ari (≥ 3 iš 5).
      const v = this.judges.voteEvent('wazaari', side, this.R.balanceBreakVoteChance);
      this.last = { [side]: v.yes, [otherSide(side)]: v.no, draw: v.fumei };
      if (!v.passed) {
        d.kind = 'none';
        this.emit({ type: 'whistle', kind: WHISTLE.mitomezu });
        this.call('mitomezu', { ms: 1000 });
        return;
      }
      d.kind = 'wazaari';
      this.emit({ type: 'whistle', kind: WHISTLE.wazaari });
    } else {
      const v = this.signal(d.kind, side, 1);
      this.last = { [side]: v.yes, [otherSide(side)]: 0, draw: v.fumei };
    }
    if (d.kind === 'wazaari') {
      d.to.wazaAri++;
      this.gesture(side);
      this.call('waza_ari', { side, ms: 1300 });
      this.emit({ type: 'score', kind: 'wazaari', side });
    } else if (d.kind === 'ippon') {
      this.gesture(side);
      this.call('ippon', { side, ms: 1500 });
      this.emit({ type: 'score', kind: 'ippon', side });
    }
  }

  update_SCORE(dt, d) {
    const side = d.to.side;
    if (d.kind === 'none') { if (this.t >= 1200) this.resume(); return; }
    if (d.kind === 'ippon') { if (this.t >= 1700) this.end(side, 'ippon'); return; }
    if (d.to.wazaAri >= 2) {
      // Antras waza-ari: vėliavėlė iš horizontalios keliama įstrižai aukštyn – „Waza-ari awasete ippon“.
      if (this.once('awasete', 1300)) {
        for (const j of this.judges.corners) if (j.signal === 'wazaari') this.judges.set(j.i, 'wazaari_ippon', side);
        this.emit({ type: 'whistle', kind: WHISTLE.wazaari_ippon });
        this.call('awasete_ippon', { ms: 1700 });
      }
      if (this.t >= 3100) this.end(side, 'awasete');
      return;
    }
    if (this.t >= 1600) this.resume();
  }

  // ----- Pražangos -----

  enter_FOUL(d) {
    const side = d.f.side;
    if (d.kind === 'holding') this.signal('clinch', side, 2);
    else this.signal('chui', side, 2);
    this.gesture(side);
    this.emit({ type: 'foul', kind: d.kind, side, n: d.n });
  }

  update_FOUL(dt, d) {
    const limit = this.R.chuiLimit;
    if (this.once('announce', 850)) {
      if (d.n > 0) {
        d.f.chui = Math.min(limit, d.f.chui + d.n);
        this.call(chuiCallId(d.f.chui, limit), { side: d.f.side, reason: d.kind, ms: 1500 });
      } else this.call('oshi', { side: d.f.side, reason: d.kind, ms: 1300 });
    }
    if (this.t < 2300) return;
    if (d.f.chui >= limit) {
      // 4-as chui = shikkaku.
      this.last = { [otherSide(d.f.side)]: 5, [d.f.side]: 0, draw: 0 };
      this.end(otherSide(d.f.side), 'shikkaku');
    } else if (d.next) this.go(d.next);
    else this.resume();
  }

  // ----- Jogai -----

  enter_JOGAI(d) {
    this.signal('jogai', d.f.side, 2);
    this.call('jogai', { side: d.f.side, ms: 1100 });
    if (!d.pushed) this.jogai[d.f.id]++;
  }

  update_JOGAI(dt, d) {
    if (this.t < 1300) return;
    // Pasikartojantis bėgimas už ribos = chui.
    if (!d.pushed && this.jogai[d.f.id] >= this.R.jogaiChuiFrom) this.go('FOUL', { f: d.f, kind: 'jogai', n: 1 });
    else this.resume();
  }

  // ----- Hantei ir encho -----

  enter_HANTEI() {
    this.judges.clear();
    this.fight.resetPositions(true);
    for (const f of this.fight.fighters) f.formal = true;
  }

  update_HANTEI(dt, d) {
    if (this.once('muite', 900)) { this.gesture(null); this.call('shomen_muite', { ms: 1100 }); }
    if (this.once('torimasu', 2100)) this.call('hantei_o_torimasu', { ms: 1100 });
    if (this.once('hantei', 3300)) {
      this.call('hantei', { ms: 1200 });
      this.emit({ type: 'whistle', kind: WHISTLE.hantei });
      const [aka, shiro] = [this.fighter('aka'), this.fighter('shiro')];
      // Paskutiniame pratęsime teisėjai privalo išrinkti nugalėtoją.
      d.v = this.judges.voteHantei(aka, shiro, this.round >= this.R.maxEncho);
      this.last = { aka: d.v.aka, shiro: d.v.shiro, draw: d.v.draw };
      this.emit({ type: 'hantei', votes: d.v });
    }
    if (!d.v || this.t < 4900) return;
    if (d.v.winner) this.end(d.v.winner, 'hantei', d.v.votes);
    else if (this.once('hikiwake', 4900)) { this.gesture('both'); this.call('hikiwake', { ms: 1300 }); }
    else if (this.t >= 6400) this.go('ENCHO');
  }

  enter_ENCHO() {
    this.round++;
    this.clock = this.enchoTime;
    this.judges.clear();
    this.gesture(null);
    this.call('encho', { ms: 1200 });
    this.emit({ type: 'encho', round: this.round });
  }

  update_ENCHO() {
    if (this.t >= 1300) this.go('KAMAETE');
  }

  // ----- Pabaiga ir pergalės ceremonija -----

  end(winner, by, perJudge) {
    const v = { aka: 0, shiro: 0, draw: 0, ...(this.last || {}) };
    if (by !== 'hantei') { v[winner] = Math.max(v[winner], this.R.votesNeeded); }
    this.result = { winner, by, votes: v, round: this.round, perJudge: perJudge || null };
    this.go('CEREMONY');
  }

  enter_CEREMONY() {
    this.lock();
    this.pendingFoul = null;
    this.fight.resetPositions(true);
    for (const f of this.fight.fighters) f.formal = true;
    this.shushin.target = 640;
    this.gesture(null);
  }

  update_CEREMONY() {
    const r = this.result;
    if (this.once('flags', 500)) {
      this.judges.ceremony(r.winner, r.perJudge);
      this.emit({ type: 'whistle', kind: WHISTLE.hantei });
    }
    if (this.once('kachi', 1500)) {
      this.gesture(r.winner);
      this.call(`${r.winner}_no_kachi`, { ms: 2400 });
      this.emit({ type: 'result', result: r });
      this.zoom = { k: 1.22, x: this.fighter(r.winner).x };
    }
    if (this.t >= 4600) this.go('FINAL_BOW');
  }

  enter_FINAL_BOW() {
    this.zoom = null;
    this.bowed = [false, false];
    this.bowCalls++;
    this.call('otagai_ni_rei', { ms: 1500 });
    this.emit({ type: 'rei', open: true });
  }

  update_FINAL_BOW(dt, d) {
    this.autoBows();
    const bothDone = d.bothAt != null && this.t >= d.bothAt + 900;
    if (!bothDone && this.t < this.R.bowWindowMs) return;
    this.bowed.forEach((ok, i) => { if (!ok) this.respectMiss[i]++; });
    this.emit({ type: 'rei', open: false });
    this.state = 'DONE';
    this.emit({ type: 'end', result: this.result });
  }
}
