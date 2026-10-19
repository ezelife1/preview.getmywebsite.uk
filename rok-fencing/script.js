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
 const business="ROK Fencing & Gates";
 const message=`Hi ${business}, I'd like a quote.\n\nName: ${data.get('name').trim()}\nService: ${data.get('service')}\nArea/Postcode: ${data.get('area').trim()}\nDetails: ${data.get('details').trim()}`;
 window.open('https://wa.me/447424586503?text='+encodeURIComponent(message),'_blank','noopener');
});

const heroVideo=document.getElementById('hero-video'),videoToggle=document.getElementById('video-toggle');if(heroVideo&&videoToggle){function syncVideoButton(){videoToggle.textContent=heroVideo.paused?'Play video':'Pause video';videoToggle.setAttribute('aria-label',videoToggle.textContent+' in hero')}if(matchMedia('(prefers-reduced-motion: reduce)').matches){heroVideo.autoplay=false;heroVideo.pause()}videoToggle.addEventListener('click',()=>{if(heroVideo.paused)heroVideo.play().catch(()=>{});else heroVideo.pause()});heroVideo.addEventListener('play',syncVideoButton);heroVideo.addEventListener('pause',syncVideoButton);syncVideoButton()}
