const menu=document.querySelector('.menu');
const links=document.querySelector('.navlinks');
menu?.addEventListener('click',()=>{
 const open=menu.getAttribute('aria-expanded')==='true';
 menu.setAttribute('aria-expanded',String(!open));
 if(!open){links.style.display='flex';links.style.position='absolute';links.style.top='82px';links.style.left='0';links.style.right='0';links.style.flexDirection='column';links.style.background='#07120b';links.style.padding='20px';links.style.gap='12px'}else{links.removeAttribute('style')}
});


// Show mobile contact buttons only after the hero has been passed
const floatBar=document.querySelector('.mobile-float');
const hero=document.querySelector('.hero');
if(floatBar && hero){
  const updateFloat=()=>{
    const pastHero=window.scrollY > (hero.offsetHeight - 90);
    floatBar.classList.toggle('visible', pastHero);
  };
  updateFloat();
  window.addEventListener('scroll', updateFloat, {passive:true});
  window.addEventListener('resize', updateFloat);
}
