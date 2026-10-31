const floating=document.getElementById('floating');
const hero=document.querySelector('.hero')||document.querySelector('[data-contact-sentinel]');
function updateContact(){if(!floating||!hero)return;const visible=hero.getBoundingClientRect().bottom<=0;floating.hidden=!visible;floating.classList.toggle('show',visible);document.querySelector('.site-header')?.classList.toggle('past-hero',visible);}
window.addEventListener('scroll',updateContact,{passive:true});window.addEventListener('resize',updateContact);updateContact();
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
const dialog=document.getElementById('lightbox');document.querySelectorAll('.open-photo').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById('large-photo').src=btn.dataset.photo;document.getElementById('large-photo').alt=btn.dataset.caption;document.getElementById('photo-caption').textContent=btn.dataset.caption;dialog.showModal();}));document.getElementById('close-photo')?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
const videos=[...document.querySelectorAll('.video-frame video')];videos.forEach(video=>{const button=video.parentElement.querySelector('.video-play');button.addEventListener('click',()=>video.play().catch(()=>{button.hidden=false;}));video.addEventListener('play',()=>{button.hidden=true;videos.forEach(other=>{if(other!==video)other.pause();});});video.addEventListener('pause',()=>{button.hidden=false;});video.addEventListener('ended',()=>{button.hidden=false;});});
document.getElementById('wa-form')?.addEventListener('submit',e=>{e.preventDefault();if(!e.currentTarget.reportValidity())return;const value=id=>document.getElementById(id).value.trim();const message=`Hello Grimsby Driveline Patio’s, I'd like a free quote.

Name: ${value('q-name')}
Phone: ${value('q-phone')}
Email: ${value('q-email')||'Not supplied'}
Service: ${value('q-service')}
Area/Postcode: ${value('q-area')}
Project details: ${value('q-details')}

I can attach photographs before sending.`;window.location.assign('https://wa.me/447519164323?text='+encodeURIComponent(message));});
document.querySelectorAll('.video-grid video').forEach(video=>video.addEventListener('play',()=>document.querySelectorAll('.video-grid video').forEach(other=>{if(other!==video)other.pause();})));