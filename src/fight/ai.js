// SPDX-License-Identifier: BUSL-1.1
// Varžovų AI: būsenų mašina Artinasi → Spaudžia → Keičiasi smūgiais → Atsitraukia → Kontratakuoja.
// Parametrai (reakcija, agresyvumas, blokavimo tikimybės, mėgstamos technikos, pražangų tikimybė) – data/opponents.json.

import { HALF_W } from './fighter.js';

// Sujungia archetipą, diržo numatytuosius parametrus ir sunkumo lygį į vieną profilį.
export function buildProfile(db, opp, difficulty = 'normal') {
  const O = db.opponents;
  const arch = O.archetypes[opp.archetype] || O.archetypes.tank;
  const belt = O.beltDefaults[opp.belt] || O.beltDefaults.white;
  const diff = O.difficulty[difficulty] || O.difficulty.normal;
  return {
    ...arch, ...belt, ...(opp.overrides || {}),
    reactionMs: belt.reactionMs * diff.reaction,
    aggression: Math.min(0.95, arch.aggression * diff.aggression * (0.75 + 0.25 * belt.skill)),
    dmgMult: diff.damage,
    blockScale: Math.min(1.25, belt.skill),
  };
}

export class AIController {
  constructor(fighter, opponent, profile, db, rng) {
    this.f = fighter;
    this.o = opponent;
    this.p = profile;
    this.db = db;
    this.rng = rng || Math.random;
    this.C = db.rules.combat;
    this.state = 'approach';
    this.decT = 0;
    this.queue = [];
    this.guardT = 0;
    this.guardLevel = 'chudan';
    this.guardNew = false;
    this.react = null;
    this.seen = null;
    this.cool = 0;
    this.retreatT = 0;
    this.want = null;
    this.haltRolled = false;
    this.strikes = db.techniques.filter((t) => t.type === 'strike' && !t.auto && fighter.unlocked.has(t.id));
    this.combos = db.combos.filter((c) => fighter.combos.has(c.id) && !c.sequence.includes('@block') && c.sequence.every((id) => fighter.unlocked.has(id)));
  }

  inRange(def, d) {
    return d - HALF_W <= this.C.ranges[def.range] - 6;
  }

  pickTech(d) {
    const rng = this.rng;
    const p = this.p;
    if (rng() < p.foulChance) {
      // Žemesnių diržų AI kartais suklysta – žaidėjas mato, kaip reaguoja teisėjai.
      const illegal = this.strikes.filter((t) => !t.legalInKumite && this.inRange(t, d));
      if (illegal.length) return illegal[Math.floor(rng() * illegal.length)];
    }
    if (rng() < p.comboChance) {
      const ok = this.combos.filter((c) => this.inRange(this.db.tech[c.sequence[0]], d));
      if (ok.length) {
        const c = ok[Math.floor(rng() * ok.length)];
        this.queue = c.sequence.slice(1);
        return this.db.tech[c.sequence[0]];
      }
    }
    const list = this.strikes.filter((t) => t.legalInKumite && this.inRange(t, d) && t.staminaCost <= this.f.stamina + 2);
    if (!list.length) return null;
    let total = 0;
    for (const t of list) total += p.weights[t.id] ?? 1;
    let r = rng() * total;
    for (const t of list) { r -= p.weights[t.id] ?? 1; if (r <= 0) return t; }
    return list[list.length - 1];
  }

  decide(d) {
    const { f, p, rng } = this;
    const A = this.db.rules.arena;
    const behind = f.facing > 0 ? f.x - A.xMin : A.xMax - f.x;
    this.want = null;
    if (f.counterT > 0) { this.state = 'counter'; this.want = this.pickTech(d); return; }
    if (f.stamina < 18 && behind > 90) { this.state = 'retreat'; this.retreatT = 500 + rng() * 500; return; }
    if (d > p.prefDist + 22) { this.state = behind < 70 || rng() < p.aggression + 0.2 ? 'approach' : 'wait'; return; }
    if (this.cool > 0) { this.state = 'exchange'; return; }
    const r = rng();
    if (r < p.aggression) {
      this.state = d < 110 ? 'pressure' : 'exchange';
      this.want = this.pickTech(d);
      if (!this.want) this.state = 'approach';
    } else if (r < p.aggression + p.retreatChance && behind > 110) {
      this.state = 'retreat';
      this.retreatT = 300 + rng() * 400;
    } else if (rng() < p.guardIdle) {
      this.guardT = 250 + rng() * 300;
      this.guardLevel = rng() < 0.6 ? 'chudan' : rng() < 0.5 ? 'gedan' : 'jodan';
      this.guardNew = true;
    } else this.state = 'exchange';
  }

