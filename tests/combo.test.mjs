// SPDX-License-Identifier: BUSL-1.1
// Kombinacijų atpažinimo testai. Priėmimo kriterijus: visos lentelės „Technikos“ įvestys baltam–mėlynam
// diržui atpažįstamos be klaidų 10 iš 10 bandymų.

import test from 'node:test';
import assert from 'node:assert/strict';
import { ComboRecognizer, dirFromVector } from '../src/core/combo.js';
import { techsUpTo } from '../src/core/data.js';
import { mulberry32 } from '../src/core/rng.js';
import { loadDb } from './helpers.mjs';

const db = loadDb();
const cfg = db.rules.input;
const MVP = ['white', 'orange', 'blue'];
const unlocked = techsUpTo(db, 'blue');

// Tarpinės džoistiko padėtys tarp dviejų krypčių (ketvirčio / pusės apskritimo judesiai eina per įstrižaines).
const VEC = { F: [1, 0], B: [-1, 0], U: [0, -1], D: [0, 1] };
function between(a, b) {
  const [ax, ay] = VEC[a];
  const [bx, by] = VEC[b];
  if (ax + bx === 0 && ay + by === 0) return ['N'];            // priešingos kryptys – per centrą
  return [dirFromVector(ax + bx, ay + by)];                     // gretimos – per įstrižainę
}

// Suvaidina įvestį su atsitiktiniais laikais (laiko langų ribose) ir grąžina atpažinimo rezultatą.
function perform(rec, input, rng, opts = {}) {
  const dirs = input.slice(0, -1);
  const btn = input[input.length - 1];
  let t = opts.t0 ?? 1000;
  rec.pushDir('N', t);
  for (let i = 0; i < dirs.length; i++) {
    const d = dirs[i];
    if (i > 0) {
      const prev = dirs[i - 1];
      if (prev === d) { t += 30 + rng() * 60; rec.pushDir('N', t); }            // pakartojimas: atleisti ir vėl
      else if (opts.sloppy !== false && rng() < 0.8) { t += 20 + rng() * 60; for (const m of between(prev, d)) rec.pushDir(m, t); }
    }
    t += 30 + rng() * (cfg.bufferMs - 120);
    rec.pushDir(d, t);
  }
  if (dirs.length && opts.release && rng() < 0.5) { t += 20 + rng() * 80; rec.pushDir('N', t); }
  t += 10 + rng() * (cfg.buttonMs - 110);
  return rec.press(btn, t, opts.unlocked ?? unlocked);
}

const techs = db.techniques.filter((t) => MVP.includes(t.belt) && !t.auto && !t.hold);

test('lentelės „Technikos“ įvestys (baltas–mėlynas) atpažįstamos 10 iš 10', () => {
  assert.ok(techs.length >= 15, 'tikimasi bent 15 MVP technikų');
  for (const tech of techs) {
    const rng = mulberry32(tech.id.length * 977 + 13);
    for (let i = 0; i < 10; i++) {
      const rec = new ComboRecognizer(db.techniques, cfg);
      const r = perform(rec, tech.input, rng, { release: true });
      assert.equal(r.matched, tech.id, `${tech.name} (${tech.input.join(' ')}), bandymas ${i + 1}`);
      assert.equal(r.locked, false);
      assert.equal(r.tech.id, tech.id);
    }
  }
});

test('tikslios (be įstrižainių) įvestys taip pat atpažįstamos', () => {
  const rng = mulberry32(5);
  for (const tech of techs) {
    const rec = new ComboRecognizer(db.techniques, cfg);
    assert.equal(perform(rec, tech.input, rng, { sloppy: false }).matched, tech.id, tech.name);
  }
});

test('visų diržų technikų įvestys vienareikšmės (įskaitant ○ ir ↑↑)', () => {
  const all = new Set(db.techniques.map((t) => t.id));
  const rng = mulberry32(77);
  for (const tech of db.techniques.filter((t) => !t.auto && !t.hold && !t.input.slice(0, -1).some((x) => x === 'CIRCLE' || x === 'K'))) {
    const rec = new ComboRecognizer(db.techniques, cfg);
    assert.equal(perform(rec, tech.input, rng, { unlocked: all }).matched, tech.id, tech.name);
  }
  // Pilnas apskritimas + K = Ushiro mawashi geri.
  const rec = new ComboRecognizer(db.techniques, cfg);
  let t = 1000;
  for (const d of ['F', 'DF', 'D', 'DB', 'B', 'UB', 'U', 'UF', 'F']) { rec.pushDir(d, t); t += 40; }
  assert.equal(rec.press('K', t, all).matched, 'ushiro_mawashi_geri');
});

test('visada parenkama ilgiausia seka (↓→K nugali →K)', () => {
  const rec = new ComboRecognizer(db.techniques, cfg);
  rec.pushDir('D', 1000); rec.pushDir('DF', 1060); rec.pushDir('F', 1120);
  assert.equal(rec.press('K', 1180, unlocked).matched, 'chudan_mawashi_geri');
  const all = new Set(db.techniques.map((t) => t.id));
  const rec2 = new ComboRecognizer(db.techniques, cfg);
  rec2.pushDir('D', 1000); rec2.pushDir('DF', 1060); rec2.pushDir('F', 1120); rec2.pushDir('UF', 1180); rec2.pushDir('U', 1240);
  assert.equal(rec2.press('K', 1300, all).matched, 'jodan_mawashi_geri', '↓→↑K nugali ↑K');
});

