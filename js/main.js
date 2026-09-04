// Sidewalk Bakery

document.addEventListener('DOMContentLoaded', () => {
  revealLocationIfReady();
});

function revealLocationIfReady() {
  const revealEl = document.getElementById('location-reveal');
  const coordsEl = document.getElementById('drop-coords');
  if (!revealEl && !coordsEl) return;

  // Set drop reveal datetime here: new Date('2026-09-06T10:30:00-05:00')
  const revealAt = null;

  if (!revealAt || Date.now() < revealAt.getTime()) return;

  const location = 'CONGRESS & 6TH · AUSTIN';

  if (revealEl) {
    revealEl.textContent = location;
    revealEl.style.borderStyle = 'solid';
    revealEl.style.fontFamily = 'var(--font-display)';
    revealEl.style.fontSize = '1.5rem';
    revealEl.style.letterSpacing = '0.08em';
    revealEl.style.color = 'var(--ink)';
  }

  if (coordsEl) {
    coordsEl.textContent = location;
  }
}
