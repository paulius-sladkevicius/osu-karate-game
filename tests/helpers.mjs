// SPDX-License-Identifier: BUSL-1.1
// Bendri testų pagalbininkai: duomenų įkėlimas iš disko.

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { DATA_FILES, buildDb } from '../src/core/data.js';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

export function loadDb() {
  const raw = {};
  for (const [key, path] of Object.entries(DATA_FILES)) {
    const p = join(ROOT, path);
    raw[key] = existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : {};
  }
  return buildDb(raw);
}
