// SPDX-License-Identifier: BUSL-1.1
// Kovotojo būsena ir hitbox'ai.

export const ZONES = ['legs', 'body', 'head'];
export const HALF_W = 22;
// Zonų aukščiai virš grindų (px): naudojami hurtbox'ams ir derinimo ekranui.
export const ZONE_Y = { legs: [0, 96], body: [96, 176], head: [176, 216] };
export const LEVEL_ZONE = { gedan: 'legs', chudan: 'body', jodan: 'head' };

export function createFighter(db, cfg) {
  return {
    id: cfg.id,
    side: cfg.side,
    name: cfg.name || cfg.side,
    belt: cfg.belt || 'white',
    isPlayer: !!cfg.isPlayer,
    hidden: !!cfg.hidden,
    immortal: !!cfg.immortal,
    lockFacing: !!cfg.lockFacing,
    unlocked: cfg.unlocked || new Set(),
    combos: cfg.combos || new Set(),
    dmgMult: cfg.dmgMult ?? 1,
    x: 0, px: 0, facing: 1,
    state: 'idle', st: 0,
    tech: null, guard: null, down: null, pose: null, dash: null,
    crouch: false, moving: 0,
    dmg: { legs: cfg.carry?.legs || 0, body: cfg.carry?.body || 0, head: cfg.carry?.head || 0 },
    balance: 100, stamina: 100, ki: cfg.ki || 0, kiaiT: 0,
    wazaAri: 0, chui: 0,
    stats: { dmg: 0, effective: 0, techniques: 0, initiative: 0 },
    sinceHit: 9999, sinceAct: 9999, passive: 0,
    invul: 0, open: 0, counterT: 0, stun: 0, flash: 0, holdT: 0, suneT: 0,
    chainList: [], chainCount: 0, chainT: 9999, lastCombo: null,
  };
}

export function setState(f, s) {
  f.state = s;
  f.st = 0;
}

// Hurtbox'ai pasaulio koordinatėmis: y – aukštis virš grindų.
export function hurtboxes(f) {
  if (f.state === 'down') return [{ zone: 'legs', x0: f.x - 60, x1: f.x + 60, y0: 0, y1: 30 }];
  return ZONES.map((zone) => ({ zone, x0: f.x - HALF_W, x1: f.x + HALF_W, y0: ZONE_Y[zone][0], y1: ZONE_Y[zone][1] }));
}

// Aktyvios technikos hitbox'as (arba null).
export function attackBox(f, ranges) {
  const T = f.tech;
  if (!T || T.phase !== 'active') return null;
  const reach = ranges[T.def.range];
  const [y0, y1] = ZONE_Y[T.def.damage.zone];
  const a = f.x + f.facing * 14;
  const b = f.x + f.facing * reach;
  return { x0: Math.min(a, b), x1: Math.max(a, b), y0: y0 + 10, y1: y1 - 6, reach };
}

export function totalDamage(f) {
  return f.dmg.legs + f.dmg.body + f.dmg.head;
}
