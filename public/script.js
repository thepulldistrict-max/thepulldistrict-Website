const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
const toast=document.getElementById('toast');
const cartCount=document.getElementById('cart-count');
let cart=0;

function showToast(message){
  if(!toast) return;
  toast.textContent=message;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(()=>toast.classList.remove('show'),2600);
}

if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
  }));
}

document.querySelectorAll('.cart-add').forEach(button=>{
  button.addEventListener('click',()=>{
    cart+=1;
    if(cartCount) cartCount.textContent=String(cart);
    showToast(button.dataset.product+' wurde vorgemerkt. Die Shop-Anbindung folgt.');
  });
});

document.querySelectorAll('.heart').forEach(button=>{
  button.addEventListener('click',()=>{
    button.textContent=button.textContent==='♡'?'♥':'♡';
  });
});

const newsletter=document.getElementById('newsletter-form');
if(newsletter){
  newsletter.addEventListener('submit',event=>{
    event.preventDefault();
    showToast('Newsletter-Anmeldung wird noch angebunden.');
  });
}

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();
