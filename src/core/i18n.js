// SPDX-License-Identifier: BUSL-1.1
// Vertimai: data/strings.lt.json ir data/strings.en.json.

let dict = {};
let fallback = {};
let current = 'lt';

export function setLang(db, lang) {
  current = db.strings[lang] ? lang : 'lt';
  dict = db.strings[current] || {};
  fallback = db.strings.lt || {};
  if (typeof document !== 'undefined') document.documentElement.lang = current;
}

export function lang() {
  return current;
}

export function t(key, vars) {
  let s = dict[key] ?? fallback[key] ?? key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? m));
  return s;
}

// Lokalizuotas duomenų laukas: loc(tech, 'name') → nameLt arba nameEn.
export function loc(obj, base) {
  return obj[base + (current === 'lt' ? 'Lt' : 'En')] ?? obj[`${base}Lt`] ?? '';
}

export function detectLang() {
  const l = (typeof navigator !== 'undefined' && navigator.language) || 'en';
  return l.toLowerCase().startsWith('lt') ? 'lt' : 'en';
}

export function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
