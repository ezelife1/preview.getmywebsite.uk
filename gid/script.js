
const btn=document.querySelector('.menu-btn'), menu=document.querySelector('.mobile-menu');
btn?.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!open));menu.hidden=open;});
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{menu.hidden=true;btn.setAttribute('aria-expanded','false')}));
