// SPDX-License-Identifier: BUSL-1.1
// 2D skeletas: pozos ir raktiniai kadrai iš assets/anim/poses.json, interpoliacija ir kovotojo piešimas.

const L = { thigh: 48, shin: 48, torso: 74, neck: 10, head: 18, upper: 34, fore: 32 };
const KEYS = ['torso', 'head', 'fs', 'fe', 'bs', 'be', 'fh', 'fk', 'bh', 'bk', 'dx', 'rot'];
const RAD = Math.PI / 180;
const cache = new WeakMap();

export function getPose(anim, name) {
  let c = cache.get(anim);
  if (!c) { c = {}; cache.set(anim, c); }
  if (c[name]) return c[name];
  const base = anim.poses.kamae;
  const src = anim.poses[name] || base;
  const p = {};
  for (const k of KEYS) p[k] = src[k] ?? base[k] ?? 0;
  if (src.hipH != null) p.hipH = src.hipH;
  c[name] = p;
  return p;
}

export function solve(P) {
  const dir = (deg, len) => [Math.sin(deg * RAD) * len, Math.cos(deg * RAD) * len];
  const hip = [0, 0];
  const t = dir(P.torso, L.torso);
  const sh = [t[0], -t[1]];
  const hd = dir(P.torso + P.head, L.neck + L.head);
  const head = [sh[0] + hd[0], sh[1] - hd[1]];
  const arm = (s, e) => {
    const u = dir(s, L.upper);
    const f = dir(s + e, L.fore);
    const el = [sh[0] + u[0], sh[1] + u[1]];
    return [el, [el[0] + f[0], el[1] + f[1]]];
  };
  const leg = (h, k) => {
    const th = dir(h, L.thigh);
    const s = dir(h - k, L.shin);
    const kn = [th[0], th[1]];
    return [kn, [kn[0] + s[0], kn[1] + s[1]]];
  };
  const [fel, fha] = arm(P.fs, P.fe);
  const [bel, bha] = arm(P.bs, P.be);
  const [fkn, ffo] = leg(P.fh, P.fk);
  const [bkn, bfo] = leg(P.bh, P.bk);
  return { hip, sh, head, fel, fha, bel, bha, fkn, ffo, bkn, bfo, auto: Math.max(ffo[1], bfo[1]) + 6 };
}

export function hipHeight(P) {
  return P.hipH ?? solve(P).auto;
}

export function lerpPose(a, b, k) {
  const p = {};
  for (const key of KEYS) p[key] = a[key] + (b[key] - a[key]) * k;
  if (a.hipH != null || b.hipH != null) p.hipH = hipHeight(a) + (hipHeight(b) - hipHeight(a)) * k;
  return p;
}

const ease = (k) => k * k * (3 - 2 * k);

// p: 0–1 startup, 1–2 active, 2–3 recovery.
export function evalAnim(anim, name, p) {
  const a = anim.anims[name] || anim.anims.gyaku_tsuki;
  const keys = a.keys;
  if (p <= keys[0][0]) return getPose(anim, keys[0][1]);
  for (let i = 1; i < keys.length; i++) {
    if (p <= keys[i][0]) {
      const k = (p - keys[i - 1][0]) / (keys[i][0] - keys[i - 1][0] || 1);
      return lerpPose(getPose(anim, keys[i - 1][1]), getPose(anim, keys[i][1]), ease(k));
    }
  }
  return getPose(anim, keys[keys.length - 1][1]);
}

export function techPhase(T) {
  if (T.phase === 'startup') return Math.min(1, T.t / T.dur.s);
  if (T.phase === 'active') return 1 + Math.min(1, T.t / T.dur.a);
  return 2 + Math.min(1, T.t / (T.dur.r + T.extraRec));
}

// Tikslinė poza pagal kovotojo būseną.
export function fighterPose(f, anim, time) {
  const P = (n) => getPose(anim, n);
  switch (f.state) {
    case 'attack': return evalAnim(anim, f.tech.def.anim, techPhase(f.tech));
    case 'guard': {
      if (f.suneT > 0) return P('sune_uke');
      if (f.guard && f.guard.morote && f.guard.level === 'chudan') return P('morote_uke');
      return P(`guard_${f.guard ? f.guard.level : 'chudan'}`);
    }
    case 'hit': return lerpPose(P('kamae'), P(`hit_${f.hitZone || 'body'}`), Math.sin(Math.PI * Math.min(1, f.st / (f.stun || 200))));
    case 'stagger': {
      const s = { ...P('stagger') };
      s.torso += Math.sin(time / 90) * 9;
      s.head += Math.sin(time / 70) * 6;
      return s;
    }
    case 'down': {
      const k = Math.min(1, f.down.t / 340);
      return k < 0.5 ? lerpPose(P('hit_head'), P('fall'), k * 2) : lerpPose(P('fall'), P('down'), (k - 0.5) * 2);
    }
    case 'getup': {
      const k = Math.min(1, f.st / 500);
      return k < 0.5 ? lerpPose(P('down'), P('kneel'), ease(k * 2)) : lerpPose(P('kneel'), P('kamae'), ease((k - 0.5) * 2));
    }
    case 'pose': {
      const k = Math.max(0, Math.min(1, f.st / 260, (f.pose.dur - f.st) / 260));
      return lerpPose(P('stand'), P(f.pose.name), ease(k));
    }
    case 'dash': return P(f.dash && f.dash.fwd ? 'dash' : 'backdash');
    case 'walk': return lerpPose(P('walk_a'), P('walk_b'), (Math.sin(time / 85) + 1) / 2);
    default: {
      if (f.formal) return P('stand');
      if (f.crouch) return P('crouch');
      const s = { ...P('kamae') };
      s.torso += Math.sin(time / 520 + f.id) * 1.3;
      return s;
    }
  }
}

