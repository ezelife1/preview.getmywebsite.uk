
document.addEventListener('DOMContentLoaded', () => {
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.playsInline = true;
    const tryPlay = () => heroVideo.play().catch(() => {});
    heroVideo.addEventListener('loadeddata', tryPlay, { once: true });
    tryPlay();
  }

  const hero = document.getElementById('hero');
  const floating = document.getElementById('floatingContact');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  function updateFloatingContact() {
    if (!hero || !floating) return;
    const passedHero = hero.getBoundingClientRect().bottom <= 0;
    floating.classList.toggle('visible', passedHero);
    floating.setAttribute('aria-hidden', passedHero ? 'false' : 'true');
  }

  updateFloatingContact();
  window.addEventListener('scroll', updateFloatingContact, { passive: true });
  window.addEventListener('resize', updateFloatingContact);


  document.querySelectorAll('.ba-slider').forEach(slider => {
    const beforeWrap = slider.querySelector('.ba-before-wrap');
    const divider = slider.querySelector('.ba-divider');
    let dragging = false;

    function moveSlider(clientX) {
      const rect = slider.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      beforeWrap.style.width = pct + '%';
      divider.style.left = pct + '%';
    }

    slider.addEventListener('pointerdown', e => {
      dragging = true;
      slider.setPointerCapture(e.pointerId);
      moveSlider(e.clientX);
    });
    slider.addEventListener('pointermove', e => {
      if (dragging) moveSlider(e.clientX);
    });
    slider.addEventListener('pointerup', () => dragging = false);
    slider.addEventListener('pointercancel', () => dragging = false);
  });

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuToggle.textContent = open ? '✕' : '☰';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      });
    });
  }
});
