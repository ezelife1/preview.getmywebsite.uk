const floating=document.getElementById('floating');
const hero=document.getElementById('hero');
function updateFloating(){const show=hero.getBoundingClientRect().bottom<=0;floating.hidden=!show;floating.setAttribute('aria-hidden',String(!show));floating.querySelectorAll('a').forEach(a=>a.tabIndex=show?0:-1)}
addEventListener('scroll',updateFloating,{passive:true});addEventListener('resize',updateFloating);addEventListener('pageshow',updateFloating);updateFloating();
const form=document.getElementById('wa-form');
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const message=`Hi JN Carpentry & Construction, I'd like a quote.\n\nName: ${d.get('name').trim()}\nService: ${d.get('service')}\nArea/Postcode: ${d.get('area').trim()}\nDetails: ${d.get('details').trim()}`;window.open('https://wa.me/447903885100?text='+encodeURIComponent(message),'_blank','noopener')});
const menu=document.querySelector('.menu-toggle'),panel=document.getElementById('mobile-nav');
if(menu&&panel){function closeMenu(){panel.hidden=true;menu.setAttribute('aria-expanded','false')}menu.addEventListener('click',()=>{panel.hidden=!panel.hidden;menu.setAttribute('aria-expanded',String(!panel.hidden))});panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()})}
