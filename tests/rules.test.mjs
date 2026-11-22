// SPDX-License-Identifier: BUSL-1.1
// Kovos taisyklių testai (MVP priėmimo kriterijai): chui / shikkaku, waza-ari / awasete ippon, knockdown > 3 s = ippon,
// hantei (5 teisėjai, ≥ 3 balsai), encho, paskutinis pratęsimas, „Ne“ technika kumite metu, jogai, ceremonija.

import test from 'node:test';
import assert from 'node:assert/strict';
import { loadDb } from './helpers.mjs';
import { makeMatch } from './match.mjs';
import { judgeVote, tallyVotes, hanteiScore } from '../src/fight/rules.js';
import { SIGNALS } from '../src/fight/judges.js';
import { flagPose } from '../src/fight/render.js';
import { mulberry32 } from '../src/core/rng.js';

const db = loadDb();
const R = db.rules.match;
const fighting = (m) => () => m.referee.state === 'FIGHTING';
const done = (m) => () => m.referee.state === 'DONE';

function start(opts) {
  const m = makeMatch(db, opts);
  assert.ok(m.until(fighting(m), 30000), 'kova turi prasidėti');
  return m;
}

function knockdown(m, attacker, getUpMs) {
  const o = attacker === m.aka ? m.shiro : m.aka;
  o.dmg.body = 99.5;
  m.attack(attacker, 'seiken_gyaku_tsuki');
  assert.ok(m.until(() => o.state === 'down', 1000), 'varžovas turi kristi');
  o.down.getUpAt = getUpMs;
  return o;
}

test('kovos pradžia: Aka, Shiro → trys nusilenkimai → Kamaete → Hajime', () => {
  const m = start();
  assert.deepEqual(m.calls().slice(0, 6), ['aka_shiro', 'shomen_ni_rei', 'shushin_ni_rei', 'otagai_ni_rei', 'kamaete', 'hajime']);
  assert.equal(m.fight.phase, 'live');
});

test('„Ne“ technika kumite metu visada sukelia chui ir kampinių teisėjų signalą', () => {
  const illegal = db.techniques.filter((t) => ['white', 'orange', 'blue'].includes(t.belt) && t.type === 'strike' && !t.legalInKumite);
  assert.ok(illegal.length >= 2);
  for (const tech of illegal) {
    for (let seed = 1; seed <= 25; seed++) {
      const m = start({ seed });
      m.attack(m.aka, tech.id);
      assert.ok(m.until(() => m.referee.state === 'FOUL', 1500), `${tech.name}: teisėjas turi sustabdyti kovą (seed ${seed})`);
      const flags = m.referee.judges.corners.filter((j) => j.signal === 'chui' && j.side === 'aka').length;
      assert.ok(flags + 1 >= R.votesNeeded, `≥3 balsai iš 5 (kampinių vėliavėlių: ${flags})`);
      assert.ok(m.log.some((e) => e.type === 'whistle' && e.kind === 'shorts'), 'keli trumpi švilpukai');
      m.until(fighting(m), 8000);
      assert.equal(m.aka.chui, tech.foulChui || 1, `${tech.name}: chui`);
      assert.equal(m.shiro.dmg.head, 0, 'draudžiama technika žalos nedaro');
      assert.ok(m.calls().includes('chui_1'));
    }
  }
  // Blokuota draudžiama technika – vis tiek pražanga; smūgis į orą (fintas) – leidžiamas.
  const m = start({ seed: 3 });
  m.aka.x = 600; m.shiro.x = 690;
  m.intents[1] = { guard: 'jodan', guardPressed: true };
  m.step();
  m.intents[0] = { tech: db.tech.seiken_jodan_tsuki };
  m.intents[1] = { guard: 'jodan' };
  for (let i = 0; i < 20; i++) { m.step(); m.intents[1] = { guard: 'jodan' }; }
  assert.equal(m.referee.state, 'FOUL');
  const m2 = start({ seed: 4 });
  m2.attack(m2.aka, 'seiken_jodan_tsuki', 300);
  m2.run(1500);
  assert.equal(m2.aka.chui, 0, 'fintas (nesusilietimas) leidžiamas');
  assert.equal(m2.referee.state, 'FIGHTING');
});