test('neatrakinta technika nesuvedama – atliekama paprasčiausia to mygtuko technika', () => {
  const white = techsUpTo(db, 'white');
  const rec = new ComboRecognizer(db.techniques, cfg);
  rec.pushDir('D', 1000);
  const r = rec.press('K', 1050, white);          // ↓K = Gedan mawashi geri (oranžinis)
  assert.equal(r.locked, true);
  assert.equal(r.matched, 'gedan_mawashi_geri');
  assert.equal(r.tech.id, 'mae_geri_chudan');
  for (const tech of db.techniques.filter((t) => !MVP.includes(t.belt) && t.type === 'strike' && !t.auto && !t.input.slice(0, -1).some((x) => x === 'CIRCLE' || x === 'K'))) {
    const rec2 = new ComboRecognizer(db.techniques, cfg);
    const res = perform(rec2, tech.input, mulberry32(3), {});
    assert.equal(res.locked, true, `${tech.name} turi būti užrakinta`);
    assert.notEqual(res.tech.id, tech.id);
    assert.equal(res.tech.input.length, 1, 'vykdoma bazinė technika');
  }
});

test('laiko langai: per vėlai paspaustas mygtukas arba per lėta seka nebeatpažįstami', () => {
  const rec = new ComboRecognizer(db.techniques, cfg);
  rec.pushDir('F', 1000); rec.pushDir('N', 1100);
  assert.equal(rec.press('A', 1100 + cfg.buttonMs + 50, unlocked).matched, 'seiken_gyaku_tsuki', 'mygtukas > 200 ms po krypties');
  const rec2 = new ComboRecognizer(db.techniques, cfg);
  rec2.pushDir('D', 1000); rec2.pushDir('N', 1100); rec2.pushDir('F', 1100 + cfg.bufferMs + 80);
  assert.equal(rec2.press('K', 1100 + cfg.bufferMs + 120, unlocked).matched, 'hiza_geri', 'tarpas tarp krypčių > 350 ms');
  // Laikoma kryptis galioja neribotai (→ laikant + A = Oi tsuki).
  const rec3 = new ComboRecognizer(db.techniques, cfg);
  rec3.pushDir('F', 1000);
  assert.equal(rec3.press('A', 4000, unlocked).matched, 'seiken_oi_tsuki');
});

test('gynybos lygiai: G / ↑G / ↓G', () => {
  for (const [dir, id] of [[null, 'chudan_uchi_uke'], ['U', 'jodan_uke'], ['D', 'gedan_barai']]) {
    const rec = new ComboRecognizer(db.techniques, cfg);
    if (dir) rec.pushDir(dir, 1000);
    assert.equal(rec.press('G', 1080, unlocked).matched, id);
  }
});

test('dirFromVector: 8 kryptys ir mirtina zona', () => {
  assert.equal(dirFromVector(0.1, 0.1, 0.2), 'N');
  assert.equal(dirFromVector(1, 0), 'F');
  assert.equal(dirFromVector(-1, 0), 'B');
  assert.equal(dirFromVector(0, -1), 'U');
  assert.equal(dirFromVector(0, 1), 'D');
  assert.equal(dirFromVector(0.7, 0.7), 'DF');
  assert.equal(dirFromVector(-0.7, -0.7), 'UB');
});

test('grąžinant džoistiką nuo → prie ↓ judesys nelaikomas nauju ketvirčiu (Kagi – kagi – gedan)', () => {
  const orange = techsUpTo(db, 'orange');
  const go = (seq, btn, set = orange) => {
    const rec = new ComboRecognizer(db.techniques, cfg);
    let t = 1000;
    for (const d of seq) { rec.pushDir(d, t); t += 60; }
    return rec.press(btn, t, set);
  };
  // Po ↓→A: džoistikas grįžta prie ↓ (tvarkingai, sustojus įstrižai arba peršokant) ir spaudžiamas K = Gedan mawashi geri.
  for (const seq of [['D', 'DF', 'F', 'DF', 'D'], ['D', 'DF', 'F', 'DF'], ['D', 'DF', 'F', 'D'], ['D', 'F', 'D'], ['D', 'DF', 'F', 'N', 'D']]) {
    const r = go(seq, 'K');
    assert.equal(r.matched, 'gedan_mawashi_geri', seq.join(' '));
    assert.equal(r.locked, false);
  }
  // Antras ↓→A iš eilės: grįžtama prie ↓ ir vėl sukamas ketvirtis.
  for (const seq of [['D', 'DF', 'F', 'DF', 'D', 'DF', 'F'], ['D', 'DF', 'F', 'D', 'DF'], ['D', 'DF', 'F', 'D', 'F']]) {
    assert.equal(go(seq, 'A').matched, 'seiken_kagi_tsuki', seq.join(' '));
  }
  // Tikras ketvirtis (↓ ↘ →, taip pat sustojus ↘) ir toliau atpažįstamas; ↓A po ↓→ – Shita tsuki.
  assert.equal(go(['D', 'DF', 'F'], 'K', unlocked).matched, 'chudan_mawashi_geri');
  assert.equal(go(['D', 'DF'], 'K', unlocked).matched, 'chudan_mawashi_geri');
  assert.equal(go(['D', 'DF', 'F', 'DF', 'D'], 'A').matched, 'seiken_shita_tsuki');
  // Įstrižainė iš neutralios padėties: pirmenybė lygiui (↓).
  assert.equal(go(['DF'], 'K').matched, 'gedan_mawashi_geri');
  // Atleista kryptis dar galioja 200 ms, bet perėjus į kitą kryptį – nebe.
  assert.equal(go(['F', 'N'], 'A').matched, 'seiken_oi_tsuki');
  assert.equal(go(['F', 'U'], 'K').matched, 'jodan_mae_geri');
});
