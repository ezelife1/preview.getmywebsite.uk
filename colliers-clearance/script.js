// Add the business mobile number here in international format, digits only.
// Example: const PHONE_NUMBER = '447700900123';
const PHONE_NUMBER = '';

const callButtons = document.querySelectorAll('.js-call');
const whatsappButtons = document.querySelectorAll('.js-whatsapp');
const notice = document.getElementById('numberNotice');
const closeNotice = document.querySelector('.notice-close');

function showNumberNotice(e){
  if (PHONE_NUMBER) return;
  e.preventDefault();
  notice.hidden = false;
}

callButtons.forEach(btn => {
  if (PHONE_NUMBER) btn.href = `tel:+${PHONE_NUMBER}`;
  else btn.addEventListener('click', showNumberNotice);
});

whatsappButtons.forEach(btn => {
  if (PHONE_NUMBER) {
    const text = encodeURIComponent("Hi Collier's, I'd like a free estimate for a clearance / collection job.");
    btn.href = `https://wa.me/${PHONE_NUMBER}?text=${text}`;
    btn.target = '_blank';
    btn.rel = 'noopener';
  } else btn.addEventListener('click', showNumberNotice);
});

closeNotice?.addEventListener('click', () => notice.hidden = true);
notice?.addEventListener('click', e => { if(e.target === notice) notice.hidden = true; });
document.addEventListener('keydown', e => { if(e.key === 'Escape') notice.hidden = true; });
document.getElementById('year').textContent = new Date().getFullYear();
