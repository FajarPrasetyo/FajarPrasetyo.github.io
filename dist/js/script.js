// NAVBAR FIXED
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


// HUMBURGER ACTIVE
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
   
// DARK MODE
const darkToggle = document.querySelector('#dark-toggle')
const html  = document.querySelector('html')

darkToggle.addEventListener('click',function(){
    if (darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }
