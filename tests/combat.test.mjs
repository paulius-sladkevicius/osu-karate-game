// SPDX-License-Identifier: BUSL-1.1
// Kovos mechanikos testai: grandinės (renzoku), tradicinės kombinacijos, gynyba, sustiprinta versija, knockdown sąlygos.

import test from 'node:test';
import assert from 'node:assert/strict';
import { loadDb } from './helpers.mjs';
import { techsUpTo, combosUpTo } from '../src/core/data.js';
import { mulberry32 } from '../src/core/rng.js';
import { Fight } from '../src/fight/combat.js';

const db = loadDb();
const C = db.rules.combat;
const DT = 1000 / 60;

function make(opts = {}) {
  const cfg = (side) => ({ side, name: side, belt: 'blue', unlocked: techsUpTo(db, 'blue'), combos: combosUpTo(db, 'blue'), immortal: !!opts.immortal });
  const fight = new Fight(db, cfg('aka'), cfg('shiro'), { mode: 'practice', rng: mulberry32(opts.seed || 1) });
  const [a, b] = fight.fighters;
  a.x = 600; b.x = 700;
  const events = [];
  const step = (ia = {}, ib = {}) => { fight.update(DT, [ia, ib]); events.push(...fight.takeEvents()); };
  const idle = (f, ib) => { for (let i = 0; i < 300 && f.state !== 'idle'; i++) step({}, ib ? ib() : {}); };
  // Suveda techniką grandinės lange (arba iškart, jei kovotojas laisvas).
  const chain = (id, ib) => {
    for (let i = 0; i < 300; i++) {
      const T = a.tech;
      if (!T) break;
      if (T.phase === 'recovery' && (T.dur.s + T.dur.a + T.t) / (T.dur.s + T.dur.a + T.dur.r) >= 1 - C.chainWindow + 0.03) break;
      step({}, ib ? ib() : {});
    }
    step({ tech: db.tech[id] }, ib ? ib() : {});
  };
  return { fight, a, b, events, step, idle, chain };
}
const hits = (m) => m.events.filter((e) => e.type === 'hit');

test('technikos fazės: startup → active → recovery, žala zonai ir ištvermės kaina iš techniques.json', () => {
  const m = make();
  const def = db.tech.gedan_mawashi_geri;
  m.step({ tech: def });
  assert.equal(m.a.tech.phase, 'startup');
  assert.equal(m.a.stamina, 100 - def.staminaCost);
  let active = 0;
  for (let i = 0; i < 60 && m.a.tech; i++) { if (m.a.tech.phase === 'active') active++; m.step(); }
  assert.ok(active >= 1);
  const h = hits(m)[0];
  assert.equal(h.zone, 'legs');
  assert.ok(Math.abs(m.b.dmg.legs - def.damage.amount * C.damageScale) < 1e-9);
  assert.ok(m.b.balance < 100);
});

test('renzoku: +10 % žalos už kiekvieną grandinės techniką, daugiausia +40 %', () => {
  const m = make({ immortal: true });
  m.step({ tech: db.tech.seiken_gyaku_tsuki });
  for (let i = 0; i < 6; i++) { m.b.x = m.a.x + 100; m.chain('seiken_shita_tsuki'); }
  m.idle(m.a);
  const starts = m.events.filter((e) => e.type === 'techStart').map((e) => e.chain);
  assert.deepEqual(starts, [0, 1, 2, 3, 4, 5, 6]);
  const amounts = hits(m).filter((h) => h.def.id === 'seiken_shita_tsuki').map((h) => h.amount / (db.tech.seiken_shita_tsuki.damage.amount * C.damageScale));
  assert.ok(Math.abs(amounts[0] - 1.1) < 1e-6 && Math.abs(amounts[1] - 1.2) < 1e-6, JSON.stringify(amounts));
  assert.ok(Math.abs(Math.max(...amounts) - (1 + C.chainBonusMax)) < 1e-6, 'riba +40 %');
  // Per vėlai (pasibaigus langui) suvesta technika pradeda naują grandinę.
  for (let i = 0; i < 30; i++) m.step();
  m.step({ tech: db.tech.seiken_gyaku_tsuki });
  assert.equal(m.a.tech.chain, 0);
});