const OUT = '#23232b';
const SKIN = '#e9bd95';

function limb(ctx, pts, w, col) {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (let pass = 0; pass < 2; pass++) {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.strokeStyle = pass ? col : OUT;
    ctx.lineWidth = pass ? w : w + 4;
    ctx.stroke();
  }
}

function blob(ctx, x, y, r, col) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = col;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = OUT;
  ctx.stroke();
}

// st: { belt, aka, alpha, flash, scale, gi, far, hair, kiai }
export function drawFigure(ctx, x, groundY, facing, P, st = {}) {
  const J = solve(P);
  const hipH = P.hipH ?? J.auto;
  const s = st.scale || 1;
  const gi = st.flash ? '#ffd2c8' : (st.gi || '#f6f3ec');
  const far = st.flash ? '#f0b8ac' : (st.far || '#d9d5cb');
  ctx.save();
  ctx.globalAlpha *= st.alpha ?? 1;
  ctx.translate(x, groundY);
  ctx.scale(s * facing, s);
  ctx.translate(P.dx || 0, -hipH);
  if (P.rot) ctx.rotate(P.rot * RAD);

  // Šešėlis piešiamas atskirai (drawShadow), čia – tik figūra.
  const foot = (p) => limb(ctx, [p, [p[0] + 11, p[1] + 1]], 8, SKIN);
  limb(ctx, [J.sh, J.bel, J.bha], 13, far);
  blob(ctx, J.bha[0], J.bha[1], 7, SKIN);
  limb(ctx, [J.hip, J.bkn, J.bfo], 17, far);
  foot(J.bfo);

  limb(ctx, [J.hip, J.sh], 31, gi);
  // Atlapas
  ctx.beginPath();
  ctx.moveTo(J.sh[0] + 8, J.sh[1] + 6);
  ctx.lineTo(J.hip[0] + (J.sh[0] - J.hip[0]) * 0.35 + 2, J.hip[1] + (J.sh[1] - J.hip[1]) * 0.35);
  ctx.strokeStyle = 'rgba(40,40,50,0.5)';
  ctx.lineWidth = 2;
  ctx.stroke();
  // Diržas
  const ux = (J.sh[0] - J.hip[0]) / L.torso;
  const uy = (J.sh[1] - J.hip[1]) / L.torso;
  const bx = J.hip[0] + ux * 9;
  const by = J.hip[1] + uy * 9;
  limb(ctx, [[bx + uy * 15, by - ux * 15], [bx - uy * 15, by + ux * 15]], 7, st.belt || '#f4f1ea');
  limb(ctx, [[bx - uy * 13, by + ux * 13], [bx - uy * 13 + 3, by + ux * 13 + 20]], 5, st.belt || '#f4f1ea');
  if (st.aka) limb(ctx, [[bx + uy * 15, by - ux * 15], [bx + uy * 15 - 4, by - ux * 15 + 18]], 5, '#d5281f');

  blob(ctx, J.head[0], J.head[1], L.head, SKIN);
  ctx.beginPath();
  ctx.arc(J.head[0], J.head[1], L.head, Math.PI * 0.95, Math.PI * 1.85);
  ctx.lineTo(J.head[0] - 4, J.head[1] - 6);
  ctx.fillStyle = st.hair || '#2b2118';
  ctx.fill();
  ctx.fillStyle = OUT;
  ctx.fillRect(J.head[0] + 8, J.head[1] - 3, 3, 3);

  limb(ctx, [J.hip, J.fkn, J.ffo], 17, gi);
  foot(J.ffo);
  limb(ctx, [J.sh, J.fel, J.fha], 13, gi);
  blob(ctx, J.fha[0], J.fha[1], 7, SKIN);
  if (st.kiai) {
    ctx.globalAlpha *= 0.5;
    ctx.strokeStyle = '#ffd54a';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(J.sh[0] * 0.5, J.sh[1] * 0.5 + 10, 62, 120, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

export function drawShadow(ctx, x, groundY, w = 62) {
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.22)';
  ctx.beginPath();
  ctx.ellipse(x, groundY + 4, w, 10, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}