test('4-as chui = shikkaku', () => {
  const m = start({ seed: 7 });
  for (let i = 1; i <= R.chuiLimit; i++) {
    assert.ok(m.until(fighting(m), 9000));
    m.attack(m.aka, 'seiken_jodan_tsuki');
    assert.ok(m.until(() => m.aka.chui === i, 3000), `chui ${i}`);
  }
  assert.ok(m.until(done(m), 20000));
  assert.deepEqual(m.calls().filter((c) => c.startsWith('chui') || c === 'shikkaku'), ['chui_1', 'chui_2', 'chui_3', 'shikkaku']);
  assert.equal(m.referee.result.by, 'shikkaku');
  assert.equal(m.referee.result.winner, 'shiro');
});

test('knockdown > 3 s = ippon', () => {
  const m = start({ seed: 2 });
  knockdown(m, m.aka, 99999);
  assert.equal(m.referee.state, 'KNOCKDOWN_COUNT');
  m.run(R.knockdownCountSec * 1000 - 200);
  assert.equal(m.referee.state, 'KNOCKDOWN_COUNT', 'skaičiuojama 3 s');
  assert.ok(m.until(done(m), 20000));
  assert.equal(m.referee.result.by, 'ippon');
  assert.equal(m.referee.result.winner, 'aka');
  assert.deepEqual(m.log.filter((e) => e.type === 'count').map((e) => e.n), [1, 2, 3]);
  assert.ok(m.log.some((e) => e.type === 'whistle' && e.kind === 'long'));
});

test('atsikėlus per 3 s – waza-ari; du waza-ari = awasete ippon', () => {
  const m = start({ seed: 5 });
  knockdown(m, m.aka, 1500);
  assert.ok(m.until(() => m.aka.wazaAri === 1, 6000));
  assert.ok(m.referee.judges.corners.some((j) => j.signal === 'wazaari' && j.side === 'aka'), 'vėliavėlė horizontaliai');
  assert.ok(m.until(fighting(m), 8000), 'kova tęsiama (Zokko)');
  assert.ok(m.calls().includes('zokko'));
  knockdown(m, m.aka, 1500);
  assert.ok(m.until(() => m.aka.wazaAri === 2, 6000));
  assert.ok(m.until(() => m.referee.judges.corners.some((j) => j.signal === 'wazaari_ippon'), 4000), 'iš horizontalios – įstrižai aukštyn');
  assert.ok(m.until(done(m), 20000));
  assert.equal(m.referee.result.by, 'awasete');
  assert.ok(m.calls().includes('awasete_ippon'));
});

test('hantei: balsuoja 5 teisėjai, reikia ≥ 3 balsų', () => {
  const m = start({ seed: 9, timeSec: 5 });
  m.aka.stats.dmg = 80; m.aka.stats.effective = 12; m.aka.stats.techniques = 20;
  m.aka.passive = -1e9; m.shiro.passive = -1e9;
  assert.ok(m.until(done(m), 40000));
  const seq = m.calls();
  for (const c of ['yame', 'shomen_muite', 'hantei_o_torimasu', 'hantei', 'aka_no_kachi']) assert.ok(seq.includes(c), c);
  const h = m.log.find((e) => e.type === 'hantei');
  assert.equal(h.votes.votes.length, 5);
  assert.ok(h.votes.aka >= 3);
  assert.equal(m.referee.result.by, 'hantei');
  assert.equal(m.referee.round, 0);
});

