// SPDX-License-Identifier: BUSL-1.1
// Projekto vientisumo testai: duomenų nuorodos, vertimai, SPDX antraštės, service worker sąrašas, file:// rinkinys.

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { loadDb, ROOT } from './helpers.mjs';
import { buildBundle } from '../tools/bundle.mjs';
import { Save, SAVE_KEY } from '../src/core/save.js';
import { chapterItems } from '../src/modes/common.js';

const db = loadDb();
const walk = (dir) => readdirSync(join(ROOT, dir)).flatMap((n) => {
  const p = join(dir, n);
  return statSync(join(ROOT, p)).isDirectory() ? walk(p) : [p];
});
const read = (p) => readFileSync(join(ROOT, p), 'utf8');
const SRC = walk('src');

test('duomenys: kombinacijos, kata, animacijos ir diržai nurodo egzistuojančius įrašus', () => {
  for (const c of db.combos) for (const id of c.sequence) assert.ok(id === '@block' || db.tech[id], `${c.id}: ${id}`);
  for (const k of db.kata) for (const s of k.steps) assert.ok(db.tech[s.replace('*', '')], `${k.id}: ${s}`);
  for (const x of db.techniques) {
    assert.ok(db.beltIdx[x.belt] !== undefined, `${x.id}: diržas`);
    if (x.anim) assert.ok(db.anim.anims[x.anim], `${x.id}: animacija ${x.anim}`);
    if (x.type === 'strike') assert.ok(x.frames && x.damage && db.rules.combat.ranges[x.range], `${x.id}: parametrai`);
    assert.ok(x.nameLt && x.nameEn && x.descLt && x.descEn, `${x.id}: pavadinimai LT/EN`);
  }
  for (const a of Object.values(db.anim.anims)) for (const [, pose] of a.keys) assert.ok(db.anim.poses[pose], `poza ${pose}`);
  for (const b of db.belts) if (b.exam) assert.ok(db.kata.find((k) => k.id === b.exam.kata), `${b.id}: kata`);
  for (const r of db.opponents.roster) assert.ok(db.opponents.archetypes[r.archetype] && db.beltIdx[r.belt] !== undefined, r.id);
  assert.equal(db.belts.length, 7);
  assert.deepEqual(db.belts.filter((b) => b.available).map((b) => b.id), ['white', 'orange', 'blue']);
  assert.equal(Object.keys(db.opponents.archetypes).length, 3, '3 AI archetipai');
});

test('MVP turinys: kiekvienas diržas prideda 3–5 technikas (su gynybomis) ir 1–3 kombinacijas', () => {
  for (const id of ['white', 'orange', 'blue']) {
    const { techs, combos } = chapterItems(db, id);
    assert.ok(techs.length >= 4 && techs.length <= 7, `${id}: ${techs.length} technikos`);
    assert.ok(combos.length >= 1 && combos.length <= 3, `${id}: ${combos.length} kombinacijos`);
  }
});

