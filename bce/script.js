const hero = document.querySelector('.hero');
const header = document.querySelector('.site-header');
const contactBar = document.querySelector('.mobilebar');
function updateContactBar() {
  const visible = hero.getBoundingClientRect().bottom <= header.getBoundingClientRect().bottom;
  contactBar.classList.toggle('is-visible', visible);
  contactBar.inert = !visible;
  contactBar.setAttribute('aria-hidden', String(!visible));
}
window.addEventListener('scroll', updateContactBar, {passive:true});
window.addEventListener('resize', updateContactBar);
updateContactBar();
const dialog = document.querySelector('.photo-dialog');
const photo = dialog.querySelector('img');
document.querySelectorAll('.project-photo').forEach(link => {
  link.addEventListener('click', event => {
    if (!dialog.showModal) return;
    event.preventDefault();
    photo.src = link.href;
    photo.alt = link.querySelector('img').alt;
    dialog.showModal();
  });
});
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if(event.target === dialog) dialog.close(); });
