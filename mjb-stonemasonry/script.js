const floating=document.getElementById('floating');
const hero=document.querySelector('.hero')||document.querySelector('[data-contact-sentinel]');
function updateContact(){if(!floating||!hero)return;const visible=hero.getBoundingClientRect().bottom<=0;floating.hidden=!visible;floating.classList.toggle('show',visible);document.querySelector('.site-header')?.classList.toggle('past-hero',visible);}
window.addEventListener('scroll',updateContact,{passive:true});window.addEventListener('resize',updateContact);updateContact();
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
const dialog=document.getElementById('lightbox');document.querySelectorAll('.open-photo').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById('large-photo').src=btn.dataset.photo;document.getElementById('large-photo').alt=btn.dataset.caption;document.getElementById('photo-caption').textContent=btn.dataset.caption;dialog.showModal();}));document.getElementById('close-photo')?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});

document.getElementById('wa-form')?.addEventListener('submit',e=>{
 e.preventDefault();if(!e.currentTarget.reportValidity())return;
 const value=id=>document.getElementById(id).value.trim();
 const fields=[['Name','name'],['Phone','phone'],['Email','email'],['Service','service'],['Area / postcode','area'],['Project details','details']];
 const msg=['Hello MJB Stonemasonry, I would like a quote.','',...fields.map(([label,key])=>label+': '+(value('q-'+key)||'Not supplied'))].join('\n');
 const email=e.submitter?.value==='email';
 window.location.assign(email?'mailto:mjbstonemasonry@gmail.com?subject='+encodeURIComponent('Quote enquiry — '+value('q-service'))+'&body='+encodeURIComponent(msg):'https://wa.me/447557747682?text='+encodeURIComponent(msg));
});
