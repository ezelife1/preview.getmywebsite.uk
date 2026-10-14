const hero=document.getElementById('hero');
const floating=document.getElementById('floating');
function updateFloating(){
  const show=hero.getBoundingClientRect().bottom<=0;
  floating.hidden=!show;
  floating.setAttribute('aria-hidden',String(!show));
  floating.querySelectorAll('a').forEach(a=>a.tabIndex=show?0:-1);
}
addEventListener('scroll',updateFloating,{passive:true});
addEventListener('resize',updateFloating);
updateFloating();
const toggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
const form=document.getElementById('quote-form');
form.addEventListener('submit',e=>{
  e.preventDefault();if(!form.reportValidity())return;
  const d=new FormData(form);
  const message=`Hi Rob, I'd like a free quote.\nName: ${d.get('name')}\nService: ${d.get('service')}\nTown/postcode: ${d.get('area')}\nDetails: ${d.get('details')}`;
  window.open('https://wa.me/447817770332?text='+encodeURIComponent(message),'_blank','noopener');
});
