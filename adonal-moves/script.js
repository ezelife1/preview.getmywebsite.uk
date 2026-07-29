const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function submitQuote(event){
  event.preventDefault();
  const form = new FormData(event.target);
  const message = `Hello Adonai Moves, I'd like a quote.%0A%0AName: ${encodeURIComponent(form.get('name'))}%0APhone: ${encodeURIComponent(form.get('phone'))}%0ACollection: ${encodeURIComponent(form.get('from'))}%0ADelivery: ${encodeURIComponent(form.get('to'))}%0ADetails: ${encodeURIComponent(form.get('details'))}`;
  const whatsappNumber = '440000000000'; // Replace with the real WhatsApp number.
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  return false;
}
