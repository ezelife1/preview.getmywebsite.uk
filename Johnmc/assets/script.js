const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));

const hero = document.getElementById('hero');
const mobileContact = document.getElementById('mobileContact');
if (hero && mobileContact) {
  const observer = new IntersectionObserver(([entry]) => {
    const show = !entry.isIntersecting;
    mobileContact.classList.toggle('visible', show);
    mobileContact.setAttribute('aria-hidden', show ? 'false' : 'true');
    document.body.classList.toggle('contact-bar-visible', show);
  }, { threshold: 0.05 });
  observer.observe(hero);
}