test('< 3 balsų → hikiwake → encho; paskutiniame pratęsime nugalėtojas visada išrenkamas', () => {
  for (let seed = 1; seed <= 20; seed++) {
    const m = start({ seed, timeSec: 3 });
    const quiet = () => { m.aka.passive = -1e9; m.shiro.passive = -1e9; };
    quiet();
    // Visiškai lygi kova: visuose raunduose lygiosios, kol paskutiniame pratęsime teisėjai privalo rinktis.
    let guard = 0;
    while (m.referee.state !== 'DONE' && guard++ < 200000) { m.step(); if (m.referee.state === 'KAMAETE') quiet(); }
    assert.equal(m.referee.round, R.maxEncho, `seed ${seed}: turi būti ${R.maxEncho} pratęsimai`);
    assert.equal(m.calls().filter((c) => c === 'hikiwake').length, R.maxEncho);
    assert.equal(m.calls().filter((c) => c === 'encho').length, R.maxEncho);
    const r = m.referee.result;
    assert.ok(r && (r.winner === 'aka' || r.winner === 'shiro'));
    assert.ok(r.votes[r.winner] >= 3, 'nugalėtojas turi ≥ 3 balsus');
    assert.equal(r.votes.draw, 0, 'paskutiniame pratęsime lygiųjų balsų nėra');
  }
});

test('pergalės ceremonija: kampiniai pakelia vėliavėles, „Aka/Shiro no kachi“, balsų santykis', () => {
  const m = start({ seed: 11 });
  knockdown(m, m.shiro, 99999);
  assert.ok(m.until(() => m.referee.state === 'CEREMONY', 9000));
  m.run(1200);
  const corners = m.referee.judges.corners;
  assert.equal(corners.filter((j) => j.signal === 'hantei' && j.side === 'shiro').length, 4, 'visi 4 kampiniai – nugalėtojo spalva');
  for (const j of corners) assert.ok(j.delay >= R.flagDelayMs[0] && j.delay <= R.flagDelayMs[1], '100–250 ms vėlavimas');
  assert.ok(m.until(done(m), 12000));
  assert.ok(m.calls().includes('shiro_no_kachi'));
  const res = m.log.find((e) => e.type === 'result').result;
  assert.equal(res.winner, 'shiro');
  assert.ok(res.votes.shiro >= 3 && res.votes.aka === 0);
  assert.equal(m.calls().at(-1), 'otagai_ni_rei', 'pabaigoje – nusilenkimas');
});

test('ne vienbalsis hantei: ceremonijoje kai kurie teisėjai rodo kitą spalvą arba lygiąsias', () => {
  const m = start({ seed: 1 });
  m.referee.end('aka', 'hantei', ['aka', 'shiro', 'aka', 'draw', 'aka']);
  m.run(1200);
  const c = m.referee.judges.corners;
  assert.deepEqual(c.map((j) => (j.signal === 'hikiwake' ? 'draw' : j.side)), ['aka', 'shiro', 'aka', 'draw']);
});

test('jogai: Yame → grįžimas į centrą → Zokko; pasikartojantis bėgimas = chui', () => {
  const m = start({ seed: 12 });
  const A = db.rules.arena;
  m.shiro.x = A.xMax + 20;
  m.step();
  assert.equal(m.referee.state, 'JOGAI');
  assert.ok(m.referee.judges.corners.some((j) => j.signal === 'jogai'));
  assert.ok(m.until(fighting(m), 6000));
  assert.equal(m.shiro.x, A.startShiro);
  assert.equal(m.shiro.chui, 0);
  m.shiro.x = A.xMax + 20;
  m.step();
  assert.ok(m.until(fighting(m), 9000));
  assert.equal(m.shiro.chui, 1, 'antras išėjimas už ribos – chui');
});

test('laikymas (G per ilgai arti varžovo): pirma įspėjamasis gestas, tada chui; pasyvumas = chui', () => {
  const m = start({ seed: 13 });
  const hold = (expect) => {
    m.aka.x = 600; m.shiro.x = 690;
    let guard = 0;
    m.intents[0] = { guard: 'chudan', guardPressed: true };
    while (m.referee.state === 'FIGHTING' && guard++ < 400) { m.shiro.passive = 0; m.step(); m.intents[0] = { guard: 'chudan' }; }
    assert.equal(m.referee.state, 'FOUL');
    assert.ok(m.referee.judges.corners.some((j) => j.signal === 'clinch'), 'abi vėliavėlės žemyn');
    assert.ok(m.until(fighting(m), 6000));
    assert.equal(m.aka.chui, expect);
  };
  hold(0);
  hold(1);
  m.run(R.passivitySec * 1000 + 500);
  assert.ok(m.aka.chui + m.shiro.chui >= 2 || m.referee.state === 'FOUL', 'pasyvumas baudžiamas');
});

