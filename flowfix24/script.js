(() => {
  const hero = document.getElementById('hero');
  const floating = document.getElementById('floatingContact');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  function updateFloating() {
    if (!hero || !floating) return;
    const showAfter = hero.offsetTop + hero.offsetHeight - 80;
    const visible = window.scrollY > showAfter;
    floating.classList.toggle('visible', visible);
    floating.setAttribute('aria-hidden', visible ? 'false' : 'true');
  }

  updateFloating();
  window.addEventListener('scroll', updateFloating, { passive: true });
  window.addEventListener('resize', updateFloating);
})();
