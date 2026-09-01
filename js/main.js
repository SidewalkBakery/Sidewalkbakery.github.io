// Barkside Bakery: main interactions

document.addEventListener('DOMContentLoaded', () => {
  generateQRCode();
  initVideoPreview();
  initSmoothReveal();
});

function generateQRCode() {
  const qrContainer = document.getElementById('qr-code');
  if (!qrContainer || typeof QRCode === 'undefined') return;

  // Update this URL when you deploy
  const videoUrl = window.location.origin + '/video.html';

  QRCode.toCanvas(
    document.createElement('canvas'),
    videoUrl,
    {
      width: 180,
      margin: 2,
      color: {
        dark: '#3d2914',
        light: '#ffffff',
      },
    },
    (err, canvas) => {
      if (err) {
        qrContainer.innerHTML = '<p style="font-size:0.8rem;color:#6b5344;">QR loads on deploy</p>';
        return;
      }
      qrContainer.innerHTML = '';
      qrContainer.appendChild(canvas);
    }
  );
}

function initVideoPreview() {
  const playBtn = document.querySelector('.video-preview .play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      window.location.href = 'video.html';
    });
  }
}

function initSmoothReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.ingredient-card, .find-card, .polaroid, .qr-card').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
}
