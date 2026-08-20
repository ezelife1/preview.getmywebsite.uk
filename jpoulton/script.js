const header=document.querySelector('.site-header');
const hero=document.querySelector('#hero');
const float=document.querySelector('#mobileFloat');
const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('#mobileMenu');
function updateHeader(){header.classList.toggle('scrolled',scrollY>20)}
updateHeader(); addEventListener('scroll',updateHeader,{passive:true});
const heroObserver=new IntersectionObserver(([entry])=>{if(innerWidth<=900){float.classList.toggle('show',!entry.isIntersecting)}},{threshold:.08});
heroObserver.observe(hero);
menuBtn.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
const revealObs=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));
