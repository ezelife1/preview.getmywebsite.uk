
const bar=document.querySelector('.mobile-contact');
const hero=document.querySelector('.hero');
const obs=new IntersectionObserver(([entry])=>{
  if(window.innerWidth<=850){bar.classList.toggle('show',!entry.isIntersecting)}else{bar.classList.remove('show')}
},{threshold:.05});
obs.observe(hero);
window.addEventListener('resize',()=>{if(window.innerWidth>850)bar.classList.remove('show')});
