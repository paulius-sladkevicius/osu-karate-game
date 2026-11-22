// SPDX-License-Identifier: BUSL-1.1
// DOM sąsajos pagalbininkas: ekranai (meniu, sąrašai, rezultatai) rodomi virš canvas.

export class Ui {
  constructor(root, audio) {
    this.root = root;
    this.audio = audio;
    this.handler = null;
    root.addEventListener('click', (e) => {
      const el = e.target.closest('[data-act]');
      if (!el || el.disabled || !this.handler) return;
      this.audio.unlock();
      this.audio.ui();
      this.handler(el.dataset.act, el);
    });
  }

  // Parodo ekraną. handler(act, el) kviečiamas paspaudus elementą su data-act.
  show(html, handler, cls = '') {
    this.root.className = `ui-on ${cls}`;
    this.root.innerHTML = html;
    this.handler = handler || null;
    this.root.scrollTop = 0;
  }

  // Parodo ekraną ir laukia pirmo veiksmo: grąžina { act, el }.
  ask(html, cls = '') {
    return new Promise((resolve) => {
      this.show(html, (act, el) => { this.handler = null; resolve({ act, el }); }, cls);
    });
  }

  clear() {
    this.root.className = '';
    this.root.innerHTML = '';
    this.handler = null;
  }
}
