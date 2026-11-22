// SPDX-License-Identifier: BUSL-1.1
// Naršyklės (Playwright + Chromium) testas pagal MVP priėmimo kriterijus. Neprivalomas – `npm test` jo nereikalauja.
//
//   node tools/e2e.mjs          – greitas patikrinimas (~1–2 min)
//   node tools/e2e.mjs --full   – visa kelionė: baltas → oranžinis → mėlynas diržas (pamokos, egzaminai, turnyras)

import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FULL = process.argv.includes('--full');
let chromium;
try { ({ chromium } = await import('playwright')); } catch (e) {
  ({ chromium } = createRequire(process.env.PLAYWRIGHT_PATH || '/opt/')('playwright'));
}

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.css': 'text/css',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' };
const server = http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p.endsWith('/')) p += 'index.html';
    const body = await readFile(join(ROOT, p));
    res.writeHead(200, { 'content-type': MIME[extname(p)] || 'application/octet-stream' });
    res.end(body);
  } catch (e) { res.writeHead(404); res.end('not found'); }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const BASE = `http://127.0.0.1:${server.address().port}/`;

let failed = 0;
const ok = (cond, name, extra = '') => { console.log(`${cond ? '  ok  ' : 'FAIL  '}${name}${extra ? ` – ${extra}` : ''}`); if (!cond) failed++; };