test('tradicinė kombinacija: Sanbon tsuki suveikia kas tris smūgius, ir ilgoje grandinėje', () => {
  const m = make({ immortal: true });
  m.step({ tech: db.tech.seiken_gyaku_tsuki });
  for (let i = 0; i < 11; i++) { m.b.x = m.a.x + 100; m.chain('seiken_gyaku_tsuki'); }
  m.idle(m.a);
  const combos = m.events.filter((e) => e.type === 'combo').map((e) => e.combo.id);
  assert.deepEqual(combos, ['sanbon_tsuki', 'sanbon_tsuki', 'sanbon_tsuki', 'sanbon_tsuki']);
  const bonus = db.combo.sanbon_tsuki.bonus.damageMult;
  const third = hits(m)[2];
  assert.ok(Math.abs(third.amount - db.tech.seiken_gyaku_tsuki.damage.amount * C.damageScale * 1.2 * bonus) < 1e-6, 'bonusas paskutinei technikai');
  // Neišmokta kombinacija bonuso neduoda.
  const m2 = make({ immortal: true });
  m2.a.combos = new Set();
  m2.step({ tech: db.tech.seiken_gyaku_tsuki });
  m2.chain('seiken_gyaku_tsuki'); m2.chain('seiken_gyaku_tsuki');
  assert.equal(m2.events.filter((e) => e.type === 'combo').length, 0);
});

test('gynyba: lygis turi atitikti; blokuotas smūgis = 25 % žalos; tobulas blokas = 0 žalos, +ki, puolėjas atviras', () => {
  const def = db.tech.mae_geri_chudan;
  // Netinkamas lygis – pataiko.
  let m = make();
  m.step({}, { guard: 'jodan', guardPressed: true });
  for (let i = 0; i < 20; i++) m.step({}, { guard: 'jodan' });
  m.step({ tech: def }, { guard: 'jodan' });
  for (let i = 0; i < 40; i++) m.step({}, { guard: 'jodan' });
  assert.equal(hits(m)[0].blocked, undefined);
  // Tinkamas lygis, gynyba laikoma seniai – 25 %.
  m = make();
  m.b.unlocked.delete('morote_uke');
  m.step({}, { guard: 'chudan', guardPressed: true });
  for (let i = 0; i < 20; i++) m.step({}, { guard: 'chudan' });
  m.step({ tech: def }, { guard: 'chudan' });
  for (let i = 0; i < 40; i++) m.step({}, { guard: 'chudan' });
  let h = hits(m)[0];
  assert.equal(h.blocked, true);
  assert.equal(h.perfect, false);
  assert.ok(Math.abs(m.b.dmg.body - def.damage.amount * C.damageScale * C.block.factor) < 1e-9);
  assert.ok(m.b.counterT > 0 || m.events.length, 'atsiveria kontratakos langas');
  // Tobulas blokas: G paspaustas ≤ 120 ms prieš pataikymą.
  m = make();
  m.step({ tech: def });
  for (let i = 0; i < 9; i++) m.step();                       // ~150 ms startup iš 180
  m.step({}, { guard: 'chudan', guardPressed: true });
  for (let i = 0; i < 10 && !hits(m).length; i++) m.step({}, { guard: 'chudan' });
  h = hits(m)[0];
  assert.equal(h.perfect, true);
  assert.equal(m.b.dmg.body, 0);
  assert.ok(m.b.ki >= C.block.perfectKi);
  assert.ok(m.a.open > 0, 'puolėjas 300 ms atviras');
});

test('sune uke: ↓G prieš žemą spyrį; morote uke: laikant G', () => {
  const m = make();
  m.step({}, { guard: 'gedan', guardPressed: true });
  for (let i = 0; i < 20; i++) m.step({}, { guard: 'gedan' });
  m.step({ tech: db.tech.gedan_mawashi_geri }, { guard: 'gedan' });
  for (let i = 0; i < 40; i++) m.step({}, { guard: 'gedan' });
  const h = hits(m)[0];
  assert.ok(h.blocked && h.sune);
  assert.ok(Math.abs(m.b.dmg.legs - db.tech.gedan_mawashi_geri.damage.amount * C.damageScale * C.block.suneFactor) < 1e-9);
  const m2 = make();
  m2.step({}, { guard: 'chudan', guardPressed: true });
  for (let i = 0; i < 25; i++) m2.step({}, { guard: 'chudan' });
  assert.equal(m2.b.guard.morote, true);
  assert.ok(m2.events.some((e) => e.type === 'guard' && e.techId === 'morote_uke'));
});

test('laikymas ≥ 300 ms ant A/K: sustiprinta versija (+30 % žala, +50 % ištvermės kaina)', () => {
  const def = db.tech.seiken_gyaku_tsuki;
  const m = make();
  m.step({ tech: def, techHeld: true });
  for (let i = 0; i < 40 && !hits(m).length; i++) m.step({ techHeld: true });
  assert.ok(m.events.some((e) => e.type === 'charged'));
  assert.ok(Math.abs(hits(m)[0].amount - def.damage.amount * C.damageScale * C.holdBonus.damage) < 1e-9);
  assert.ok(Math.abs(m.a.stamina - (100 - def.staminaCost * C.holdBonus.stamina)) < 0.5);
  assert.ok(m.fight.time >= db.rules.input.holdMs, 'lėtesnė');
});

