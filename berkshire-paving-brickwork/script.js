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
 const business="Berkshire Paving & Brickwork";
 const message=`Hi ${business}, I'd like a quote.\n\nName: ${data.get('name').trim()}\nService: ${data.get('service')}\nArea/Postcode: ${data.get('area').trim()}\nDetails: ${data.get('details').trim()}`;
 window.open('https://wa.me/447751146472?text='+encodeURIComponent(message),'_blank','noopener');
});