test('vertimai: LT ir EN turi tuos pačius raktus, visi kode naudojami raktai egzistuoja', () => {
  const lt = Object.keys(db.strings.lt).sort();
  const en = Object.keys(db.strings.en).sort();
  assert.deepEqual(lt, en);
  const used = new Set();
  for (const f of SRC) for (const m of read(f).matchAll(/\bt\((?:'|`)([a-zA-Z0-9_.]+)(?:'|`)/g)) used.add(m[1]);
  for (const k of used) assert.ok(db.strings.lt[k] !== undefined, `trūksta rakto ${k}`);
  for (const id of Object.keys(db.rules.calls)) assert.ok(db.strings.lt[`call.${id}`], `call.${id}`);
  for (const p of ['foul.illegal', 'foul.holding', 'foul.passivity', 'foul.jogai', 'foul.disrespect', 'foul.afterYame', 'foul.downed',
    'result.ippon', 'result.awasete', 'result.hantei', 'result.shikkaku', 'arch.tank', 'arch.kicker', 'arch.counter',
    'diff.easy', 'diff.normal', 'diff.hard', 'story.orange', 'story.blue', 'kata.perfect', 'kata.good', 'kata.miss']) {
    assert.ok(db.strings.lt[p] && db.strings.en[p], p);
  }
  for (const s of ['lang', 'difficulty', 'sound', 'music', 'voice', 'vibrate', 'btnScale', 'btnOpacity', 'leftHanded', 'assist', 'termsTranslated']) {
    assert.ok(db.strings.lt[`set.${s}`], `set.${s}`);
  }
});

test('žaidimo tekstuose nėra žodžio „Kyokushin“', () => {
  const files = [...SRC, ...walk('data'), ...walk('assets').filter((f) => /\.(json|svg)$/.test(f)), 'index.html', 'manifest.webmanifest', 'styles.css', 'sw.js'];
  for (const f of files) assert.ok(!/kyokushin|kiokušin|kiokusin/i.test(read(f)), f);
  assert.match(db.strings.lt['app.tagline'], /pilno kontakto \(knockdown\) karatė/i);
});

test('kiekvieno šaltinio failo viršuje – SPDX-License-Identifier: BUSL-1.1', () => {
  const files = [...SRC, ...walk('tests').filter((f) => !f.includes('fixtures')), ...walk('tools'), ...walk('data'), ...walk('assets').filter((f) => /\.(json|svg)$/.test(f)),
    'index.html', 'styles.css', 'sw.js', 'dist/game.bundle.js'];
  for (const f of files) {
    const head = read(f).split('\n').slice(0, 3).join('\n');
    assert.match(head, /SPDX-License-Identifier: BUSL-1\.1/, f);
  }
  const lic = read('LICENSE');
  assert.match(lic, /^Business Source License 1\.1/);
  assert.match(lic, /Licensor:\s+Paulius Sladkevičius/);
  assert.match(lic, /Change License:\s+GNU General Public License, version 2\.0 or later/);
  assert.ok(existsSync(join(ROOT, 'THIRD_PARTY.md')));
});

test('LICENSE: BSL 1.1 sąlygų tekstas nepakeistas (sutampa su kanoniniu SPDX BUSL-1.1 tekstu), užpildyti tik parametrai', () => {
  const lic = read('LICENSE');
  const spdx = read('tests/fixtures/BUSL-1.1.spdx.txt');
  const terms = (x) => x.slice(x.indexOf('Terms\n'));
  assert.equal(terms(lic), terms(spdx), 'sąlygos nuo „Terms“ iki galo turi sutapti simbolis į simbolį');
  assert.ok(lic.includes(spdx.slice(spdx.indexOf('License text copyright'), spdx.indexOf('Terms\n')).trim()), 'MariaDB autorių teisių ir prekių ženklo eilutės');
  const head = lic.slice(0, lic.indexOf('Notice'));
  for (const re of [/Licensor:\s+Paulius Sladkevičius/, /Licensed Work:\s+"OSU! Karatės kelias"/, /\(c\) 2026 Paulius Sladkevičius/,
    /source code,\s+data, graphics, animations and sounds/, /Additional Use Grant:[\s\S]*non-commercial production use[\s\S]*dojos and schools/,
    /Commercial hosting or\s+commercial distribution[\s\S]*separate commercial license/, /Change Date:\s+Four years/,
    /Change License:\s+GNU General Public License, version 2\.0 or later/]) assert.match(head, re);
});

test('service worker talpina visus žaidimo failus (veikimas be interneto)', () => {
  const sw = read('sw.js');
  const listed = new Set([...sw.matchAll(/^\s*'([^']+)',$/gm)].map((m) => m[1]));
  const needed = [...SRC, ...walk('data'), ...walk('assets'), 'index.html', 'styles.css', 'manifest.webmanifest'].map((p) => relative('.', p).replace(/\\/g, '/'));
  for (const f of needed) assert.ok(listed.has(f), `sw.js ASSETS trūksta: ${f}`);
  for (const f of listed) if (f !== './') assert.ok(existsSync(join(ROOT, f)), `sw.js nurodo neegzistuojantį failą: ${f}`);
  const man = JSON.parse(read('manifest.webmanifest'));
  assert.equal(man.display, 'fullscreen');
  assert.equal(man.orientation, 'landscape');
});

test('dist/game.bundle.js atitinka šaltinius (index.html paleidžiamas tiesiai iš disko)', () => {
  assert.equal(read('dist/game.bundle.js'), buildBundle(), 'paleiskite: node tools/bundle.mjs');
});

test('išsaugojimas: progresas išlieka, schema versijuota, sugadinti duomenys neužlaužia žaidimo', () => {
  const mem = {};
  const storage = { getItem: (k) => mem[k] ?? null, setItem: (k, v) => { mem[k] = v; } };
  const a = new Save(storage);
  a.load();
  a.data.beltIndex = 2;
  a.data.settings.lang = 'en';
  a.learn('seiken_gyaku_tsuki');
  a.learn('sanbon_tsuki', true);
  a.data.trophies.push('city_cup');
  a.write();
  const b = new Save(storage);
  b.load();
  assert.equal(b.data.beltIndex, 2);
  assert.deepEqual(b.data.learned, ['seiken_gyaku_tsuki']);
  assert.deepEqual(b.data.learnedCombos, ['sanbon_tsuki']);
  assert.deepEqual(b.data.trophies, ['city_cup']);
  assert.equal(b.data.settings.lang, 'en');
  assert.equal(b.data.v, 1);
  mem[SAVE_KEY] = '{"beltIndex":1}';          // senesnė schema be laukų
  const c = new Save(storage);
  c.load();
  assert.equal(c.data.beltIndex, 1);
  assert.ok(c.data.settings.sound === true && Array.isArray(c.data.learned));
  mem[SAVE_KEY] = '{sugadinta';
  const d = new Save(storage);
  d.load();
  assert.equal(d.data.beltIndex, 0);
});
