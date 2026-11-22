// SPDX-License-Identifier: BUSL-1.1
// Kovos su teisėju simuliacija be naršyklės (taisyklių testams).

import { techsUpTo, combosUpTo } from '../src/core/data.js';
import { mulberry32 } from '../src/core/rng.js';
import { Fight } from '../src/fight/combat.js';
import { Referee } from '../src/fight/referee.js';

export const DT = 1000 / 60;

// Sukuria kovą su teisėju; abu kovotojai nusilenkia automatiškai.
export function makeMatch(db, opts = {}) {
  const rng = mulberry32(opts.seed ?? 1);
  const belt = opts.belt || 'blue';
  const cfg = (side) => ({ side, name: side, belt, unlocked: techsUpTo(db, belt), combos: combosUpTo(db, belt) });
  const fight = new Fight(db, cfg('aka'), cfg('shiro'), { mode: 'match', rng });
  const log = [];
  const referee = new Referee(fight, db, { rng, autoBow: true, timeSec: opts.timeSec, onEvent: (ev) => log.push(ev) });
  const m = {
    db, fight, referee, log, rng,
    aka: fight.fighters[0], shiro: fight.fighters[1],
    intents: [{}, {}],
    step(n = 1) {
      for (let i = 0; i < n; i++) {
        fight.update(DT, m.intents);
        m.intents = [{}, {}];
        referee.handle(fight.takeEvents());
        referee.update(DT);
      }
    },
    run(ms) { m.step(Math.ceil(ms / DT)); },
    until(pred, maxMs = 120000) {
      let t = 0;
      while (!pred() && t < maxMs) { m.step(); t += DT; }
      return pred();
    },
    // Vykdo techniką: pastato kovotojus arti ir paduoda ketinimą.
    attack(attacker, techId, dist = 90) {
      const o = attacker === m.aka ? m.shiro : m.aka;
      attacker.x = 600; o.x = 600 + (attacker === m.aka ? dist : -dist);
      m.intents[attacker.id] = { tech: db.tech[techId] };
      m.step();
    },
    calls() { return log.filter((e) => e.type === 'call').map((e) => e.id); },
  };
  return m;
}
