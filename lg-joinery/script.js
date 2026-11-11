const floating=document.getElementById('floating');
const hero=document.querySelector('.hero')||document.querySelector('[data-contact-sentinel]');
function updateContact(){if(!floating||!hero)return;const visible=hero.getBoundingClientRect().bottom<=0;floating.hidden=!visible;floating.classList.toggle('show',visible);document.querySelector('.site-header')?.classList.toggle('past-hero',visible);}
window.addEventListener('scroll',updateContact,{passive:true});window.addEventListener('resize',updateContact);updateContact();
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
const dialog=document.getElementById('lightbox');document.querySelectorAll('.open-photo').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById('large-photo').src=btn.dataset.photo;document.getElementById('large-photo').alt=btn.dataset.caption;document.getElementById('photo-caption').textContent=btn.dataset.caption;dialog.showModal();}));document.getElementById('close-photo')?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});

document.getElementById('project-form')?.addEventListener('submit',e=>{e.preventDefault();const value=id=>document.getElementById(id).value.trim();document.getElementById('draft-status').textContent=`Your enquiry draft — not sent

Name: ${value('q-name')}
Phone: ${value('q-phone')}
Email: ${value('q-email')}
Service: ${value('q-service')}
Area / postcode: ${value('q-area')}
Project details: ${value('q-details')}`;});