// Pagalbininkai naršyklės pusėje: įvestis per tą pačią eilę, kurią naudoja lietimo valdikliai ir klaviatūra.
const HELPERS = () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const G = () => window.__game;
  const T = {
    sleep,
    async dirs(list) {
      let prev = null;
      for (const d of list) {
        if (d === prev) { G().input.setDir('N'); await sleep(40); }
        G().input.setDir(d);
        await sleep(45);
        prev = d;
      }
    },
    async perform(input, hold = 60) {
      await T.dirs(input.slice(0, -1));
      G().input.button(input[input.length - 1], true);
      await sleep(hold);
      G().input.button(input[input.length - 1], false);
      G().input.setDir('N');
    },
    async idle() { for (let i = 0; i < 400 && G().scene && !['idle', 'walk'].includes(G().scene.player.state); i++) await sleep(16); await sleep(30); },
    // Technikų grandinė (renzoku): kita technika suvedama ankstesnės pabaigos lange.
    async chain(ids) {
      const db = G().db;
      for (let i = 0; i < ids.length; i++) {
        const input = db.tech[ids[i]].input;
        await T.dirs(input.slice(0, -1));
        if (i > 0) {
          const p = G().scene.player;
          for (let n = 0; n < 400; n++) {
            const X = p.tech;
            if (!X) break;
            if (X.phase === 'recovery' && (X.dur.s + X.dur.a + X.t) / (X.dur.s + X.dur.a + X.dur.r) >= 0.76) break;
            await sleep(6);
          }
        }
        G().input.button(input[input.length - 1], true);
        await sleep(40);
        G().input.button(input[input.length - 1], false);
        G().input.setDir('N');
      }
    },
    // Atlieka visą pamoką pagal jos tipą.
    async lesson() {
      const sc = G().scene;
      const dir = sc.director;
      const d = dir.item.def;
      const db = G().db;
      const p = sc.player;
      const o = sc.opp;
      for (let guard = 0; guard < 60 && G().scene === sc && dir.doneT == null; guard++) {
        await T.idle();
        if (dir.item.kind === 'combo') {
          if (d.sequence[0] === '@block') {
            for (let n = 0; n < 500 && !(o.tech && o.tech.phase === 'startup'); n++) await sleep(10);
            G().input.button('G', true);
            for (let n = 0; n < 200 && p.counterT <= 0; n++) await sleep(8);
            G().input.button('G', false);
            await T.perform(db.tech[d.sequence[1]].input, 40);
          } else {
            if (!o.hidden) { p.x = 560; o.x = 660; }
            await T.chain(d.sequence);
          }
          await T.idle();
          await sleep(450);   // pauzė, kad prasidėtų nauja grandinė
        } else if (d.auto) {
          G().input.setDir('D');
          G().input.button('G', true);
          for (let n = 0; n < 2500 && dir.doneT == null; n++) await sleep(10);
          G().input.button('G', false);
          G().input.setDir('N');
        } else if (d.hold) {
          G().input.button('G', true);
          await sleep(420);
          G().input.button('G', false);
          await sleep(120);
        } else {
          if (!o.hidden) { p.x = 560; o.x = 660; }
          await T.perform(d.input, d.type === 'guard' ? 90 : 50);
          await sleep(d.type === 'guard' ? 120 : 60);
        }
      }
      for (let n = 0; n < 400 && G().scene === sc; n++) await sleep(16);
      return dir.count;
    },
    async kihon() {
      const sc = G().scene;
      const dir = sc.director;
      let seenHints = sc.hud.hints.length > 0 || sc.showTrail || dir.hints;
      const names = [];
      while (G().scene === sc) {
        if (dir.state === 'call') {
          const tech = dir.list[dir.i];
          names.push(tech.name);
          await T.idle();
          await T.perform(tech.input, 70);
          for (let n = 0; n < 200 && dir.state === 'call'; n++) await sleep(10);
        }
        seenHints = seenHints || sc.hud.hints.length > 0 || sc.showTrail || dir.hints;
        await sleep(20);
      }
      return { correct: dir.correct, total: dir.list.length, seenHints, names, hints: dir.hints };
    },
    async kata() {
      const sc = G().scene;
      const dir = sc.director;
      for (const s of dir.steps) {
        const input = G().db.tech[s.id].input;
        const lead = (input.length - 1) * 45 + 20;
        while (G().scene === sc && dir.time < s.t - lead) await sleep(5);
        if (G().scene !== sc) break;
        await T.perform(input, 80);
      }
      while (G().scene === sc) await sleep(30);
      return dir.counts;
    },
    // Kumite kova: nusilenkimai per REI, tada greita pergalė (varžovo liemens žala 99,9 → smūgis → neatsikelia).
    async fight(win = true) {
      const sc = G().scene;
      const off = sc.official;
      const seen = { states: new Set(), banner: null, rei: 0, calls: [] };
      const origCall = sc.hud.call.bind(sc.hud);
      sc.hud.call = (text, sub, ms) => { seen.calls.push(text); origCall(text, sub, ms); };
      while (G().scene === sc) {
        seen.states.add(off.state);
        if (document.querySelector('.tc-rei').style.display === 'block' && !off.bowed[sc.pi]) { G().input.pressRei(); seen.rei++; }
        if (off.state === 'FIGHTING') {
          const a = win ? sc.player : sc.opp;
          const b = win ? sc.opp : sc.player;
          if (win) {
            sc.ai = null;
            b.dmg.body = 99.9;
            a.x = 600; b.x = 600 + 100 * (a.side === 'aka' ? 1 : -1);
            await sleep(60);
            await T.perform(['A'], 40);
            await sleep(200);
            if (b.down) b.down.getUpAt = 99999;
          } else {
            a.dmg.body = 99.9;
          }
        }
        if (off.state === 'CEREMONY' && sc.hud.banner) {
          seen.banner = sc.hud.banner;
          seen.flags = off.judges.corners.map((j) => `${j.signal}:${j.side}`);
          seen.gesture = off.shushin.gesture;
        }
        await sleep(40);
      }
      return { banner: seen.banner, flags: seen.flags, gesture: seen.gesture, rei: seen.rei, states: [...seen.states], calls: seen.calls };
    },
  };
  window.__t = T;
};