test('tai sabaki: ←← atsitraukimas su i-frames; →→ įsiveržimas', () => {
  const m = make();
  m.step({ tech: db.tech.seiken_gyaku_tsuki });
  for (let i = 0; i < 5; i++) m.step();
  m.step({}, { dash: 'B' });
  assert.ok(m.b.invul > 0);
  for (let i = 0; i < 30; i++) m.step();
  assert.equal(hits(m).length, 0, 'smūgis nepataiko');
  const x = m.a.x;
  m.idle(m.a);
  m.step({ dash: 'F' });
  for (let i = 0; i < 15; i++) m.step();
  assert.ok(m.a.x > x + 60);
});

test('įvesties buferis: →→A iš įsiveržimo ir šiek tiek per anksti paspausta grandinės technika neprarandamos', () => {
  const m = make({ immortal: true });
  m.b.x = 900;
  m.step({ dash: 'F' });
  assert.equal(m.a.state, 'dash');
  m.step({ tech: db.tech.hiji_chudan_uchi });
  assert.equal(m.a.tech && m.a.tech.def.id, 'hiji_chudan_uchi', 'technika pradedama iš įsiveržimo');
  m.idle(m.a);
  for (let i = 0; i < 30; i++) m.step();
  // Paspausta ~80 ms prieš grandinės langą – įvykdoma langui atsivėrus, kaip grandinė.
  m.step({ tech: db.tech.seiken_gyaku_tsuki });
  const T = m.a.tech;
  const open = (T.dur.s + T.dur.a + T.dur.r) * (1 - C.chainWindow);
  while (T.phase !== 'recovery' || T.dur.s + T.dur.a + T.t < open - 80) m.step();
  m.step({ tech: db.tech.seiken_shita_tsuki });
  for (let i = 0; i < 12; i++) m.step();
  assert.equal(m.a.tech && m.a.tech.def.id, 'seiken_shita_tsuki');
  assert.equal(m.a.tech.chain, 1);
  // Gerokai per anksti paspausta – nebeįvykdoma.
  m.idle(m.a);
  for (let i = 0; i < 30; i++) m.step();
  m.step({ tech: db.tech.mae_geri_chudan });
  m.step({ tech: db.tech.seiken_gyaku_tsuki });
  m.idle(m.a);
  assert.equal(m.events.filter((e) => e.type === 'techStart').at(-1).def.id, 'mae_geri_chudan');
});

test('knockdown: zonos žala 100; pataikymas esant pusiausvyrai 0; galvos slenkstis', () => {
  let m = make();
  m.b.dmg.legs = 99;
  m.step({ tech: db.tech.gedan_mawashi_geri });
  for (let i = 0; i < 40; i++) m.step();
  assert.equal(m.b.state, 'down');
  assert.equal(m.events.find((e) => e.type === 'knockdown').cause, 'zone');
  m = make();
  m.b.balance = 3;
  m.b.sinceHit = 0;
  m.step({ tech: db.tech.seiken_gyaku_tsuki });
  for (let i = 0; i < 25; i++) m.step();
  assert.equal(m.b.state, 'stagger', 'pusiausvyra 0 → svyravimas');
  assert.ok(m.events.some((e) => e.type === 'balanceBreak'));
  m.idle(m.a);
  m.b.x = m.a.x + 100;
  m.step({ tech: db.tech.seiken_gyaku_tsuki });
  for (let i = 0; i < 25; i++) m.step();
  assert.equal(m.events.find((e) => e.type === 'knockdown').cause, 'balance');
  m = make();
  m.a.unlocked = new Set(db.techniques.map((t) => t.id));
  m.b.dmg.head = C.headKnockdown - 2;
  m.b.x = m.a.x + 120;
  m.step({ tech: db.tech.jodan_mawashi_geri });
  for (let i = 0; i < 60; i++) m.step();
  assert.equal(m.events.find((e) => e.type === 'knockdown').cause, 'head');
});

test('būsenos pasekmės: nuovargis lėtina technikas, kojų žala – žingsniavimą; žala kovos metu neatsistato', () => {
  const m = make();
  m.a.stamina = 10;
  m.step({ tech: db.tech.mae_geri_chudan });
  assert.ok(Math.abs(m.a.tech.dur.s - db.tech.mae_geri_chudan.frames.startup * C.tiredSlow) < 1e-9);
  m.idle(m.a);
  const walk = (legs) => { const k = make(); k.b.x = 1000; k.a.dmg.legs = legs; const x = k.a.x; for (let i = 0; i < 60; i++) k.step({ move: 1 }); return k.a.x - x; };
  assert.ok(Math.abs(walk(60) / walk(0) - C.legSlow) < 0.01);
  m.b.dmg.body = 40;
  for (let i = 0; i < 600; i++) m.step();
  assert.equal(m.b.dmg.body, 40);
  assert.ok(m.a.stamina > 90, 'ištvermė atsistato');
});
