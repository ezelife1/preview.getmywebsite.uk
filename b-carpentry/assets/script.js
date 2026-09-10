const hero = document.querySelector('.hero');
const bar = document.querySelector('.mobile-contact');
if (hero && bar) {
  const observer = new IntersectionObserver(([entry]) => {
    bar.classList.toggle('show', !entry.isIntersecting);
  }, { threshold: 0.08 });
  observer.observe(hero);
}
