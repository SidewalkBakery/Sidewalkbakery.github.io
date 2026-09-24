// Sidewalk Bakery

document.addEventListener('DOMContentLoaded', () => {
  applyInstagramLinks();
  initCountdown();
  revealLocationIfReady();
  initCardQr();
});

function getConfig() {
  return window.SIDEWALK || {};
}

function applyInstagramLinks() {
  const { instagramUrl, instagramHandle } = getConfig();
  if (!instagramUrl) return;

  document.querySelectorAll('[data-instagram-link]').forEach((el) => {
    el.href = instagramUrl;
  });

  document.querySelectorAll('[data-instagram-handle]').forEach((el) => {
    if (instagramHandle) el.textContent = instagramHandle;
  });
}

function initCountdown() {
  const el = document.getElementById('drop-countdown');
  if (!el) return;

  const { drop000Start } = getConfig();
  if (!drop000Start) {
    el.textContent = 'TBD';
    return;
  }

  const target = new Date(drop000Start).getTime();

  function tick() {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      el.innerHTML = '<span class="countdown-live">DROP 000 IS LIVE</span>';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    el.innerHTML = [
      `<span>${days} ${days === 1 ? 'DAY' : 'DAYS'}</span>`,
      '<span class="countdown-sep">·</span>',
      `<span>${hours} ${hours === 1 ? 'HOUR' : 'HOURS'}</span>`,
      '<span class="countdown-sep">·</span>',
      `<span>${minutes} ${minutes === 1 ? 'MINUTE' : 'MINUTES'}</span>`,
      '<span class="countdown-sep">·</span>',
      `<span>${String(seconds).padStart(2, '0')} SEC</span>`,
    ].join('');
  }

  tick();
  setInterval(tick, 1000);
}

function revealLocationIfReady() {
  const revealEl = document.getElementById('location-reveal');
  const coordsEl = document.getElementById('drop-coords');
  if (!revealEl && !coordsEl) return;

  const revealAt = null;

  if (!revealAt || Date.now() < revealAt.getTime()) return;

  const location = 'DOWNTOWN AUSTIN';

  if (revealEl) {
    revealEl.textContent = location;
    revealEl.classList.add('revealed');
  }

  if (coordsEl) {
    coordsEl.textContent = location;
  }
}

function initCardQr() {
  const qrContainer = document.getElementById('bag-qr');
  if (!qrContainer || typeof QRCode === 'undefined') return;

  const url = getConfig().siteUrl || window.location.origin + '/';

  QRCode.toCanvas(
    document.createElement('canvas'),
    url,
    { width: 120, margin: 1, color: { dark: '#0a0a0a', light: '#ffffff' } },
    (err, canvas) => {
      if (err) return;
      qrContainer.innerHTML = '';
      qrContainer.appendChild(canvas);
    }
  );
}
