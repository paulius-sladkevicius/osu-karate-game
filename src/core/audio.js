// SPDX-License-Identifier: BUSL-1.1
// Garsas: Web Audio API, atrakinamas pirmu bakstelėjimu. Visi garsai sintezuojami kodu (originalūs, be failų);
// teisėjo balsas – Web Speech API (ja-JP) kaip laikinas sprendimas, kol nėra įrašytų šūksnių.

export class AudioSys {
  constructor(settings) {
    this.settings = settings;
    this.ctx = null;
    this.musicTimer = null;
    this.musicKind = null;
    this.crowd = null;
  }

  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.8;
      this.master.connect(this.ctx.destination);
      const len = this.ctx.sampleRate;
      this.noiseBuf = this.ctx.createBuffer(1, len, len);
      const d = this.noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    } catch (e) { this.ctx = null; }
  }

  get on() { return !!this.ctx && this.settings.sound; }

  tone(freq, dur, { type = 'sine', vol = 0.3, to = null, delay = 0, attack = 0.005 } = {}) {
    const c = this.ctx;
    const t0 = c.currentTime + delay;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(this.master);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }

  noise(dur, { vol = 0.3, type = 'bandpass', freq = 1000, q = 1, delay = 0, to = null } = {}) {
    const c = this.ctx;
    const t0 = c.currentTime + delay;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t0);
    if (to) f.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(f).connect(g).connect(this.master);
    s.start(t0, Math.random() * 0.5);
    s.stop(t0 + dur + 0.05);
  }

  // Smūgių garsai pagal zoną: duslūs į liemenį, aštresni į kojas ir galvą.
  hit(zone, strength = 0.5) {
    if (!this.on) return;
    const v = 0.25 + strength * 0.35;
    if (zone === 'body') { this.tone(95, 0.16, { to: 45, vol: v }); this.noise(0.08, { vol: v * 0.5, type: 'lowpass', freq: 500 }); }
    else if (zone === 'legs') { this.noise(0.07, { vol: v, freq: 1800, q: 0.8 }); this.tone(130, 0.1, { to: 70, vol: v * 0.7 }); }
    else { this.tone(180, 0.12, { to: 80, vol: v }); this.noise(0.05, { vol: v * 0.7, freq: 2600 }); }
  }

  block() { if (this.on) { this.noise(0.06, { vol: 0.25, freq: 1300, q: 1.5 }); this.tone(220, 0.05, { vol: 0.1, type: 'triangle' }); } }

  // „Trakštelėjimas“ blokuojant žemą spyrį blauzda.
  sune() { if (this.on) { this.noise(0.03, { vol: 0.5, freq: 3400, q: 2 }); this.noise(0.05, { vol: 0.3, freq: 900, delay: 0.02 }); } }

  whoosh() { if (this.on) this.noise(0.12, { vol: 0.06, freq: 500, to: 1800, q: 0.7 }); }

  thud() { if (this.on) { this.tone(70, 0.3, { to: 35, vol: 0.5 }); this.noise(0.15, { vol: 0.25, type: 'lowpass', freq: 300 }); } }

  // Švilpukai: 'long' (1 ilgas), 'strong' (1 stiprus), 'shorts' (keli trumpi), 'short' (1 trumpas).
  whistle(kind) {
    if (!this.on) return;
    const one = (delay, dur, vol) => {
      this.tone(2950, dur, { vol, delay, type: 'sine', attack: 0.01 });
      this.tone(3120, dur, { vol: vol * 0.7, delay, type: 'sine', attack: 0.01 });
      this.noise(dur, { vol: vol * 0.25, freq: 3000, q: 4, delay });
    };
    if (kind === 'long') one(0, 0.9, 0.16);
    else if (kind === 'strong') one(0, 0.38, 0.24);
    else if (kind === 'short') one(0, 0.14, 0.16);
    else for (let i = 0; i < 3; i++) one(i * 0.16, 0.09, 0.16);
  }

  kiai(variant = 0) {
    if (!this.on) return;
    const base = 210 + variant * 45;
    this.tone(base, 0.28, { type: 'sawtooth', to: base * 1.6, vol: 0.16 });
    this.noise(0.25, { vol: 0.14, freq: 1100, q: 2 });
  }

  osu() {
    if (!this.on) return;
    this.tone(125, 0.34, { type: 'sawtooth', to: 96, vol: 0.14 });
    this.noise(0.18, { vol: 0.07, freq: 700, q: 1.5, delay: 0.14 });
  }

  ui() { if (this.on) this.tone(660, 0.06, { type: 'triangle', vol: 0.12 }); }

  good() { if (this.on) { this.tone(660, 0.1, { type: 'triangle', vol: 0.15 }); this.tone(990, 0.16, { type: 'triangle', vol: 0.15, delay: 0.09 }); } }

  bad() { if (this.on) this.tone(200, 0.22, { type: 'square', to: 120, vol: 0.1 }); }

  taiko(vol = 0.5, delay = 0) {
    if (!this.on) return;
    this.tone(82, 0.5, { to: 48, vol, delay });
    this.noise(0.05, { vol: vol * 0.3, type: 'lowpass', freq: 400, delay });
  }

  // Muzika: taiko būgnai meniu, žiūrovų ūžesys turnyruose; kovos metu tylu.
  music(kind) {
    if (kind === this.musicKind) return;
    this.musicKind = kind;
    if (this.musicTimer) { clearInterval(this.musicTimer); this.musicTimer = null; }
    if (this.crowd) { try { this.crowd.stop(); } catch (e) { /* jau sustabdyta */ } this.crowd = null; }
    if (!this.ctx || !this.settings.music || !kind) return;
    if (kind === 'taiko') {
      const pattern = [1, 0, 0, 0.5, 1, 0, 0.6, 0, 1, 0, 0.5, 0.5, 1, 0.6, 0, 0];
      let i = 0;
      this.musicTimer = setInterval(() => {
        if (!this.settings.music || this.ctx.state !== 'running') return;
        const v = pattern[i++ % pattern.length];
        if (v) this.taiko(0.22 * v);
      }, 260);
    } else if (kind === 'crowd') {
      const s = this.ctx.createBufferSource();
      s.buffer = this.noiseBuf;
      s.loop = true;
      const f = this.ctx.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.value = 420;
      f.Q.value = 0.5;
      const g = this.ctx.createGain();
      g.gain.value = 0.035;
      s.connect(f).connect(g).connect(this.master);
      s.start();
      this.crowd = s;
    }
  }

  // Teisėjo ir sensei balsas japoniškai (jei įrenginys turi balsą).
  speak(text) {
    if (!this.settings.sound || !this.settings.voice) return;
    const synth = globalThis.speechSynthesis;
    if (!synth || !globalThis.SpeechSynthesisUtterance) return;
    try {
      const u = new SpeechSynthesisUtterance(text.replace(/[!–]/g, ' '));
      u.lang = 'ja-JP';
      u.rate = 1.05;
      u.volume = 0.9;
      synth.cancel();
      synth.speak(u);
    } catch (e) { /* balso nėra – lieka subtitrai */ }
  }
}
