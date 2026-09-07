const hero = document.getElementById('hero');
const bar = document.getElementById('mobileContact');
function updateContactBar(){
  if(!hero || !bar) return;
  const bottom = hero.getBoundingClientRect().bottom;
  bar.classList.toggle('show', bottom < 40 && window.innerWidth <= 900);
  bar.setAttribute('aria-hidden', bottom < 40 && window.innerWidth <= 900 ? 'false' : 'true');
}
window.addEventListener('scroll', updateContactBar, {passive:true});
window.addEventListener('resize', updateContactBar);
updateContactBar();
