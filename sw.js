// SPDX-License-Identifier: BUSL-1.1
// Service worker: visi resursai talpykloje – po pirmo įkėlimo žaidimas veikia be interneto.
// Keičiant failus – padidinti VERSION (testas tikrina, kad ASSETS sąrašas atitiktų diską).

const VERSION = 'osu-v0.3.1';
const ASSETS = [
  './',
  'index.html',
  'styles.css',
  'manifest.webmanifest',
  'assets/icons/icon.svg',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/anim/poses.json',
  'data/techniques.json',
  'data/combos.json',
  'data/belts.json',
  'data/opponents.json',
  'data/kata.json',
  'data/rules.json',
  'data/strings.lt.json',
  'data/strings.en.json',
  'src/main.js',
  'src/core/audio.js',
  'src/core/combo.js',
  'src/core/data.js',
  'src/core/i18n.js',
  'src/core/input.js',
  'src/core/loop.js',
  'src/core/rng.js',
  'src/core/save.js',
  'src/fight/ai.js',
  'src/fight/combat.js',
  'src/fight/fightScene.js',
  'src/fight/fighter.js',
  'src/fight/judges.js',
  'src/fight/player.js',
  'src/fight/referee.js',
  'src/fight/render.js',
  'src/fight/rules.js',
  'src/fight/skeleton.js',
  'src/modes/common.js',
  'src/modes/debug.js',
  'src/modes/dojo.js',
  'src/modes/exam.js',
  'src/modes/journey.js',
  'src/modes/quickfight.js',
  'src/modes/tournament.js',
  'src/ui/hud.js',
  'src/ui/menus.js',
  'src/ui/touchControls.js',
  'src/ui/ui.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// Pirmiausia talpykla, tada tinklas; navigacijai be tinklo – index.html.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).catch(() => {
      if (e.request.mode === 'navigate') return caches.match('index.html');
      return Response.error();
    })),
  );
});
