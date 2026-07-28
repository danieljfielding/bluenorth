/**
 * <bn-aurora> — BlueNorth aurora hero background.
 * Fills its container. Attributes: intensity, speed, teal ("false" to disable), stars.
 */
class BnAurora extends HTMLElement {
  connectedCallback() {
    if (this._built) return;
    this._built = true;
    const cfg = {
      intensity: parseFloat(this.getAttribute('intensity') || '1.65'),
      speed: parseFloat(this.getAttribute('speed') || '2.5'),
      tealAccent: this.getAttribute('teal') !== 'false',
      starCount: parseInt(this.getAttribute('stars') || '26', 10),
      mark: this.getAttribute('mark') || 'assets/mark-white.png'
    };
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
<style>
  :host { position: absolute; inset: 0; display: block; overflow: hidden;
          background: radial-gradient(120% 100% at 0% 0%, #1c386a, #0E1A33); }
  canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
  .dot { position: absolute; border-radius: 50%; background: #EAF0F9; opacity: 0.3;
         animation: bnTwinkle 8s ease-in-out infinite; }
  .mark { position: absolute; top: 14%; right: 12%; width: 68px; height: 68px; }
  .mark img { width: 100%; height: 100%; animation: bnStarBreathe 9s ease-in-out infinite; }
  .mark .glint { position: absolute; inset: 0; opacity: 0; filter: blur(6px) brightness(1.6);
                 animation: bnStarGlint 14s ease-in-out 2s infinite; }
  .fade { position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(180deg, rgba(14,26,51,0) 55%, rgba(14,26,51,0.55) 100%); }
  @keyframes bnStarBreathe {
    0%, 100% { opacity: 0.82; filter: drop-shadow(0 0 10px rgba(94,137,201,0.25)); transform: scale(1); }
    50% { opacity: 1; filter: drop-shadow(0 0 26px rgba(94,137,201,0.55)); transform: scale(1.03); }
  }
  @keyframes bnStarGlint {
    0%, 87%, 100% { opacity: 0; transform: scale(0.4) rotate(0deg); }
    91% { opacity: 0.9; transform: scale(1) rotate(12deg); }
    95% { opacity: 0; transform: scale(1.35) rotate(20deg); }
  }
  @keyframes bnTwinkle { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.85; } }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
</style>
<canvas></canvas>
<div class="mark"><img src="${cfg.mark}" alt=""><img class="glint" src="${cfg.mark}" alt=""></div>
<div class="fade"></div>`;

    const canvas = root.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const buf = document.createElement('canvas');
    const bctx = buf.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const rnd = (seed) => { const x = Math.sin(seed * 999) * 10000; return x - Math.floor(x); };
    for (let i = 0; i < cfg.starCount; i++) {
      const d = document.createElement('div');
      d.className = 'dot';
      let left = rnd(i + 1) * 96 + 2;
      let top = rnd(i + 40) * 62 + 3;
      // keep the middle-left clear for hero copy
      if (left < 52 && top > 24) {
        if (rnd(i + 300) < 0.5) top = rnd(i + 310) * 18 + 3;
        else left = 55 + rnd(i + 320) * 43;
      }
      d.style.left = left.toFixed(1) + '%';
      d.style.top = top.toFixed(1) + '%';
      const s = rnd(i + 80) < 0.75 ? 2 : 3;
      d.style.width = d.style.height = s + 'px';
      d.style.animationDuration = (5 + rnd(i + 120) * 9).toFixed(1) + 's';
      d.style.animationDelay = (-rnd(i + 200) * 12).toFixed(1) + 's';
      root.insertBefore(d, canvas.nextSibling);
    }

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = Math.max(2, Math.round(r.width));
      canvas.height = Math.max(2, Math.round(r.height));
      buf.width = Math.max(2, Math.round(r.width / 7));
      buf.height = Math.max(2, Math.round(r.height / 7));
    };
    resize();
    this._ro = new ResizeObserver(resize);
    this._ro.observe(this);

    const hexA = (hex, a) => {
      const n = parseInt(hex.slice(1), 16);
      return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
    };

    function drawRibbon(w, h, t, c) {
      const pts = [], steps = 24;
      for (let i = 0; i <= steps; i++) {
        const u = i / steps;
        const x = u * w * 1.3 - w * 0.15;
        const y = h * c.base
          + Math.sin(u * c.freq * Math.PI * 2 + t * c.speed + c.phase) * h * c.amp
          + Math.sin(u * c.freq2 * Math.PI * 2 - t * c.speed * 0.6 + c.phase * 2) * h * c.amp * 0.5;
        pts.push([x, y]);
      }
      const thick = h * c.thick * (1 + 0.25 * Math.sin(t * c.speed * 0.7 + c.phase));
      bctx.beginPath();
      bctx.moveTo(pts[0][0], pts[0][1]);
      for (let i = 0; i < pts.length; i++) bctx.lineTo(pts[i][0], pts[i][1]);
      for (let i = pts.length - 1; i >= 0; i--) bctx.lineTo(pts[i][0], pts[i][1] + thick);
      bctx.closePath();
      const g = bctx.createLinearGradient(0, h * c.base - thick, 0, h * c.base + thick * 1.4);
      g.addColorStop(0, hexA(c.color, 0));
      g.addColorStop(0.35, hexA(c.color, c.alpha));
      g.addColorStop(1, hexA(c.color, 0));
      bctx.fillStyle = g;
      bctx.fill();
    }

    const frame = (now) => {
      if (!this.isConnected) return;
      const k = cfg.intensity;
      const t = (now / 1000) * 0.05 * cfg.speed;
      const w = buf.width, h = buf.height;
      bctx.clearRect(0, 0, w, h);
      bctx.globalCompositeOperation = 'lighter';
      drawRibbon(w, h, t, { base: 0.30, amp: 0.08, thick: 0.30, freq: 0.9, freq2: 1.7, speed: 1.0, phase: 0, color: '#5E89C9', alpha: 0.20 * k });
      drawRibbon(w, h, t, { base: 0.46, amp: 0.10, thick: 0.24, freq: 1.2, freq2: 0.7, speed: 0.7, phase: 2.1, color: '#4F7CB3', alpha: 0.16 * k });
      if (cfg.tealAccent) drawRibbon(w, h, t, { base: 0.24, amp: 0.06, thick: 0.16, freq: 1.5, freq2: 1.1, speed: 1.3, phase: 4.4, color: '#3FA08C', alpha: 0.10 * k });
      drawRibbon(w, h, t, { base: 0.62, amp: 0.07, thick: 0.20, freq: 0.6, freq2: 1.4, speed: 0.5, phase: 5.6, color: '#9FB6CF', alpha: 0.08 * k });
      bctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = 'blur(' + Math.round(canvas.width / 55) + 'px)';
      ctx.drawImage(buf, -canvas.width * 0.05, -canvas.height * 0.05, canvas.width * 1.1, canvas.height * 1.1);
      ctx.filter = 'none';
      if (!reduced) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }
  disconnectedCallback() { if (this._ro) this._ro.disconnect(); }
}
if (!customElements.get('bn-aurora')) customElements.define('bn-aurora', BnAurora);
