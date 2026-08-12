document.querySelectorAll('.compare').forEach(card=>{
  const range=card.querySelector('input');
  const before=card.querySelector('.before-wrap');
  const divider=card.querySelector('.divider');
  const update=()=>{
    const v=range.value;
    before.style.width=v+'%';
    divider.style.left=v+'%';
    const img=before.querySelector('img');
    img.style.width=(10000/Math.max(v,1))+'%';
  };
  range.addEventListener('input',update);
  update();
});
const floating=document.getElementById('floatingContact');
const hero=document.querySelector('.hero');
const io=new IntersectionObserver(([entry])=>{
  floating.classList.toggle('show',!entry.isIntersecting);
},{threshold:.08});
io.observe(hero);
