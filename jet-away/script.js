
// Mobile floating Call + WhatsApp appears ONLY after the hero has been completely passed.
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const bar = document.getElementById('mobileContact');

  function updateBar(){
    if (!hero || !bar) return;
    const mobile = window.matchMedia('(max-width:700px)').matches;
    const heroPassed = hero.getBoundingClientRect().bottom <= 0;
    bar.classList.toggle('visible', mobile && heroPassed);
  }
  updateBar();
  window.addEventListener('scroll', updateBar, {passive:true});
  window.addEventListener('resize', updateBar);

  const compare = document.getElementById('compare');
  const beforeWrap = document.getElementById('beforeWrap');
  const divider = document.getElementById('divider');
  if (compare && beforeWrap && divider) {
    const setPos = (clientX) => {
      const r = compare.getBoundingClientRect();
      let pct = ((clientX-r.left)/r.width)*100;
      pct = Math.max(0,Math.min(100,pct));
      beforeWrap.style.width = pct+'%';
      divider.style.left = pct+'%';
    };
    let dragging = false;
    compare.addEventListener('pointerdown',e=>{dragging=true;compare.setPointerCapture(e.pointerId);setPos(e.clientX)});
    compare.addEventListener('pointermove',e=>{if(dragging)setPos(e.clientX)});
    compare.addEventListener('pointerup',()=>dragging=false);
    compare.addEventListener('pointercancel',()=>dragging=false);
  }
});
(function(){const hero=document.getElementById('hero'),bar=document.getElementById('mobileContact');if(!hero||!bar)return;function setBar(){const r=hero.getBoundingClientRect();bar.classList.toggle('show',r.bottom<=0)}window.addEventListener('scroll',setBar,{passive:true});window.addEventListener('resize',setBar);setBar();})();
