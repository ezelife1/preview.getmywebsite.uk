const header=document.querySelector('.site-header');
const floatBar=document.getElementById('mobileFloat');
const hero=document.getElementById('hero');

function updateContactBar(){
  header.classList.toggle('scrolled', window.scrollY > 24);
  if(!floatBar || !hero) return;
  if(window.innerWidth <= 640){
    const heroBottom = hero.getBoundingClientRect().bottom;
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    floatBar.classList.toggle('show', heroBottom <= headerHeight + 8);
  } else {
    floatBar.classList.remove('show');
  }
}

window.addEventListener('scroll', updateContactBar, {passive:true});
window.addEventListener('resize', updateContactBar);
window.addEventListener('load', updateContactBar);
updateContactBar();
