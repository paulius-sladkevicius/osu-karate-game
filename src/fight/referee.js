// SPDX-License-Identifier: BUSL-1.1
// 1 etapo (prototipo) teisėjas: laikmatis, knockdown + 3 s skaičiavimas. 2 etape pakeičiamas pilna būsenų mašina.

export class Referee {
  constructor(fight, db, opts = {}) {
    this.fight = fight;
    this.R = db.rules.match;
    this.emit = opts.onEvent || (() => {});
    this.clock = (opts.timeSec || this.R.mainTimeSec) * 1000;
    this.round = 0;
    this.state = 'HAJIME';
    this.t = 0;
    this.judges = null;
    this.shushin = { x: 640, gesture: null, gt: 0 };
    this.zoom = null;
    this.respectMiss = [0, 0];
    this.bowCalls = 0;
    this.result = null;
    this.kd = null;
    this.emit({ type: 'call', id: 'hajime' });
  }

  bow() {}

  handle(events) {
    for (const ev of events) {
      if (ev.type === 'knockdown' && this.state === 'FIGHTING') {
        this.kd = ev;
        this.state = 'KNOCKDOWN_COUNT';
        this.t = 0;
        this.n = 0;
        this.fight.phase = 'locked';
        this.emit({ type: 'call', id: 'yame' });
      }
    }
  }

  end(winner, by) {
    this.result = { winner, by, votes: { aka: winner === 'aka' ? 5 : 0, shiro: winner === 'shiro' ? 5 : 0, draw: 0 }, round: 0 };
    this.state = 'CEREMONY';
    this.t = 0;
    this.fight.phase = 'locked';
    this.emit({ type: 'result', result: this.result });
  }

  update(dt) {
    this.t += dt;
    const [aka, shiro] = this.fight.fighters;
    this.shushin.x += ((aka.x + shiro.x) / 2 - this.shushin.x) * 0.05;
    if (this.state === 'HAJIME' && this.t > 900) { this.state = 'FIGHTING'; this.fight.phase = 'live'; }
    else if (this.state === 'FIGHTING') {
      this.clock -= dt;
      if (this.clock <= 0) {
        const da = aka.stats.dmg + aka.wazaAri * 100;
        const ds = shiro.stats.dmg + shiro.wazaAri * 100;
        this.emit({ type: 'call', id: 'yame' });
        this.end(da >= ds ? 'aka' : 'shiro', 'hantei');
      }
    } else if (this.state === 'KNOCKDOWN_COUNT') {
      const f = this.kd.f;
      const by = this.kd.by;
      const n = Math.floor(this.t / 1000) + 1;
      if (n !== this.n && n <= this.R.knockdownCountSec) { this.n = n; this.emit({ type: 'count', n }); }
      if (f.state !== 'down' && f.state !== 'getup') {
        by.wazaAri++;
        this.emit({ type: 'call', id: by.wazaAri >= 2 ? 'awasete_ippon' : 'waza_ari', side: by.side });
        if (by.wazaAri >= 2) this.end(by.side, 'awasete');
        else { this.fight.resetPositions(); this.state = 'HAJIME'; this.t = 0; }
      } else if (this.t >= this.R.knockdownCountSec * 1000 && f.state === 'down') {
        f.down.stay = true;
        this.emit({ type: 'call', id: 'ippon', side: by.side });
        this.end(by.side, 'ippon');
      }
    } else if (this.state === 'CEREMONY' && this.t > 3200) {
      this.state = 'DONE';
      this.emit({ type: 'end', result: this.result });
    }
  }
}
