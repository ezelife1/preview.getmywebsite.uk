const floating=document.getElementById('floating');
const hero=document.getElementById('hero');
function updateFloating(){
  const show=hero.getBoundingClientRect().bottom<=0;
  floating.hidden=!show;
  floating.setAttribute('aria-hidden',String(!show));
  floating.querySelectorAll('a').forEach(a=>a.tabIndex=show?0:-1);
}
addEventListener('scroll',updateFloating,{passive:true});
addEventListener('resize',updateFloating);
addEventListener('pageshow',updateFloating);
updateFloating();
const form=document.getElementById('wa-form');
form.addEventListener('submit',function(e){
 e.preventDefault();if(!form.reportValidity())return;
 const data=new FormData(form);
 const business="Nuttall Landscapes";
 const message=`Hi ${business}, I'd like a quote.\n\nName: ${data.get('name').trim()}\nService: ${data.get('service')}\nArea/Postcode: ${data.get('area').trim()}\nDetails: ${data.get('details').trim()}`;
 window.open('https://wa.me/447523305486?text='+encodeURIComponent(message),'_blank','noopener');
});

const hv=document.getElementById('hero-video'),vt=document.getElementById('video-toggle');if(hv&&vt){const reduced=matchMedia('(prefers-reduced-motion: reduce)');function syncVideo(){vt.textContent=hv.paused?'Play video':'Pause video';vt.setAttribute('aria-label',vt.textContent+' in hero')}if(reduced.matches){hv.autoplay=false;hv.pause()}vt.addEventListener('click',()=>{if(hv.paused)hv.play().catch(()=>{});else hv.pause()});hv.addEventListener('play',syncVideo);hv.addEventListener('pause',syncVideo);syncVideo();document.querySelectorAll('.work-video video').forEach(v=>v.addEventListener('play',()=>{hv.pause();document.querySelectorAll('.work-video video').forEach(other=>{if(other!==v)other.pause()})}))}
