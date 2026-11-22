// SPDX-License-Identifier: BUSL-1.1
// Žaidimo ciklas: fiksuotas 60 Hz logikos žingsnis (akumuliatorius), piešimas per requestAnimationFrame su interpoliacija.

export const STEP = 1000 / 60;

export function startLoop(update, render) {
  let last = performance.now();
  let acc = 0;
  function frame(now) {
    acc += Math.min(100, now - last);
    last = now;
    let n = 0;
    while (acc >= STEP && n < 6) {
      update(STEP);
      acc -= STEP;
      n++;
    }
    if (n === 6) acc = 0;
    render(acc / STEP);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
