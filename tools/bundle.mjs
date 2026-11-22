// SPDX-License-Identifier: BUSL-1.1
// Sugeneruoja dist/game.bundle.js – vieną klasikinį skriptą su visais src/ moduliais ir /data JSON failais,
// kad žaidimą būtų galima paleisti atidarius index.html tiesiai iš disko (file://), kur ES moduliai ir fetch neveikia.
// Be priklausomybių. Šaltiniuose naudojama tik `import { a, b as c } from './x.js';` ir `export function|class|const`.
//
//   node tools/bundle.mjs           – sugeneruoti
//   node tools/bundle.mjs --check   – patikrinti, ar rinkinys atitinka šaltinius (naudoja testai)

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DATA_FILES } from '../src/core/data.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ENTRY = 'src/main.js';
const OUT = join(ROOT, 'dist/game.bundle.js');

export function buildBundle() {
  const modules = new Map();
  const visit = (id) => {
    if (modules.has(id)) return;
    modules.set(id, null);
    let code = readFileSync(join(ROOT, id), 'utf8');
    const exports = [];
    code = code.replace(/^import\s*\{([^}]*)\}\s*from\s*'([^']+)';?\s*$/gm, (m, names, spec) => {
      const dep = posix.normalize(posix.join(posix.dirname(id), spec));
      visit(dep);
      const list = names.split(',').map((s) => s.trim()).filter(Boolean).map((s) => s.replace(/\s+as\s+/, ': '));
      return `const { ${list.join(', ')} } = __req('${dep}');`;
    });
    if (/^\s*import\s/m.test(code)) throw new Error(`Nepalaikoma import forma faile ${id}`);
    code = code.replace(/^export\s+(async\s+function|function\*?|class|const|let)\s+([A-Za-z0-9_$]+)/gm, (m, kind, name) => {
      exports.push(name);
      return `${kind} ${name}`;
    });
    if (/^\s*export\s/m.test(code)) throw new Error(`Nepalaikoma export forma faile ${id}`);
    modules.set(id, `__def('${id}', function (__exp, __req) {\n${code}\n${exports.map((n) => `__exp.${n} = ${n};`).join('\n')}\n});`);
  };
  visit(ENTRY);
  const data = {};
  for (const [key, path] of Object.entries(DATA_FILES)) data[key] = JSON.parse(readFileSync(join(ROOT, path), 'utf8'));
  return `// SPDX-License-Identifier: BUSL-1.1
// SUGENERUOTA – neredaguoti. Šaltinis: src/ ir data/. Generuoti: node tools/bundle.mjs
(function () {
'use strict';
var __mods = {}, __cache = {};
function __def(id, fn) { __mods[id] = fn; }
function __req(id) {
  if (__cache[id]) return __cache[id];
  var exp = __cache[id] = {};
  __mods[id](exp, __req);
  return exp;
}
globalThis.__OSU_DATA__ = ${JSON.stringify(data)};
${[...modules.values()].join('\n')}
__req('${ENTRY}');
})();
`;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const out = buildBundle();
  if (process.argv.includes('--check')) {
    let cur = '';
    try { cur = readFileSync(OUT, 'utf8'); } catch (e) { /* nėra */ }
    if (cur !== out) { console.error('dist/game.bundle.js pasenęs – paleiskite: node tools/bundle.mjs'); process.exit(1); }
    console.log('dist/game.bundle.js atitinka šaltinius');
  } else {
    mkdirSync(dirname(OUT), { recursive: true });
    writeFileSync(OUT, out);
    console.log(`dist/game.bundle.js: ${(out.length / 1024).toFixed(0)} KB`);
  }
}
