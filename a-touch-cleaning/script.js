const floating=document.getElementById('floating');
const hero=document.querySelector('.hero');
function updateFloating(){
 const show=hero.getBoundingClientRect().bottom<=0;
 floating.classList.toggle('show',show);
 floating.setAttribute('aria-hidden',String(!show));
 floating.querySelectorAll('a').forEach(a=>a.tabIndex=show?0:-1);
}
window.addEventListener('scroll',updateFloating,{passive:true});
window.addEventListener('resize',updateFloating);updateFloating();

document.getElementById('wa-form').addEventListener('submit',function(e){
 e.preventDefault();if(!this.reportValidity())return;
 const message=`Hi The A Touch Cleaning Co., I'd like a quote.
Name: ${document.getElementById('q-name').value.trim()}
Service: ${document.getElementById('q-service').value}
Area/Postcode: ${document.getElementById('q-area').value.trim()}
Details: ${document.getElementById('q-details').value.trim()}

I understand this is a quote request, not a confirmed booking.`;
 window.open('https://wa.me/447700900123?text='+encodeURIComponent(message),'_blank','noopener');
});
