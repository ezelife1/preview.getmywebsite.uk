const menuButton = document.getElementById('menu-button');
const mobileNav = document.getElementById('mobile-nav');
menuButton.addEventListener('click', () => {
  const opened = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
const floating = document.getElementById('floating-actions');
const hero = document.getElementById('hero');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(([entry]) => {
    floating.classList.toggle('visible', entry.boundingClientRect.bottom <= 0);
  }, { threshold: 0 });
  observer.observe(hero);
} else {
  const onScroll = () => floating.classList.toggle('visible', hero.getBoundingClientRect().bottom <= 0);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = document.getElementById('field-name').value.trim();
  const phone = document.getElementById('field-phone').value.trim();
  const device = document.getElementById('field-device').value;
  const details = document.getElementById('field-details').value.trim();
  const message = ['Hi Mr. Repair, I\'d like to enquire about a repair.', '',
    `Name: ${name}`, `Contact number: ${phone}`, `Device: ${device}`,
    `Issue: ${details}`, '', 'Please let me know the next steps. Thank you!'].join('\n');
  const url = 'https://wa.me/447886296335?text=' + encodeURIComponent(message);
  window.location.href = url;
});
