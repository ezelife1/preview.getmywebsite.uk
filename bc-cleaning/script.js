const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');
menuBtn?.addEventListener('click', () => {
  const open = menuBtn.classList.toggle('open');
  menu.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menu.setAttribute('aria-hidden', !open);
});
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>{
  menu.classList.remove('open'); menuBtn.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); menu.setAttribute('aria-hidden','true');
}));
const io = new IntersectionObserver(entries => entries.forEach(e => {if(e.isIntersecting)e.target.classList.add('show')}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
