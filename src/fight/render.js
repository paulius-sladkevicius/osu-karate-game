// SPDX-License-Identifier: BUSL-1.1
// Scenos piešimas: fonas, tatamis lengva perspektyva, kampiniai teisėjai su vėliavėlėmis, vyr. teisėjas, dalelės.
// Visa grafika generuojama kodu (originali, be trečiųjų šalių resursų).

export const W = 1280;
export const H = 720;
const CX = 640;
const BACK_Y = 462;
const FRONT_Y = 640;

// Perspektyva: tolimasis tatamio kraštas siauresnis.
export function persp(x, y) {
  return CX + (x - CX) * (1 + (y - 540) * 0.0016);
}

function quad(ctx, x0, x1, y0, y1, fill) {
  ctx.beginPath();
  ctx.moveTo(persp(x0, y0), y0);
  ctx.lineTo(persp(x1, y0), y0);
  ctx.lineTo(persp(x1, y1), y1);
  ctx.lineTo(persp(x0, y1), y1);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
}

function drawWall(ctx, kind, rnd) {
  if (kind === 'hall' || kind === 'arena') {
    const dark = kind === 'arena';
    const g = ctx.createLinearGradient(0, 0, 0, 440);
    g.addColorStop(0, dark ? '#10131c' : '#b9c6d2');
    g.addColorStop(1, dark ? '#232838' : '#8fa0b0');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, 440);
    // Žiūrovų siluetai
    for (let row = 0; row < 4; row++) {
      const y = 250 + row * 42;
      ctx.fillStyle = dark ? `rgba(60,66,90,${0.9 - row * 0.12})` : `rgba(70,84,100,${0.55 - row * 0.08})`;
      ctx.fillRect(0, y + 12, W, 40);
      for (let x = 12 + (row % 2) * 16; x < W; x += 32) {
        ctx.beginPath();
        ctx.arc(x + rnd() * 6, y + 8 + rnd() * 5, 11, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    // Vėliavos be simbolikos
    const cols = ['#c0463b', '#f1ead8', '#2d5d9a', '#e0b23a'];
    for (let i = 0; i < 6; i++) {
      ctx.fillStyle = cols[i % cols.length];
      ctx.fillRect(140 + i * 190, 120, 70, 100);
      ctx.fillStyle = 'rgba(0,0,0,0.12)';
      ctx.fillRect(140 + i * 190, 120, 70, 8);
    }
    ctx.fillStyle = dark ? '#161a26' : '#6d7c8b';
    ctx.fillRect(0, 418, W, 22);
    ctx.fillStyle = dark ? '#1c2030' : '#a8b3bd';
    ctx.fillRect(0, 440, W, H - 440);
    return;
  }
  // Dojo: medinė siena, kaligrafijos ritiniai su išgalvotais brūkšniais.
  const g = ctx.createLinearGradient(0, 0, 0, 440);
  g.addColorStop(0, '#5a3d27');
  g.addColorStop(1, '#7a5636');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, 440);
  for (let x = 0; x < W; x += 80) {
    ctx.fillStyle = 'rgba(0,0,0,0.13)';
    ctx.fillRect(x, 0, 3, 440);
  }
  ctx.fillStyle = '#3b2616';
  ctx.fillRect(0, 96, W, 16);
  ctx.fillRect(0, 418, W, 22);
  for (const sx of [250, 640, 1030]) {
    ctx.fillStyle = '#efe6cf';
    ctx.fillRect(sx - 44, 130, 88, 230);
    ctx.fillStyle = '#3b2616';
    ctx.fillRect(sx - 50, 124, 100, 8);
    ctx.fillRect(sx - 50, 358, 100, 8);
    ctx.strokeStyle = '#1d1a18';
    ctx.lineCap = 'round';
    for (let i = 0; i < 3; i++) {
      const y = 165 + i * 62;
      ctx.lineWidth = 5 + rnd() * 4;
      ctx.beginPath();
      ctx.moveTo(sx - 22 + rnd() * 10, y);
      ctx.quadraticCurveTo(sx + rnd() * 30 - 15, y + rnd() * 40 - 10, sx + 20 - rnd() * 10, y + 30 + rnd() * 12);
      ctx.stroke();
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(sx - 16 + rnd() * 30, y - 6);
      ctx.lineTo(sx - 20 + rnd() * 34, y + 36);
      ctx.stroke();
    }
  }
  const fg = ctx.createLinearGradient(0, 440, 0, H);
  fg.addColorStop(0, '#9a7147');
  fg.addColorStop(1, '#b98a5a');
  ctx.fillStyle = fg;
  ctx.fillRect(0, 440, W, H - 440);
  ctx.strokeStyle = 'rgba(60,35,15,0.25)';
  ctx.lineWidth = 2;
  for (let y = 448; y < H; y += 26) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
}

function drawTatami(ctx, A) {
  quad(ctx, A.xMin - 78, A.xMax + 78, BACK_Y - 20, FRONT_Y + 38, '#b8443a');   // saugos juosta
  quad(ctx, A.xMin, A.xMax, BACK_Y, FRONT_Y, '#356fa3');                        // kovos zona
  ctx.strokeStyle = 'rgba(255,255,255,0.10)';
  ctx.lineWidth = 1;
  for (let i = 1; i < 8; i++) {
    const x = A.xMin + ((A.xMax - A.xMin) * i) / 8;
    ctx.beginPath(); ctx.moveTo(persp(x, BACK_Y), BACK_Y); ctx.lineTo(persp(x, FRONT_Y), FRONT_Y); ctx.stroke();
  }
  for (let i = 1; i < 4; i++) {
    const y = BACK_Y + ((FRONT_Y - BACK_Y) * i) / 4;
    ctx.beginPath(); ctx.moveTo(persp(A.xMin, y), y); ctx.lineTo(persp(A.xMax, y), y); ctx.stroke();
  }
  // Ribos linija
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(persp(A.xMin, BACK_Y), BACK_Y);
  ctx.lineTo(persp(A.xMax, BACK_Y), BACK_Y);
  ctx.lineTo(persp(A.xMax, FRONT_Y), FRONT_Y);
  ctx.lineTo(persp(A.xMin, FRONT_Y), FRONT_Y);
  ctx.closePath();
  ctx.stroke();
  // Starto linijos: Aka (raudona) kairėje, Shiro (balta) dešinėje
  ctx.lineWidth = 6;
  for (const [x, col] of [[A.startAka, '#e03127'], [A.startShiro, '#ffffff']]) {
    ctx.strokeStyle = col;
    ctx.beginPath(); ctx.moveTo(persp(x, 520), 520); ctx.lineTo(persp(x, 566), 566); ctx.stroke();
  }
}

export function makeBackground(kind, A) {
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d');
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  drawWall(ctx, kind, rnd);
  drawTatami(ctx, A);
  return c;
}

// Kampinių teisėjų vietos: 0,1 – tolimieji kampai, 2,3 – priekiniai (pusiau permatomi).
export function judgeSpots(A) {
  return [
    { x: persp(A.xMin - 48, BACK_Y - 8), y: BACK_Y - 6, s: 0.8, near: false },
    { x: persp(A.xMax + 48, BACK_Y - 8), y: BACK_Y - 6, s: 0.8, near: false },
    { x: persp(A.xMin - 52, FRONT_Y + 30), y: FRONT_Y + 44, s: 1.1, near: true },
    { x: persp(A.xMax + 52, FRONT_Y + 30), y: FRONT_Y + 44, s: 1.1, near: true },
  ];
}

const RAD = Math.PI / 180;
const FLAG = { aka: '#e03127', shiro: '#ffffff' };
const easeOut = (k) => 1 - (1 - k) * (1 - k);

// Vėliavėlės kampas (laipsniai nuo „žemyn“ į šoną) pagal signalą. Grąžina { red, white, cross, cy, wobble }.
export function flagPose(signal, side, t) {
  const rest = 18;
  const up = easeOut(Math.min(1, t / 170));
  const mix = (target) => rest + (target - rest) * up;
  const one = (target) => (side === 'shiro' ? { red: rest, white: mix(target) } : { red: mix(target), white: rest });
  switch (signal) {
    case 'ippon': case 'hantei': return one(135);
    case 'wazaari': return one(90);
    case 'wazaari_ippon': return one(90 + 45 * easeOut(Math.min(1, t / 420)));
    case 'chui': return one(50 + Math.sin(t / 70) * 14);
    case 'clinch': return { red: mix(50), white: mix(50) };
    case 'jogai': return one(20 + Math.abs(Math.sin(t / 110)) * 16);
    case 'fumei': return { cross: true, cy: -92, wobble: 0, up };
    case 'mitomezu': return { cross: true, cy: -22, wobble: Math.sin(t / 110) * 12, up };
    case 'hikiwake': return { cross: true, cy: -40, wobble: 0, up };
    default: return { red: rest, white: rest };
  }
}

function flag(ctx, hx, hy, ang, dirX, col) {
  const dx = Math.sin(ang * RAD) * dirX;
  const dy = Math.cos(ang * RAD);
  const ex = hx + dx * 46;
  const ey = hy + dy * 46;
  ctx.strokeStyle = '#3a2a1a';
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(ex, ey); ctx.stroke();
  // Audinys: stačiakampis prie koto galo
  const px = -dy * dirX;
  const py = dx * dirX;
  const sx = hx + dx * 18;
  const sy = hy + dy * 18;
  ctx.beginPath();
  ctx.moveTo(sx, sy);
  ctx.lineTo(ex, ey);
  ctx.lineTo(ex + px * 24, ey + py * 24);
  ctx.lineTo(sx + px * 24, sy + py * 24);
  ctx.closePath();
  ctx.fillStyle = col;
  ctx.fill();
  ctx.strokeStyle = '#23232b';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

export function drawCornerJudge(ctx, j, spot, alpha = 1) {
  ctx.save();
  ctx.globalAlpha = alpha * (spot.near ? 0.55 : 1);
  ctx.translate(spot.x, spot.y);
  ctx.scale(spot.s, spot.s);
  // Kėdė
  ctx.fillStyle = '#2a2a33';
  ctx.fillRect(-20, -40, 40, 8);
  ctx.fillRect(-20, -40, 5, 40);
  ctx.fillRect(15, -40, 5, 40);
  // Kojos, liemuo, galva
  ctx.fillStyle = '#20232e';
  ctx.fillRect(-16, -46, 14, 44);
  ctx.fillRect(2, -46, 14, 44);
  ctx.fillStyle = '#f4f4f1';
  ctx.beginPath();
  ctx.roundRect(-19, -98, 38, 56, 8);
  ctx.fill();
  ctx.strokeStyle = '#23232b';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#20232e';
  ctx.fillRect(-5, -98, 10, 6);
  ctx.beginPath();
  ctx.arc(0, -112, 13, 0, Math.PI * 2);
  ctx.fillStyle = '#e9bd95';
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, -114, 13, Math.PI, 0);
  ctx.fillStyle = '#3a3a40';
  ctx.fill();

  const active = j.t >= j.delay ? j.signal : 'none';
  const fp = flagPose(active, j.side, Math.max(0, j.t - j.delay));
  ctx.lineCap = 'round';
  if (fp.cross) {
    const cx = fp.wobble;
    const cy = -22 + (fp.cy + 22) * fp.up;
    for (const [sx, col, d] of [[-17, FLAG.shiro, 1], [17, FLAG.aka, -1]]) {
      ctx.strokeStyle = '#f4f4f1';
      ctx.lineWidth = 8;
      ctx.beginPath(); ctx.moveTo(sx, -90); ctx.lineTo(cx - d * 14, cy + 12); ctx.stroke();
      flag(ctx, cx - d * 14, cy + 12, 150, d, col);
    }
  } else {
    for (const [sx, ang, col, d] of [[-17, fp.white, FLAG.shiro, -1], [17, fp.red, FLAG.aka, 1]]) {
      const hx = sx + Math.sin(ang * RAD) * d * 30;
      const hy = -90 + Math.cos(ang * RAD) * 30;
      ctx.strokeStyle = '#f4f4f1';
      ctx.lineWidth = 8;
      ctx.beginPath(); ctx.moveTo(sx, -90); ctx.lineTo(hx, hy); ctx.stroke();
      flag(ctx, hx, hy, ang, d, col);
    }
  }
  ctx.restore();
}

// Vyr. teisėjas (shushin): gestai null | 'aka' | 'shiro' | 'stop' | 'both'.
export function drawShushin(ctx, sh, groundY, time) {
  ctx.save();
  ctx.translate(sh.x, groundY - 34);
  ctx.scale(0.9, 0.9);
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.beginPath(); ctx.ellipse(0, 4, 40, 8, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#20232e';
  ctx.fillRect(-15, -96, 13, 96);
  ctx.fillRect(2, -96, 13, 96);
  ctx.fillStyle = '#f4f4f1';
  ctx.beginPath(); ctx.roundRect(-20, -170, 40, 80, 8); ctx.fill();
  ctx.strokeStyle = '#23232b';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#20232e';
  ctx.fillRect(-6, -170, 12, 7);
  ctx.beginPath(); ctx.arc(0, -186, 15, 0, Math.PI * 2); ctx.fillStyle = '#e9bd95'; ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(0, -189, 15, Math.PI, 0); ctx.fillStyle = '#55555c'; ctx.fill();
  const k = easeOut(Math.min(1, (sh.gt || 0) / 200));
  const arm = (side, ang) => {
    const a = 12 + (ang - 12) * k;
    ctx.strokeStyle = '#f4f4f1';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(side * 19, -160);
    ctx.lineTo(side * 19 + Math.sin(a * RAD) * side * 62, -160 + Math.cos(a * RAD) * 62);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(side * 19 + Math.sin(a * RAD) * side * 66, -160 + Math.cos(a * RAD) * 66, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#e9bd95';
    ctx.fill();
  };
  const g = sh.gesture;
  arm(-1, g === 'aka' ? 130 : g === 'both' ? 80 : 12);
  arm(1, g === 'shiro' ? 130 : g === 'both' ? 80 : g === 'stop' ? 95 + Math.sin(time / 80) * 4 : 12);
  ctx.restore();
}

export class Particles {
  constructor() { this.list = []; }

  // Prakaito / dulkių dalelės pataikius (be kraujo).
  burst(x, y, dir, n, col = 'rgba(255,255,255,0.9)') {
    for (let i = 0; i < n; i++) {
      this.list.push({ x, y, vx: dir * (60 + Math.random() * 220), vy: -60 - Math.random() * 200, life: 300 + Math.random() * 250, age: 0, col });
    }
  }

  update(dt) {
    for (const p of this.list) {
      p.age += dt;
      p.x += p.vx * dt / 1000;
      p.y += p.vy * dt / 1000;
      p.vy += 700 * dt / 1000;
    }
    this.list = this.list.filter((p) => p.age < p.life);
  }

  draw(ctx) {
    for (const p of this.list) {
      ctx.globalAlpha = 1 - p.age / p.life;
      ctx.fillStyle = p.col;
      ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
    }
    ctx.globalAlpha = 1;
  }
}
