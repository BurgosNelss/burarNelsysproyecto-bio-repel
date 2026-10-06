const menu=document.querySelector('.menu-btn'), links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.querySelectorAll('.accordion button').forEach(btn=>btn.addEventListener('click',()=>btn.classList.toggle('active')));
const top=document.querySelector('.top');
window.addEventListener('scroll',()=>top.classList.toggle('show',window.scrollY>500));
top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