  update(dt, fight) {
    const { f, o, p, rng } = this;
    const it = { move: 0, guard: null, guardPressed: false, tech: null };
    if (fight.phase !== 'live') {
      this.queue = [];
      this.react = null;
      this.guardT = 0;
      if (fight.phase === 'halt' && !this.haltRolled) {
        // Retas netyčinis puolimas po „Yame“.
        this.haltRolled = true;
        if (rng() < p.foulChance * 0.5 && this.strikes.length) it.tech = this.strikes[0];
      }
      return it;
    }
    this.haltRolled = false;
    this.cool -= dt;
    const d = Math.abs(o.x - f.x);

    // Reakcija į varžovo techniką: po reakcijos laiko – blokas atitinkamame lygyje.
    if (o.tech && o.tech !== this.seen && o.tech.phase === 'startup') {
      this.seen = o.tech;
      if (d - HALF_W <= this.C.ranges[o.tech.def.range] + 40) {
        const level = o.tech.def.level;
        this.react = {
          at: fight.time + p.reactionMs * (0.8 + rng() * 0.4), tech: o.tech, level,
          will: rng() < Math.min(0.95, (p.block[level] || 0) * p.blockScale),
        };
      }
    }
    if (this.react && fight.time >= this.react.at) {
      const r = this.react;
      this.react = null;
      if (r.will && o.tech === r.tech && o.tech.phase !== 'recovery' && f.state !== 'attack' && f.unlocked.has(this.db.guardByLevel[r.level]?.id)) {
        this.guardT = 320 + rng() * 200;
        this.guardLevel = r.level;
        this.guardNew = true;
      }
    }
    if (this.guardT > 0 && f.state !== 'attack') {
      this.guardT -= dt;
      it.guard = this.guardLevel;
      it.guardPressed = this.guardNew;
      this.guardNew = false;
      return it;
    }

    // Kombinacijos tęsinys grandinės lange.
    if (f.state === 'attack') {
      const T = f.tech;
      if (this.queue.length && T.phase === 'recovery') {
        const total = T.dur.s + T.dur.a + T.dur.r;
        if ((T.dur.s + T.dur.a + T.t) / total >= 1 - this.C.chainWindow + 0.04) it.tech = this.db.tech[this.queue.shift()];
      }
      return it;
    }
    if (this.queue.length) {
      if (f.state === 'idle' && f.chainT <= this.C.chainGraceMs) { it.tech = this.db.tech[this.queue.shift()]; return it; }
      if (f.chainT > this.C.chainGraceMs) this.queue = [];
    }
    if (f.state !== 'idle' && f.state !== 'walk') return it;

    this.decT -= dt;
    if (this.decT <= 0) {
      this.decT = 150 + rng() * 150;
      this.decide(d);
    }
    switch (this.state) {
      case 'approach': it.move = d > p.prefDist ? 1 : 0; break;
      case 'retreat':
        this.retreatT -= dt;
        it.move = -1;
        if (this.retreatT <= 0) this.state = 'exchange';
        break;
      case 'pressure': it.move = d > 92 ? 1 : 0; break;
      default: break;
    }
    if (this.want) {
      if (this.inRange(this.want, d)) {
        it.tech = this.want;
        this.cool = p.cooldownMs[0] + rng() * (p.cooldownMs[1] - p.cooldownMs[0]);
      } else it.move = 1;
      this.want = it.tech ? null : this.want;
    }
    return it;
  }
}

// Paprastas treniruočių partneris: 'passive' | 'block' | 'attack'.
export class DummyController {
  constructor(fighter, opponent, db, mode = 'passive', opts = {}) {
    this.f = fighter;
    this.o = opponent;
    this.db = db;
    this.mode = mode;
    this.tech = opts.techId ? db.tech[opts.techId] : db.tech.seiken_gyaku_tsuki;
    this.interval = opts.intervalMs || 1700;
    this.timer = 900;
    this.guardNew = true;
  }

  update(dt) {
    const { f, o } = this;
    const it = { move: 0, guard: null, guardPressed: false, tech: null };
    const d = Math.abs(o.x - f.x);
    if (this.mode === 'block') {
      if (o.tech && o.tech.phase !== 'recovery') {
        it.guard = o.tech.def.level;
        it.guardPressed = this.guardNew;
        this.guardNew = false;
      } else this.guardNew = true;
    } else if (this.mode === 'attack') {
      const reach = this.db.rules.combat.ranges[this.tech.range] + HALF_W - 14;
      if (d > reach) it.move = 1;
      else if (d < reach - 40) it.move = -1;
      this.timer -= dt;
      if (this.timer <= 0 && d <= reach && f.state === 'idle') {
        it.tech = this.tech;
        this.timer = this.interval;
      }
    }
    return it;
  }
}
