const hero=document.querySelector('.hero'),bar=document.querySelector('.mobile-book');
new IntersectionObserver(([e])=>bar.classList.toggle('show',!e.isIntersecting),{threshold:.05}).observe(hero);