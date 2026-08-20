
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".main-nav");
toggle?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded",String(open));
});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");
  toggle?.setAttribute("aria-expanded","false");
}));
const hero=document.querySelector(".hero"),bar=document.getElementById("mobileFloat");
if(hero&&bar){
  new IntersectionObserver(([entry])=>{
    bar.classList.toggle("visible",!entry.isIntersecting);
  },{threshold:.08}).observe(hero);
}
