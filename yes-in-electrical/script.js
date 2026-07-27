const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const floatingWhatsApp = document.querySelector('.whatsapp-float');
const contactSection = document.querySelector('#contact');
const footer = document.querySelector('.footer');

const updateCompactHeader = () => {
  header?.classList.toggle('is-compact', window.scrollY > 80);
};

updateCompactHeader();
window.addEventListener('scroll', updateCompactHeader, { passive: true });

if (floatingWhatsApp && 'IntersectionObserver' in window) {
  const visibleSections = new Set();
  const overlapObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visibleSections.add(entry.target);
      else visibleSections.delete(entry.target);
    });
    floatingWhatsApp.classList.toggle('is-hidden', visibleSections.size > 0);
  }, { threshold: 0.08 });

  if (contactSection) overlapObserver.observe(contactSection);
  if (footer) overlapObserver.observe(footer);
}
