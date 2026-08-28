document.getElementById('year').textContent = new Date().getFullYear();
const float = document.getElementById('mobileFloat');
const hero = document.getElementById('hero');
const observer = new IntersectionObserver(([entry]) => {
  float.classList.toggle('show', !entry.isIntersecting);
}, {threshold: 0.08});
observer.observe(hero);
