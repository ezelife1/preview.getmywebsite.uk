const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
  }));
}

// Show the floating mobile Call/WhatsApp bar only after the hero section.
const hero = document.querySelector('.hero');
const mobileContactBar = document.querySelector('.mobile-contact-bar');

if (hero && mobileContactBar) {
  const updateMobileContactBar = () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    const shouldShow = window.innerWidth <= 640 && heroBottom <= 0;
    mobileContactBar.classList.toggle('is-visible', shouldShow);
  };

  updateMobileContactBar();
  window.addEventListener('scroll', updateMobileContactBar, { passive: true });
  window.addEventListener('resize', updateMobileContactBar);
}
