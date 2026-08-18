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

// Only show the floating Call / WhatsApp bar once the visitor has passed the hero.
const hero = document.querySelector('.hero');
const mobileContactBar = document.querySelector('.mobile-contact-bar');
if (hero && mobileContactBar) {
  const updateFloatingContact = () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    mobileContactBar.classList.toggle('is-visible', heroBottom <= 0);
  };
  updateFloatingContact();
  window.addEventListener('scroll', updateFloatingContact, { passive: true });
  window.addEventListener('resize', updateFloatingContact);
}
