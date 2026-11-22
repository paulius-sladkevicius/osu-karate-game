// SPDX-License-Identifier: BUSL-1.1
// Derinimo ekranas: hitbox'ai ir hurtbox'ai, kovotojų būsenos skaičiai, visų technikų parametrų lentelė,
// vėliavėlių signalų peržiūra, partnerio režimai.

import { JudgePanel, SIGNALS, WHISTLE } from '../fight/judges.js';
import { AIController, DummyController, buildProfile } from '../fight/ai.js';
import { techsUpTo, combosUpTo } from '../core/data.js';
import { inputGlyphs } from '../core/combo.js';
import { t, esc } from '../core/i18n.js';

function paramsTable(db) {
  const R = db.rules.combat.ranges;
  const rows = db.techniques.map((x) => {
    const f = x.frames || {};
    return `<tr><td>${esc(x.name)}</td><td>${x.belt}</td><td>${inputGlyphs(x.input).join(' ')}${x.hold ? ' (hold)' : ''}${x.auto ? ' (auto)' : ''}</td>
      <td>${x.level || ''}</td><td>${x.range ? `${x.range} ${R[x.range]}` : ''}</td>
      <td>${f.startup ?? ''}</td><td>${f.active ?? ''}</td><td>${f.recovery ?? ''}</td>
      <td>${x.damage ? `${x.damage.amount} ${x.damage.zone}` : ''}</td><td>${x.balanceDamage ?? ''}</td><td>${x.staminaCost ?? ''}</td>
      <td>${x.legalInKumite ? '✓' : `✗ chui ${x.foulChui || 1}`}</td></tr>`;
  }).join('');
  const C = db.rules.combat;
  return `<p class="muted">damageScale ${C.damageScale} · chainWindow ${C.chainWindow} · block ×${C.block.factor} · perfect ≤${C.block.perfectMs} ms · hold ≥${db.rules.input.holdMs} ms · buffer ${db.rules.input.bufferMs}/${db.rules.input.buttonMs} ms</p>
    <table class="params"><thead><tr><th>${t('debug.tech')}</th><th>belt</th><th>input</th><th>level</th><th>range px</th><th>startup</th><th>active</th><th>recovery</th>
    <th>dmg</th><th>bal</th><th>sta</th><th>kumite</th></tr></thead><tbody>${rows}</tbody></table>`;
}

export async function debugScreen(game) {
  const db = game.db;
  const all = new Set(db.techniques.map((x) => x.id));
  const allCombos = new Set(db.combos.map((c) => c.id));
  const st = { table: false, signals: false, partner: 'passive', unlockAll: false, sig: 0 };
  const panel = new JudgePanel(db.rules.match);
  const done = game.runFight({
    mode: 'practice', bg: 'dojo', hints: true, debug: true, showDamage: true, judgesPreview: panel,
    player: { name: 'Debug', belt: 'blue', unlocked: techsUpTo(db, 'blue'), combos: combosUpTo(db, 'blue') },
    opponent: { name: 'Dummy', belt: 'blue', dummy: 'passive' },
    director: { attach() {}, update(dt) { panel.update(dt); } },
  });
  const scene = game.scene;
  const draw = () => {
    const b = (act, label, on) => `<button class="btn small${on ? ' primary' : ''}" data-act="${act}">${label}</button>`;
    game.ui.show(`<div class="debug-bars"><div class="debug-bar">
        ${b('table', t('debug.table'), st.table)}${b('signals', t('debug.signals'), st.signals)}
        ${b('partner', `${t('debug.partner')}: ${st.partner}`)}${b('unlock', t('debug.unlockAll'), st.unlockAll)}
        ${b('ki', 'Ki 100')}${b('boxes', t('debug.boxesInFights'), game.debugBoxes)}${b('exit', t('ui.quit'))}
      </div>
      ${st.signals ? `<div class="debug-bar">${SIGNALS.map((s) => b(`sig:${s}`, s)).join('')}${b('sigside', st.sig ? 'shiro' : 'aka')}</div>` : ''}</div>
      ${st.table ? `<div class="debug-panel">${paramsTable(db)}</div>` : ''}`, handler, 'overlay');
  };
  const handler = (act) => {
    if (act === 'exit') { scene.finish({ aborted: true }); return; }
    if (act === 'table') st.table = !st.table;
    else if (act === 'signals') st.signals = !st.signals;
    else if (act === 'sigside') st.sig = 1 - st.sig;
    else if (act.startsWith('sig:')) {
      const s = act.slice(4);
      const side = st.sig ? 'shiro' : 'aka';
      panel.corners.forEach((j) => panel.set(j.i, s, side, Math.random() * 150));
      if (WHISTLE[s]) game.audio.whistle(WHISTLE[s]);
    } else if (act === 'partner') {
      const modes = ['passive', 'block', 'attack', 'AI'];
      st.partner = modes[(modes.indexOf(st.partner) + 1) % modes.length];
      scene.ai = st.partner === 'AI'
        ? new AIController(scene.opp, scene.player, buildProfile(db, { belt: 'blue', archetype: 'tank' }, 'normal'), db)
        : new DummyController(scene.opp, scene.player, db, st.partner, { intervalMs: 1400 });
    } else if (act === 'unlock') {
      st.unlockAll = !st.unlockAll;
      scene.player.unlocked = st.unlockAll ? all : techsUpTo(db, 'blue');
      scene.player.combos = st.unlockAll ? allCombos : combosUpTo(db, 'blue');
      scene.hud.buildHints(scene.player);
    } else if (act === 'ki') scene.player.ki = 100;
    else if (act === 'boxes') game.debugBoxes = !game.debugBoxes;
    draw();
  };
  draw();
  await done;
  game.ui.clear();
}
