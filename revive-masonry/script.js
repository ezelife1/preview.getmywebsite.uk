/* Replace this demo number with the business number in international digits.
   Example: 447123456789. Then remove .demo-note from index.html. */
const CONTACT_NUMBER = '447700900000';
const WHATSAPP_URL = `https://wa.me/${CONTACT_NUMBER}`;
document.querySelectorAll('[data-call]').forEach(link => link.href = `tel:+${CONTACT_NUMBER}`);
document.querySelectorAll('[data-wa]').forEach(link => link.href = WHATSAPP_URL);
document.getElementById('year').textContent = new Date().getFullYear();
const hero = document.getElementById('home');
const floatingContact = document.getElementById('floating-contact');
const syncContact = () => { floatingContact.hidden = hero.getBoundingClientRect().bottom > 0; };
window.addEventListener('scroll', syncContact, {passive:true});
window.addEventListener('resize', syncContact);
syncContact();
document.getElementById('quote-form').addEventListener('submit', event => {
 event.preventDefault();
 const form = event.currentTarget;
 if (!form.reportValidity()) return;
 const data = new FormData(form);
 const message = `Hello Revive, I'd like a quote.\n\nName: ${data.get('name')}\nPostcode: ${data.get('postcode')}\nService: ${data.get('service')}\n\n${data.get('message')}\n\nI can send photos of the area in this chat.`;
 window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