test('puolimas po „Yame“ = chui ni', () => {
  const m = start({ seed: 14 });
  m.shiro.x = db.rules.arena.xMax + 20;       // jogai → Yame
  m.step();
  m.run(R.yameGraceMs + 100);
  m.aka.x = 900; m.shiro.x = 990; m.aka.facing = 1;
  m.intents[0] = { tech: db.tech.seiken_gyaku_tsuki };
  m.step();
  assert.ok(m.until(fighting(m), 12000));
  assert.equal(m.aka.chui, 2);
  assert.ok(m.calls().includes('chui_2'));
});

test('nenusilenkus (REI) – nepagarba = chui', () => {
  const m = makeMatch(db, { seed: 15 });
  m.referee.autoBow = false;
  m.aka.isPlayer = true;                       // žaidėjas nespaudžia REI
  assert.ok(m.until(fighting(m), 40000));
  assert.equal(m.aka.chui, 1);
  assert.equal(m.shiro.chui, 0);
  assert.equal(m.referee.respectMiss[0], 3);
});

test('hantei kriterijai ir balsų sudėjimas', () => {
  const f = (o = {}) => ({ wazaAri: 0, chui: 0, stats: { dmg: 0, effective: 0, techniques: 0, initiative: 0 }, ...o });
  const rng = mulberry32(1);
  assert.equal(judgeVote(f({ wazaAri: 1 }), f({ stats: { dmg: 60, effective: 5, techniques: 9, initiative: 9000 } }), R, rng, false), 'aka', 'waza-ari svarbiausias');
  assert.equal(judgeVote(f(), f(), R, rng, false), 'draw');
  assert.notEqual(judgeVote(f(), f(), R, rng, true), 'draw');
  // Dviejų įspėjimų skirtumas nulemia sprendimą prieš pažeidėją, jei jis nevedė aiškiai.
  assert.equal(judgeVote(f({ chui: 2, stats: { dmg: 30, effective: 4, techniques: 8, initiative: 0 } }), f({ stats: { dmg: 28, effective: 4, techniques: 8, initiative: 0 } }), R, rng, false), 'shiro');
  assert.ok(hanteiScore(f({ stats: { dmg: 10, effective: 0, techniques: 0, initiative: 0 } }), R.hantei) > hanteiScore(f({ stats: { dmg: 0, effective: 2, techniques: 0, initiative: 0 } }), R.hantei));
  assert.equal(tallyVotes(['aka', 'aka', 'draw', 'shiro', 'aka'], 3).winner, 'aka');
  assert.equal(tallyVotes(['aka', 'aka', 'draw', 'shiro', 'shiro'], 3).winner, null);
});

test('visi vėliavėlių signalai turi animaciją', () => {
  for (const s of SIGNALS) {
    const p = flagPose(s, 'aka', 300);
    assert.ok(p && (p.cross || (Number.isFinite(p.red) && Number.isFinite(p.white))), s);
  }
  assert.ok(flagPose('ippon', 'aka', 500).red > 120, 'ippon – įstrižai aukštyn');
  assert.ok(Math.abs(flagPose('wazaari', 'shiro', 500).white - 90) < 1, 'waza-ari – horizontaliai');
  assert.ok(flagPose('wazaari_ippon', 'aka', 600).red > 120);
  assert.ok(flagPose('chui', 'aka', 500).red < 70, 'chui – įstrižai žemyn');
  assert.ok(flagPose('fumei', null, 500).cross && flagPose('mitomezu', null, 500).cross && flagPose('hikiwake', null, 500).cross);
});
