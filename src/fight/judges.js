// SPDX-License-Identifier: BUSL-1.1
// 4 kampiniai teisėjai (fukushin): kiekvienas savarankiškai „mato“ įvykį, balsuoja ir rodo vėliavėlių signalą.
// Kartu su vyr. teisėju – 5 balsai; sprendimui reikia ≥ votesNeeded (3).

import { judgeVote, tallyVotes } from './rules.js';

// Visi vėliavėlių signalai (animacijos – render.js flagPose).
export const SIGNALS = ['none', 'ippon', 'wazaari', 'wazaari_ippon', 'chui', 'clinch', 'jogai', 'fumei', 'mitomezu', 'hantei', 'hikiwake'];
// Švilpukas pagal signalą: long = 1 ilgas, strong = 1 stiprus, shorts = keli trumpi, short = 1 trumpas.
export const WHISTLE = {
  ippon: 'long', wazaari: 'strong', wazaari_ippon: 'long', chui: 'shorts', clinch: 'shorts', jogai: 'shorts',
  fumei: 'short', mitomezu: 'long', hantei: 'long', hikiwake: 'long',
};

export class JudgePanel {
  constructor(R, rng) {
    this.R = R;
    this.rng = rng || Math.random;
    this.corners = [0, 1, 2, 3].map((i) => ({ i, signal: 'none', side: null, t: 0, delay: 0 }));
  }

  set(i, signal, side, delay = 0) {
    const j = this.corners[i];
    j.signal = signal;
    j.side = side;
    j.t = 0;
    j.delay = delay;
  }

  clear() {
    for (const j of this.corners) this.set(j.i, 'none', null);
  }

  update(dt) {
    for (const j of this.corners) j.t += dt;
  }

  delay() {
    const [lo, hi] = this.R.flagDelayMs;
    return lo + this.rng() * (hi - lo);
  }

  // Visi kampiniai rodo tą patį signalą; kiekvienas su 5 % tikimybe įvykio nematė (fumei), bet ne daugiau kaip
  // maxFumei teisėjų, kad akivaizdus įvykis (partrenkimas, draudžiama technika) visada surinktų ≥ 3 balsus.
  signalAll(signal, side, maxFumei = 1) {
    let fumei = 0;
    let yes = 1; // vyr. teisėjas
    for (const j of this.corners) {
      if (fumei < maxFumei && this.rng() < this.R.fumeiChance) {
        fumei++;
        this.set(j.i, 'fumei', null, this.rng() * 120);
      } else {
        yes++;
        this.set(j.i, signal, side, this.rng() * 120);
      }
    }
    return { yes, no: 0, fumei };
  }

  // Balsavimas dėl ginčytino įvykio (pvz., pusiausvyros praradimas be kritimo): pritaria → signalas, nepritaria → mitomezu.
  voteEvent(signal, side, chance) {
    let yes = 1;
    let no = 0;
    let fumei = 0;
    for (const j of this.corners) {
      const r = this.rng();
      if (r < this.R.fumeiChance) { fumei++; this.set(j.i, 'fumei', null, this.rng() * 150); }
      else if (this.rng() < chance) { yes++; this.set(j.i, signal, side, this.rng() * 150); }
      else { no++; this.set(j.i, 'mitomezu', null, this.rng() * 150); }
    }
    return { yes, no, fumei, passed: yes >= this.R.votesNeeded };
  }

  // Hantei: visi kampiniai vienu metu (su 100–250 ms vėlavimu kiekvienam) pakelia vėliavėles; vyr. teisėjas – 5-as balsas.
  voteHantei(aka, shiro, forced) {
    const votes = [];
    for (const j of this.corners) {
      const v = judgeVote(aka, shiro, this.R, this.rng, forced);
      votes.push(v);
      if (v === 'draw') this.set(j.i, 'hikiwake', null, this.delay());
      else this.set(j.i, 'hantei', v, this.delay());
    }
    votes.push(judgeVote(aka, shiro, this.R, this.rng, forced));
    return { votes, ...tallyVotes(votes, this.R.votesNeeded) };
  }

  // Pergalės ceremonija: kampiniai pakelia nugalėtojo spalvos vėliavėlę įstrižai aukštyn.
  // perJudge (hantei balsai) – jei sprendimas ne vienbalsis, kai kurie rodo kitą spalvą arba sukryžiuotas vėliavėles.
  ceremony(winner, perJudge) {
    for (const j of this.corners) {
      const v = perJudge ? perJudge[j.i] : winner;
      if (v === 'draw') this.set(j.i, 'hikiwake', null, this.delay());
      else this.set(j.i, 'hantei', v, this.delay());
    }
  }
}
