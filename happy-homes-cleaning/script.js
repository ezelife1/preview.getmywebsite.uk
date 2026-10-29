const floating=document.getElementById('floating');
const hero=document.querySelector('.hero')||document.querySelector('[data-contact-sentinel]');
function updateContact(){if(!floating||!hero)return;const visible=hero.getBoundingClientRect().bottom<=0;floating.hidden=!visible;floating.classList.toggle('show',visible);document.querySelector('.site-header')?.classList.toggle('past-hero',visible);}
window.addEventListener('scroll',updateContact,{passive:true});window.addEventListener('resize',updateContact);updateContact();
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
const dialog=document.getElementById('lightbox');document.querySelectorAll('.open-photo').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById('large-photo').src=btn.dataset.photo;document.getElementById('large-photo').alt=btn.dataset.caption;document.getElementById('photo-caption').textContent=btn.dataset.caption;dialog.showModal();}));document.getElementById('close-photo')?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
const videos=[...document.querySelectorAll('.video-frame video')];videos.forEach(video=>{const button=video.parentElement.querySelector('.video-play');button.addEventListener('click',()=>video.play().catch(()=>{button.hidden=false;}));video.addEventListener('play',()=>{button.hidden=true;videos.forEach(other=>{if(other!==video)other.pause();});});video.addEventListener('pause',()=>{button.hidden=false;});video.addEventListener('ended',()=>{button.hidden=false;});});

const config=window.HAPPY_CONTACT||{};const number=(config.whatsapp||'').replace(/\D/g,'');
document.querySelectorAll('[data-contact]').forEach(button=>{const kind=button.dataset.contact;const raw=kind==='call'?config.phone:config.whatsapp;if(!raw)return;const a=document.createElement('a');a.className=button.className.replace('contact-placeholder','');a.href=kind==='call'?'tel:'+raw:'https://wa.me/'+raw.replace(/\D/g,'');a.textContent=kind==='call'?'Call '+(config.display||raw):'WhatsApp us';button.replaceWith(a);});
if(number){document.querySelectorAll('.contact-notice').forEach(n=>n.hidden=true);document.getElementById('enquiry-submit')?.replaceChildren(document.createTextNode('Continue to WhatsApp →'));const note=document.getElementById('enquiry-note');if(note)note.textContent='Review your enquiry in WhatsApp, add photographs and send when ready.';}
document.getElementById('wa-form')?.addEventListener('submit',e=>{e.preventDefault();if(!e.currentTarget.reportValidity())return;const v=id=>document.getElementById(id).value.trim();const message=`Hello Happy Homes Cleaning, I'd like to enquire.

Name: ${v('q-name')}
Phone: ${v('q-phone')}
Package: ${v('q-service')}
Area/Postcode: ${v('q-area')}
Preferred schedule: ${v('q-frequency')}
Home and cleaning details: ${v('q-details')}`;if(number){window.location.assign('https://wa.me/'+number+'?text='+encodeURIComponent(message));return;}document.getElementById('enquiry-message').value=message;document.getElementById('prepared').hidden=false;});
document.getElementById('copy-enquiry')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(document.getElementById('enquiry-message').value);document.getElementById('copy-status').textContent='Enquiry copied. Contact details are still pending.';}catch{document.getElementById('copy-status').textContent='Select the prepared message and copy it manually.';}});
