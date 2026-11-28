const floating=document.getElementById('floating'),hero=document.querySelector('.hero');
function updateContact(){if(!floating||!hero)return;const visible=hero.getBoundingClientRect().bottom<=0 && window.scrollY>0;floating.hidden=!visible;floating.classList.toggle('show',visible);}
window.addEventListener('scroll',updateContact,{passive:true});window.addEventListener('resize',updateContact);updateContact();
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
const dialog=document.getElementById('lightbox');document.querySelectorAll('.open-photo').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById('large-photo').src=btn.dataset.photo;document.getElementById('large-photo').alt=btn.dataset.caption;document.getElementById('photo-caption').textContent=btn.dataset.caption;dialog.showModal();}));document.getElementById('close-photo')?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});

document.querySelector('#wa-form')?.addEventListener('submit', e=>{
 e.preventDefault();
 const form=e.currentTarget;
 if(!form.reportValidity())return;
 const data=new FormData(form), value=k=>String(data.get(k)||'').trim();
 const message=["Hi Manchester Tree and Landscapes Ltd, I'd like a free quote.","","Name: "+value('name'),"Service: "+value('service'),"Area/Postcode: "+value('area'),"Project details: "+value('details')].join('\n');
 window.location.assign('https://wa.me/447523495746?text='+encodeURIComponent(message));
});
