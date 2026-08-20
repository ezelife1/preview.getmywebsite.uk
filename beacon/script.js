const hero = document.getElementById('hero');
const floatBar = document.getElementById('mobileFloat');
const header = document.querySelector('.site-header');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const updateUI = () => {
  const heroBottom = hero.getBoundingClientRect().bottom;
  if (window.innerWidth <= 820) {
    floatBar.classList.toggle('visible', heroBottom <= 70);
  } else {
    floatBar.classList.remove('visible');
    header.classList.toggle('scrolled', window.scrollY > 620);
  }
};
window.addEventListener('scroll', updateUI, {passive:true});
window.addEventListener('resize', updateUI);
updateUI();


document.querySelectorAll('.reel-card').forEach(card => {
  const video = card.querySelector('video');
  const cover = card.querySelector('.reel-cover');
  cover.addEventListener('click', () => {
    document.querySelectorAll('.reel-card video').forEach(other => {
      if (other !== video) { other.pause(); other.closest('.reel-card')?.classList.remove('playing'); }
    });
    card.classList.add('playing');
    video.play();
  });
  video.addEventListener('pause', () => {
    if (video.currentTime < .2 || video.ended) card.classList.remove('playing');
  });
  video.addEventListener('ended', () => card.classList.remove('playing'));
});
