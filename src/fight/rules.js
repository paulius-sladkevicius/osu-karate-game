// SPDX-License-Identifier: BUSL-1.1
// Taisyklių skaičiavimai: balsų sudėjimas (≥3 iš 5), hantei kriterijai, atsikėlimo laikas, įspėjimų pavadinimai.
// Visi parametrai ateina iš data/rules.json.

// Hantei kriterijai eilės tvarka (svoriai mažėja): waza-ari, žala, efektyvios technikos, technikų skaičius, iniciatyva.
export function hanteiScore(f, W) {
  const s = W.wazaAri * f.wazaAri + W.damage * f.stats.dmg + W.effective * f.stats.effective +
    W.techniques * f.stats.techniques + W.initiative * (f.stats.initiative / 1000) - W.chui * f.chui;
  return Math.max(0, s);
}

// Vieno teisėjo balsas: 'aka' | 'shiro' | 'draw'. forced = paskutinis pratęsimas (lygiųjų nėra).
export function judgeVote(aka, shiro, R, rng, forced) {
  const noise = () => 1 + (rng() * 2 - 1) * R.judgeNoise;
  const a = hanteiScore(aka, R.hantei) * noise();
  const b = hanteiScore(shiro, R.hantei) * noise();
  const diff = aka.chui - shiro.chui;
  if (Math.abs(diff) >= R.chuiDecisiveDiff) {
    // Dviejų įspėjimų skirtumas nulemia sprendimą prieš pažeidėją, jei jis nevedė aiškiai.
    const offenderIsAka = diff > 0;
    const off = offenderIsAka ? a : b;
    const other = offenderIsAka ? b : a;
    if (off <= other * (1 + R.clearLeadMargin)) return offenderIsAka ? 'shiro' : 'aka';
  }
  const m = Math.max(a, b, 1);
  if (!forced && Math.abs(a - b) <= R.hikiwakeMargin * m) return 'draw';
  if (a === b) return rng() < 0.5 ? 'aka' : 'shiro';
  return a > b ? 'aka' : 'shiro';
}

export function tallyVotes(votes, needed) {
  const t = { aka: 0, shiro: 0, draw: 0, winner: null };
  for (const v of votes) t[v]++;
  if (t.aka >= needed) t.winner = 'aka';
  else if (t.shiro >= needed) t.winner = 'shiro';
  return t;
}

// Kiek ms kovotojas guli po partrenkimo. > knockdownCountSec → ippon, kitaip waza-ari.
export function getUpTimeMs(f, cause, G, rng) {
  const total = (f.dmg.legs + f.dmg.body + f.dmg.head) / 300;
  let ms = G.baseMs + G.perDamageMs * total + (rng() * 2 - 1) * G.randMs;
  if (cause === 'head') ms += G.headExtraMs;
  return Math.max(600, ms);
}

export function chuiCallId(total, limit) {
  return total >= limit ? 'shikkaku' : `chui_${Math.max(1, total)}`;
}

export function otherSide(side) {
  return side === 'aka' ? 'shiro' : 'aka';
}
