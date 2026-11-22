// SPDX-License-Identifier: BUSL-1.1
// Žaidimo duomenų (/data/*.json) įkėlimas ir indeksai.

export const DATA_FILES = {
  techniques: 'data/techniques.json',
  combos: 'data/combos.json',
  belts: 'data/belts.json',
  opponents: 'data/opponents.json',
  kata: 'data/kata.json',
  rules: 'data/rules.json',
  anim: 'assets/anim/poses.json',
  'strings.lt': 'data/strings.lt.json',
  'strings.en': 'data/strings.en.json',
};

export function buildDb(raw) {
  const db = {
    techniques: raw.techniques.techniques,
    combos: raw.combos.combos,
    belts: raw.belts.belts,
    opponents: raw.opponents,
    kata: raw.kata.kata,
    rules: raw.rules,
    anim: raw.anim,
    strings: { lt: raw['strings.lt'] || {}, en: raw['strings.en'] || {} },
  };
  db.tech = {};
  db.beltIdx = {};
  db.belts.forEach((b, i) => { db.beltIdx[b.id] = i; });
  for (const t of db.techniques) {
    t.button = t.input[t.input.length - 1];
    db.tech[t.id] = t;
  }
  db.combo = Object.fromEntries(db.combos.map((c) => [c.id, c]));
  db.guardByLevel = {};
  for (const t of db.techniques) {
    if (t.type === 'guard' && !t.auto && !t.hold && t.input.length <= 2 && !db.guardByLevel[t.level]) db.guardByLevel[t.level] = t;
  }
  return db;
}

// Technikų id rinkinys iki nurodyto diržo imtinai.
export function techsUpTo(db, beltId) {
  const max = db.beltIdx[beltId];
  return new Set(db.techniques.filter((t) => db.beltIdx[t.belt] <= max).map((t) => t.id));
}

export function combosUpTo(db, beltId) {
  const max = db.beltIdx[beltId];
  return new Set(db.combos.filter((c) => db.beltIdx[c.belt] <= max).map((c) => c.id));
}

export async function loadData() {
  if (globalThis.__OSU_DATA__) return buildDb(globalThis.__OSU_DATA__);
  const raw = {};
  await Promise.all(Object.entries(DATA_FILES).map(async ([key, path]) => {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Nepavyko įkelti ${path}`);
    raw[key] = await res.json();
  }));
  return buildDb(raw);
}
