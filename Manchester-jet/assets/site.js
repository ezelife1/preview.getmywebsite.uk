const menuBtn=document.querySelector('.menu-toggle');
const menu=document.querySelector('.mobile-menu');
menuBtn?.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);menu.setAttribute('aria-hidden',!open)});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false')}));

const PHONE='07518865522';
const WHATSAPP='447386565540';
const waMessage=encodeURIComponent('Hi Manchester Jet Cleaning, I would like a quote for exterior cleaning.');

document.querySelectorAll('.js-call').forEach(a=>{
  if(PHONE){a.href=`tel:${PHONE}`}
  else{a.addEventListener('click',e=>{if(a.getAttribute('href')==='#'||a.getAttribute('href')==='#contact')return; e.preventDefault()})}
});
document.querySelectorAll('.js-whatsapp').forEach(a=>{
  if(WHATSAPP){a.href=`https://wa.me/${WHATSAPP}?text=${waMessage}`;a.target='_blank';a.rel='noopener'}
});

// Reduce resource use when videos are off-screen.
const vids=[...document.querySelectorAll('video:not(.hero-video)')];
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{if(isIntersecting){target.play().catch(()=>{})}else{target.pause()}}),{rootMargin:'150px'});
  vids.forEach(v=>io.observe(v));
}
