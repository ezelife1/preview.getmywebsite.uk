(() => {
  const compare = document.getElementById('compare');
  const before = document.getElementById('beforeWrap');
  const divider = document.getElementById('divider');
  if (!compare || !before || !divider) return;
  let active = false;
  function setPosition(clientX){
    const r = compare.getBoundingClientRect();
    const x = Math.max(0, Math.min(r.width, clientX - r.left));
    const pct = (x / r.width) * 100;
    before.style.width = pct + '%';
    divider.style.left = pct + '%';
    const img = before.querySelector('img');
    if (img) img.style.width = r.width + 'px';
  }
  const start = e => { active = true; compare.setPointerCapture?.(e.pointerId); setPosition(e.clientX); };
  const move = e => { if(active) setPosition(e.clientX); };
  const end = () => active = false;
  compare.addEventListener('pointerdown', start);
  compare.addEventListener('pointermove', move);
  compare.addEventListener('pointerup', end);
  compare.addEventListener('pointercancel', end);
  window.addEventListener('resize', () => { const r=compare.getBoundingClientRect(); const img=before.querySelector('img'); if(img) img.style.width=r.width+'px'; });
  const r=compare.getBoundingClientRect(); const img=before.querySelector('img'); if(img) img.style.width=r.width+'px';
})();
