// SPDX-License-Identifier: BUSL-1.1
// 1 etapo (prototipo) meniu: iškart paleidžia bandomąją kovą. 3 etape pakeičiamas pilnu meniu.

import { techsUpTo, combosUpTo } from '../core/data.js';

export async function mainMenu(game) {
  for (;;) {
    const res = await game.runFight({
      mode: 'match', bg: 'dojo', hints: true, timeSec: 60,
      player: { name: 'Žaidėjas', belt: 'orange', unlocked: techsUpTo(game.db, 'orange'), combos: combosUpTo(game.db, 'orange') },
      opponent: { name: 'Rokas', belt: 'orange', archetype: 'tank' },
    });
    if (res && res.aborted) continue;
    await game.ui.ask(`<div class="panel center"><h1>${res.playerWon ? 'Pergalė' : 'Pralaimėjimas'}</h1>
      <button class="btn primary" data-act="again">Dar kartą</button></div>`);
  }
}
