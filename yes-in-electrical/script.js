document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".service-list article,.project,.review-grid blockquote,.area-list span").forEach((el)=>{
  el.classList.add("reveal");
  observer.observe(el);
});
