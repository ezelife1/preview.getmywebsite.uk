const hero=document.querySelector('.hero'),floating=document.querySelector('#floating');
function update(){floating.hidden=hero.getBoundingClientRect().bottom>0}
addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');
function setMenu(open){menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
const dialog=document.querySelector('#lightbox'),zoom=document.querySelector('#zoom');
document.querySelectorAll('[data-photo]').forEach(btn=>btn.addEventListener('click',()=>{zoom.src=btn.dataset.photo;zoom.alt=btn.dataset.caption;document.querySelector('#caption').textContent=btn.dataset.caption;dialog.showModal()}));
document.querySelector('#close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const form=document.querySelector('#enquiry'),message=document.querySelector('#message'),status=document.querySelector('#status');
function draft(fields){return ['Hi Gemma, I’d like to enquire about an appointment.','',...Object.entries({Name:fields.name,Service:fields.service,'Preferred days':fields.days,Details:fields.details}).map(([k,v])=>k+': '+(v.trim()||'Not specified'))].join('\n')}
form?.addEventListener('submit',e=>{e.preventDefault();message.value=draft(Object.fromEntries(new FormData(form)));document.querySelector('#draft').hidden=false;status.textContent='';message.focus()});
document.querySelector('#copy')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(message.value);status.textContent='Copied. Open Instagram and paste into your message.'}catch{message.focus();message.select();status.textContent='Your message is selected. Copy it, then paste it into Instagram.'}});