async function newPage(browser, opts = {}) {
  const { realFullscreen, standalone, ...ctxOpts } = opts;
  const ctx = await browser.newContext({ viewport: { width: 844, height: 390 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2, locale: 'lt-LT', ...ctxOpts });
  const page = await ctx.newPage();
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(`${e.message}\n${e.stack}`));
  page.on('console', (m) => { if (m.type() === 'error' && !/vibrate|favicon/.test(m.text())) page.errors.push(m.text()); });
  if (!opts.realFullscreen) {
    await page.addInitScript(() => {
      window.__fs = 0;
      Element.prototype.requestFullscreen = function () { window.__fs++; return Promise.resolve(); };
    });
  } else {
    // Tikras Fullscreen API; tik suskaičiuojame orientacijos užrakinimo bandymus.
    await page.addInitScript((standalone) => {
      window.__lock = [];
      try {
        const orig = screen.orientation.lock ? screen.orientation.lock.bind(screen.orientation) : null;
        screen.orientation.lock = (o) => { window.__lock.push(o); return orig ? orig(o).catch(() => {}) : Promise.resolve(); };
      } catch (e) { /* nepalaikoma */ }
      if (standalone) Object.defineProperty(navigator, 'standalone', { get: () => true });
    }, !!opts.standalone);
  }
  await page.addInitScript(HELPERS);
  return { ctx, page };
}
const tap = async (page, sel) => { await page.waitForSelector(sel, { timeout: 15000 }); await page.tap(sel); await page.waitForTimeout(150); };
const scene = (page) => page.waitForFunction(() => window.__game && window.__game.scene, null, { timeout: 15000 });
const noScene = (page, ms = 120000) => page.waitForFunction(() => window.__game && !window.__game.scene, null, { timeout: ms });

