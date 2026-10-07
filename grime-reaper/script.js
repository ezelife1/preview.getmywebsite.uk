const header=document.querySelector('.header');
const hero=document.querySelector('.hero');
const floating=document.querySelector('.floating-contact');
function updateContact(){floating.hidden=hero.getBoundingClientRect().bottom>0;}
window.addEventListener('scroll',updateContact,{passive:true});window.addEventListener('resize',updateContact);updateContact();
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}));
const dialog=document.querySelector('.lightbox');
document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>{dialog.querySelector('img').src=b.dataset.photo;dialog.querySelector('img').alt=b.querySelector('img').alt;dialog.showModal();}));
dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
document.querySelector('#year').textContent=new Date().getFullYear();
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.querySelector('.hero video').pause();

const quoteForm=document.querySelector('#whatsapp-quote');
quoteForm.addEventListener('submit',event=>{
  event.preventDefault();
  if(!quoteForm.reportValidity())return;
  const fields=new FormData(quoteForm);
  const message=["Hi Grime Reaper, I'd like a free quote.","",`Name: ${String(fields.get('customerName')).trim()}`,`Postcode: ${String(fields.get('postcode')).trim()}`,`Service: ${fields.get('service')}`,"",`Job details: ${String(fields.get('details')).trim()}`].join('\n');
  window.location.href='https://wa.me/447946659965?text='+encodeURIComponent(message);
});
