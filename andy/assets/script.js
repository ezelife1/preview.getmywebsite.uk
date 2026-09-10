
const hero = document.querySelector('.hero');
const bar = document.querySelector('.mobile-contact');
const io = new IntersectionObserver(([entry]) => {
  if (window.innerWidth <= 900) {
    bar.classList.toggle('show', !entry.isIntersecting);
  } else {
    bar.classList.remove('show');
  }
}, {threshold: 0.05});
io.observe(hero);
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) bar.classList.remove('show');
});