const browser = await chromium.launch();
try {
  // ---------- 0. Įrenginių emuliacija: visas ekranas horizontaliai ----------
  console.log('\n[0] Įrenginių emuliacija (Chromium su įrenginio ekranu, lietimu ir UA): visas ekranas');
  {
    const { devices } = await import('playwright').catch(() => createRequire(process.env.PLAYWRIGHT_PATH || '/opt/')('playwright'));
    const fills = () => {
      const c = document.getElementById('game').getBoundingClientRect();
      return { w: Math.round(c.width), h: Math.round(c.height), vw: innerWidth, vh: innerHeight, landscape: innerWidth > innerHeight,
        fits: Math.abs(c.width - innerWidth) <= 1 || Math.abs(c.height - innerHeight) <= 1, fs: !!document.fullscreenElement, lock: window.__lock };
    };
    for (const name of ['Pixel 7 landscape', 'Galaxy S9+ landscape', 'iPad (gen 7) landscape', 'iPad Pro 11 landscape']) {
      const { ctx, page } = await newPage(browser, { ...devices[name], locale: 'lt-LT', realFullscreen: true });
      await page.goto(BASE);
      await tap(page, '[data-act=start]');
      await page.waitForTimeout(400);
      const r = await page.evaluate(fills);
      ok(r.fs && r.landscape && r.fits, `${name}: po vieno bakstelėjimo – pilno ekrano režimas, horizontaliai, canvas užpildo ekraną`, JSON.stringify(r));
      ok(r.lock && r.lock.includes('landscape'), `${name}: užrakinama horizontali orientacija`);
      // Išėjimas iš pilno ekrano ir grįžimas mygtuku pagrindiniame meniu.
      await page.waitForSelector('[data-act=fs]');
      const lbl = () => page.evaluate(() => document.querySelector('[data-act=fs]').textContent);
      const l1 = await lbl();
      await tap(page, '[data-act=fs]');
      await page.waitForTimeout(350);
      const out = await page.evaluate(fills);
      const l2 = await lbl();
      await tap(page, '[data-act=fs]');
      await page.waitForTimeout(350);
      const back = await page.evaluate(fills);
      ok(!out.fs && out.fits && back.fs && back.fits && /Išeiti/.test(l1) && !/Išeiti/.test(l2), `${name}: mygtuku išeinama iš viso ekrano ir grįžtama`, `${l1} → ${l2}`);
      ok(page.errors.length === 0, `${name}: be klaidų`, page.errors.join(' | '));
      await ctx.close();
    }
    {
      // iPhone naršyklėje: Fullscreen API nėra – rodoma instrukcija „Pridėti prie pradinio ekrano“.
      const { ctx, page } = await newPage(browser, { ...devices['iPhone 14 landscape'], locale: 'lt-LT', realFullscreen: true });
      await page.addInitScript(() => { delete Element.prototype.requestFullscreen; delete Element.prototype.webkitRequestFullscreen; });
      await page.goto(BASE);
      await page.waitForSelector('[data-act=start]');
      ok(await page.evaluate(() => /Pridėti prie pradinio ekrano/.test(document.getElementById('ui').textContent)), 'iPhone (naršyklė): rodoma instrukcija „Pridėti prie pradinio ekrano“');
      await tap(page, '[data-act=start]');
      await page.waitForSelector('[data-act=quick]');
      ok(page.errors.length === 0, 'iPhone (naršyklė): be Fullscreen API žaidimas vis tiek pasileidžia', page.errors.join(' | '));
      const meta = await page.evaluate(async () => ({
        capable: document.querySelector('meta[name=apple-mobile-web-app-capable]').content,
        icon: !!document.querySelector('link[rel=apple-touch-icon]'),
        man: await (await fetch(document.querySelector('link[rel=manifest]').href)).json(),
      }));
      ok(meta.capable === 'yes' && meta.icon && meta.man.display === 'fullscreen' && meta.man.orientation === 'landscape', 'iPhone: PWA manifestas (display: fullscreen, orientation: landscape) ir apple meta žymos');
      await ctx.close();
    }
    {
      // iPhone, paleistas iš pradinio ekrano (standalone): instrukcijos nebėra, canvas užpildo ekraną.
      const { ctx, page } = await newPage(browser, { ...devices['iPhone 14 landscape'], locale: 'lt-LT', realFullscreen: true, standalone: true });
      await page.goto(BASE);
      await page.waitForSelector('[data-act=start]');
      const hint = await page.evaluate(() => /Pridėti prie pradinio ekrano/.test(document.getElementById('ui').textContent));
      const r = await page.evaluate(fills);
      ok(!hint && r.fits && r.landscape, 'iPhone (iš pradinio ekrano): žaidimas užpildo ekraną horizontaliai', JSON.stringify(r));
      await ctx.close();
    }
    {
      const { ctx, page } = await newPage(browser, { ...devices['Pixel 7'], locale: 'lt-LT' });
      await page.goto(BASE);
      await page.waitForSelector('[data-act=start]');
      ok(await page.evaluate(() => getComputedStyle(document.getElementById('rotate')).display === 'flex' && /Pasukite/.test(document.getElementById('rotate').textContent)), 'vertikaliai laikomas telefonas: užrašas „Pasukite įrenginį“');
      await ctx.close();
    }
  }

  // ---------- 1. Paleidimas atidarius index.html (file://) ----------
  console.log('\n[1] index.html iš disko (file://)');
  {
    const { ctx, page } = await newPage(browser);
    await page.goto(pathToFileURL(join(ROOT, 'index.html')).href);
    await tap(page, '[data-act=start]');
    ok(await page.evaluate(() => window.__fs) >= 1, 'po vieno bakstelėjimo prašoma pilno ekrano režimo');
    ok(await page.evaluate(() => !!window.__game.audio.ctx), 'pirmu bakstelėjimu atrakinamas garsas');
    await page.waitForSelector('[data-act=quick]');
    ok(true, 'pagrindinis meniu rodomas');
    await tap(page, '[data-act=quick]');
    await tap(page, '[data-act=go]');
    await scene(page);
    ok(await page.evaluate(() => getComputedStyle(document.getElementById('touch')).display === 'block'), 'kovos ekrane rodomi lietimo valdikliai');
    const sizes = await page.evaluate(() => [...document.querySelectorAll('.tc-btn')].map((b) => { const r = b.getBoundingClientRect(); return [b.dataset.btn, r.width, r.height, r.x + r.width / 2, r.y + r.height / 2]; }));
    ok(sizes.filter((s) => s[0] !== 'KIAI').every((s) => s[1] >= 64 && s[2] >= 64), 'mygtukai A / K / G ≥ 64×64 CSS px', JSON.stringify(sizes.map((s) => [s[0], s[1]])));
    const main = sizes.filter((s) => s[0] !== 'KIAI');
    let minGap = 1e9;
    for (let i = 0; i < main.length; i++) for (let j = i + 1; j < main.length; j++) minGap = Math.min(minGap, Math.hypot(main[i][3] - main[j][3], main[i][4] - main[j][4]) - main[i][1] / 2 - main[j][1] / 2);
    ok(minGap >= 12, 'tarpai tarp mygtukų ≥ 12 px', minGap.toFixed(1));
    // Kova pradedama: nusilenkimai
    await page.evaluate(async () => { const sc = __game.scene; while (sc.official.state !== 'FIGHTING') { if (document.querySelector('.tc-rei').style.display === 'block') __game.input.pressRei(); await __t.sleep(50); } sc.ai = null; });
    // Multi-touch: džoistikas (1 pirštas) + mygtukas A (2 pirštas) vienu metu
    const cdp = await ctx.newCDPSession(page);
    const A = sizes.find((s) => s[0] === 'A');
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 150, y: 250, id: 0 }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: 214, y: 250, id: 0 }] });
    await page.waitForTimeout(120);
    const stick = await page.evaluate(() => ({ dir: __game.input.dir, shown: document.querySelector('.tc-stick').style.display, left: document.querySelector('.tc-stick').style.left }));
    ok(stick.dir === 'F' && stick.shown === 'block' && stick.left === '150px', 'plaukiojantis džoistikas atsiranda palietimo vietoje', JSON.stringify(stick));
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 214, y: 250, id: 0 }, { x: A[3], y: A[4], id: 1 }] });
    await page.waitForTimeout(80);
    const both = await page.evaluate(() => ({ dir: __game.input.dir, a: __game.input.held.A, tech: __game.scene.player.tech && __game.scene.player.tech.def.id }));
    ok(both.dir === 'F' && both.a && both.tech === 'seiken_oi_tsuki', 'džoistikas ir mygtukas veikia vienu metu (→A = Oi tsuki)', JSON.stringify(both));
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [{ x: 214, y: 250, id: 0 }] });
    await page.waitForTimeout(50);
    ok(await page.evaluate(() => __game.input.dir === 'N' && __game.input.held.A), 'atleidus džoistiką mygtukas lieka nuspaustas');
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    // Įvestis neprarandama: paspaudimas ir atleidimas tame pačiame kadre
    const lost = await page.evaluate(async () => {
      const sc = __game.scene;
      let done = 0;
      for (let i = 0; i < 20; i++) {
        await __t.idle();
        if (sc.official.state !== 'FIGHTING') { i--; await __t.sleep(100); continue; }
        sc.player.stamina = 100; sc.player.passive = 0; sc.opp.passive = 0; sc.player.x = 400; sc.opp.x = 800;
        const before = sc.player.stats.techniques;
        __game.input.setDir('D'); __game.input.button('K', true); __game.input.button('K', false); __game.input.setDir('N');
        await __t.sleep(80);
        if (sc.player.stats.techniques === before + 1) done++;
      }
      return done;
    });
    ok(lost === 20, 'tame pačiame kadre paspausta ir atleista įvestis neprarandama (20 iš 20)', String(lost));
    await page.screenshot({ path: join(ROOT, 'dist/e2e-fight.png') }).catch(() => {});
    ok(page.errors.length === 0, 'be klaidų konsolėje', page.errors.join(' | '));
    await ctx.close();
  }

  // ---------- 2. http: moduliai, pamoka, išsaugojimas, be interneto ----------
  console.log('\n[2] http: ES moduliai, progreso išsaugojimas, veikimas be interneto');
  const { ctx, page } = await newPage(browser);
  await page.goto(BASE);
  await tap(page, '[data-act=start]');
  await tap(page, '[data-act=journey]');
  await tap(page, '[data-act=lessons]');
  await tap(page, '[data-act="tech:seiken_gyaku_tsuki"]');
  await scene(page);
  const reps = await page.evaluate(() => __t.lesson());
  ok(reps === 5, 'pamoka: 5 kartai iš eilės → technika išmokta', String(reps));
  await page.reload();
  await tap(page, '[data-act=start]');
  ok(await page.evaluate(() => __game.save.data.learned.includes('seiken_gyaku_tsuki')), 'progresas išlieka perkrovus puslapį (localStorage)');
  const sw = await page.evaluate(async () => { const r = await navigator.serviceWorker.ready; await new Promise((res) => setTimeout(res, 800)); return !!r.active && (await caches.keys()).length; });
  ok(sw >= 1, 'service worker aktyvus, resursai talpykloje');
  await ctx.setOffline(true);
  await page.reload();
  await tap(page, '[data-act=start]');
  await tap(page, '[data-act=quick]');
  await tap(page, '[data-act=go]');
  await scene(page);
  ok(await page.evaluate(() => __game.db.techniques.length > 20 && __game.save.data.learned.includes('seiken_gyaku_tsuki')), 'be interneto: žaidimas pasileidžia, duomenys ir progresas vietoje');
  await ctx.setOffline(false);

  // ---------- 3. Kova: ceremonija ----------
  console.log('\n[3] Kova ir pergalės ceremonija');
  const f = await page.evaluate(() => __t.fight(true));
  ok(f.rei >= 4, 'REI: nusilenkimai prieš kovą ir po jos', String(f.rei));
  ok(f.banner && /^\d:\d /.test(f.banner.votes), 'ceremonijoje matomas balsų santykis', f.banner && f.banner.votes);
  ok(f.banner && /no kachi/i.test(f.banner.title) && f.gesture === f.banner.side, 'vyr. teisėjas skelbia „Aka/Shiro no kachi“ ir rodo į nugalėtoją', f.banner && f.banner.title);
  ok(f.flags && f.flags.filter((x) => x === `hantei:${f.banner.side}`).length >= 3, 'kampiniai teisėjai pakelia nugalėtojo vėliavėles', JSON.stringify(f.flags));
  ok(['KNOCKDOWN_COUNT', 'SCORE', 'CEREMONY', 'FINAL_BOW'].every((s) => f.states.includes(s)), 'knockdown → 3 s skaičiavimas → ippon → ceremonija');
  await tap(page, '[data-act=back]');
  await tap(page, '[data-act=back]');

  // ---------- 4. Kalba, nustatymai, derinimo ekranas ----------
  console.log('\n[4] Kalbos, nustatymai, derinimo ekranas');
  await tap(page, '[data-act=settings]');
  await tap(page, '[data-act="set:lang:en"]');
  ok(await page.evaluate(() => document.querySelector('#ui h2').textContent === 'Settings'), 'kalba perjungiama į anglų');
  await page.evaluate(() => { const el = document.querySelector('[data-set=leftHanded]'); el.checked = true; el.dispatchEvent(new Event('input', { bubbles: true })); });
  ok(await page.evaluate(() => document.querySelector('.tc-a').style.left !== 'auto' && document.querySelector('.tc-a').style.right === 'auto'), 'kairiarankio režimas sukeičia zonas');
  await page.evaluate(() => { const el = document.querySelector('[data-set=leftHanded]'); el.checked = false; el.dispatchEvent(new Event('input', { bubbles: true })); });
  await tap(page, '[data-act="set:lang:lt"]');
  await tap(page, '[data-act=back]');
  await tap(page, '[data-act=debug]');
  await scene(page);
  await tap(page, '[data-act=table]');
  const rows = await page.evaluate(() => document.querySelectorAll('table.params tbody tr').length);
  ok(rows === await page.evaluate(() => __game.db.techniques.length), 'derinimo ekranas: technikų parametrų lentelė', String(rows));
  ok(await page.evaluate(() => __game.scene.debug === true), 'derinimo ekranas: hitbox\'ų sluoksnis įjungtas');
  await tap(page, '[data-act=table]');
  await tap(page, '[data-act=signals]');
  await tap(page, '[data-act="sig:hikiwake"]');
  ok(await page.evaluate(() => __game.scene.judgesPreview.corners.every((j) => j.signal === 'hikiwake')), 'derinimo ekranas: vėliavėlių signalų peržiūra');
  await page.screenshot({ path: join(ROOT, 'dist/e2e-debug.png') }).catch(() => {});
  await tap(page, '[data-act=signals]');
  // KIAI mygtukas: aktyvus tik kai pilna ki juosta (technika atrakinama juodu diržu – čia per „Atrakinti viską“).
  ok(await page.evaluate(() => !document.querySelector('.tc-kiai').classList.contains('ready')), 'KIAI mygtukas neaktyvus, kol ki juosta nepilna');
  await tap(page, '[data-act=unlock]');
  await tap(page, '[data-act=ki]');
  await page.waitForTimeout(150);
  ok(await page.evaluate(() => document.querySelector('.tc-kiai').classList.contains('ready')), 'KIAI mygtukas įsižiebia, kai ki juosta pilna');
  await page.tap('.tc-kiai');
  await page.waitForTimeout(150);
  ok(await page.evaluate(() => __game.scene.player.kiaiT > 4000 && __game.scene.player.ki === 0), 'KIAI režimas įsijungia 5 s');
  await tap(page, '[data-act=exit]');
  await noScene(page);

  // ---------- 5. Egzamino kihon: japoniškas pavadinimas, be užuominų ----------
  console.log('\n[5] Egzaminas');
  const learnChapter = async (i) => {
    for (;;) {
      const next = await page.evaluate(() => { const b = document.querySelector('#ui .item:not(.done) button:not([disabled])'); return b ? b.dataset.act : null; });
      if (!next || next === 'back') break;
      await tap(page, `[data-act="${next}"]`);
      await scene(page);
      const t0 = Date.now();
      const count = await page.evaluate(() => __t.lesson());
      const learned = await page.evaluate(() => !window.__game.scene);
      console.log(`        pamoka ${next}: ${learned ? 'išmokta' : `NEBAIGTA (${count})`} per ${((Date.now() - t0) / 1000).toFixed(1)} s`);
      if (!learned) { await page.evaluate(() => window.__game.scene.finish({ aborted: true })); failed++; return -1; }
      await noScene(page);
      await page.waitForSelector('#ui .item');
    }
    return page.evaluate(() => document.querySelectorAll('#ui .item:not(.done)').length);
  };
  if (!FULL) {
    // Greitas kelias: pamokos pažymimos išmoktomis tiesiai išsaugojime.
    await page.evaluate(() => {
      const g = __game; const s = g.save.data;
      for (const b of ['white', 'orange']) {
        s.learned.push(...g.db.techniques.filter((x) => x.belt === b && !s.learned.includes(x.id)).map((x) => x.id));
        s.learnedCombos.push(...g.db.combos.filter((c) => c.belt === b).map((c) => c.id));
      }
      g.save.write();
    });
    ok(await page.evaluate(() => __game.settings.kihonHints === true), 'nustatymas „Kihon užuominos“ pagal nutylėjimą įjungtas');
    // Su užuominomis: po pavadinimu rodoma įvestis; išėjus iš egzamino – išjungiama ir tikrinamas griežtas variantas.
    await tap(page, '[data-act=journey]');
    await tap(page, '[data-act="sel:1"]');
    await tap(page, '[data-act=exam]');
    await tap(page, '[data-act=go]');
    await scene(page);
    await page.waitForFunction(() => __game.scene.director.state === 'call');
    ok(await page.evaluate(() => __game.scene.director.hints === true), 'kihon su užuominomis: rodoma, ką suvesti');
    await page.screenshot({ path: join(ROOT, 'dist/e2e-kihon-hints.png') }).catch(() => {});
    await page.evaluate(() => __game.scene.finish({ aborted: true }));
    await page.waitForSelector('[data-act=exam]');
    await page.evaluate(() => { __game.settings.kihonHints = false; __game.save.write(); });
    await tap(page, '[data-act=exam]');
    await tap(page, '[data-act=go]');
    await scene(page);
    const k = await page.evaluate(() => __t.kihon());
    ok(k.total === 12 && k.correct === k.total, 'kihon: visos komandos įvykdytos per 2 s', `${k.correct}/${k.total}`);
    ok(!k.seenHints, 'kihon: užuominų ir įvesties pėdsako nėra');
    ok(k.names.every((n) => /^[A-Z][a-z]/.test(n)) && new Set(k.names).size >= 8, 'kihon: sensei šaukia japoniškus pavadinimus', k.names.slice(0, 4).join(', '));
    await tap(page, '[data-act=go]');
    await scene(page);
    const kata = await page.evaluate(() => __t.kata());
    ok(kata.perfect + kata.good >= 18, 'kata: ritmo užduotis įvykdoma', JSON.stringify(kata));
    await tap(page, '[data-act=go]');
    await scene(page);
    const ex = await page.evaluate(() => __t.fight(true));
    ok(!!ex.banner, 'egzamino kumite kova');
    await tap(page, '[data-act=go]');
    await page.waitForSelector('.title-logo');
    ok(await page.evaluate(() => __game.save.data.beltIndex === 1), 'išlaikius egzaminą – oranžinis diržas');
    await tap(page, '[data-act=go]');
  } else {
    await page.evaluate(() => { __game.settings.kihonHints = false; __game.save.write(); });
    await tap(page, '[data-act=journey]');
    for (const chapter of [0, 1, 2]) {
      await tap(page, `[data-act="sel:${chapter}"]`);
      await tap(page, '[data-act=lessons]');
      const left = await learnChapter(chapter);
      ok(left === 0, `skyrius ${chapter + 1}: visos pamokos išmoktos`);
      await tap(page, '[data-act=back]');
      if (chapter > 0) {
        await tap(page, `[data-act="sel:${chapter}"]`);
        await tap(page, '[data-act=exam]');
        await tap(page, '[data-act=go]');
        await scene(page);
        const k = await page.evaluate(() => __t.kihon());
        ok(k.correct === k.total && !k.seenHints, `egzaminas ${chapter}: kihon be užuominų`, `${k.correct}/${k.total}`);
        await tap(page, '[data-act=go]');
        await scene(page);
        const kata = await page.evaluate(() => __t.kata());
        ok(kata.perfect + kata.good >= 18, `egzaminas ${chapter}: kata`, JSON.stringify(kata));
        await tap(page, '[data-act=go]');
        const fights = await page.evaluate(() => __game.db.belts[__game.save.data.beltIndex + 1].exam.kumite);
        for (let i = 0; i < fights; i++) {
          await scene(page);
          await page.evaluate(() => __t.fight(true));
          await tap(page, '[data-act=go]');
        }
        await page.waitForSelector('.title-logo');
        ok(await page.evaluate((c) => __game.save.data.beltIndex === c, chapter), `egzaminas ${chapter}: naujas diržas`);
        await tap(page, '[data-act=go]');
      }
      // Skyriaus turnyras
      await tap(page, `[data-act="sel:${chapter}"]`);
      await tap(page, '[data-act=tour]');
      const rounds = chapter === 0 ? 3 : chapter === 1 ? 2 : 3;
      for (let i = 0; i < rounds; i++) {
        await tap(page, '[data-act=go]');
        await scene(page);
        await page.evaluate(() => __t.fight(true));
        await tap(page, '[data-act=go]');
      }
      await page.waitForSelector('svg');
      ok(await page.evaluate(() => __game.save.data.trophies.length), `skyrius ${chapter + 1}: turnyras laimėtas`, String(await page.evaluate(() => __game.save.data.trophies.join(','))));
      await tap(page, '[data-act=go]');
    }
    ok(await page.evaluate(() => __game.save.data.beltIndex === 2 && __game.save.data.trophies.length === 3), 'visa MVP kelionė: mėlynas diržas ir 3 turnyrai');
  }
  ok(page.errors.length === 0, 'be klaidų konsolėje', page.errors.join(' | '));
  await ctx.close();
} catch (e) {
  failed++;
  console.log(`FAIL  išimtis: ${e.stack || e}`);
} finally {
  await browser.close();
  server.close();
}
console.log(failed ? `\n${failed} nesėkmės` : '\nVisi naršyklės patikrinimai sėkmingi');
process.exit(failed ? 1 : 0);
