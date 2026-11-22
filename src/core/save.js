// SPDX-License-Identifier: BUSL-1.1
// Progreso išsaugojimas localStorage su versijuota schema.

export const SAVE_KEY = 'osu-karates-kelias';
export const SAVE_VERSION = 1;

export function defaultSave() {
  return {
    v: SAVE_VERSION,
    settings: {
      lang: null, sound: true, music: true, voice: true, vibrate: true,
      btnScale: 1, btnOpacity: 0.6, leftHanded: false, assist: true,
      difficulty: 'normal', termsTranslated: true,
    },
    beltIndex: 0,          // dabartinis diržas (0 = baltas)
    stripes: {},           // { orange: true } – antras kyu (juostelė) už laimėtą skyriaus turnyrą
    learned: [],           // išmoktų technikų id
    learnedCombos: [],     // išmoktų kombinacijų id
    trophies: [],          // laimėtų turnyrų id
    exams: {},             // { orange: { best: 0.82, passed: true } }
    stats: { fights: 0, wins: 0 },
  };
}

function migrate(data) {
  const base = defaultSave();
  if (!data || typeof data !== 'object') return base;
  // v0 → v1 ir būsimos migracijos: trūkstami laukai užpildomi numatytaisiais.
  const out = { ...base, ...data, v: SAVE_VERSION };
  out.settings = { ...base.settings, ...(data.settings || {}) };
  out.stats = { ...base.stats, ...(data.stats || {}) };
  for (const k of ['learned', 'learnedCombos', 'trophies']) if (!Array.isArray(out[k])) out[k] = [];
  return out;
}

export class Save {
  constructor(storage) {
    this.storage = storage || (typeof localStorage !== 'undefined' ? localStorage : null);
    this.data = defaultSave();
  }

  load() {
    try {
      const raw = this.storage && this.storage.getItem(SAVE_KEY);
      this.data = migrate(raw ? JSON.parse(raw) : null);
    } catch (e) {
      this.data = defaultSave();
    }
    return this.data;
  }

  write() {
    try {
      if (this.storage) this.storage.setItem(SAVE_KEY, JSON.stringify(this.data));
    } catch (e) { /* privatus režimas ar pilna saugykla – žaidimas tęsiasi be išsaugojimo */ }
  }

  reset() {
    const settings = this.data.settings;
    this.data = defaultSave();
    this.data.settings = settings;
    this.write();
  }

  learn(id, combo) {
    const list = combo ? this.data.learnedCombos : this.data.learned;
    if (!list.includes(id)) { list.push(id); this.write(); }
  }
}
