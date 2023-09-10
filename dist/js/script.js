// Navbarfixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const ToTop = document.querySelector('#totop');

    if(window.pageYOffset > fixednav){
        header.classList.add('navbar-fixed');
        ToTop.classList.remove('hidden');
        ToTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        ToTop.classList.remove('flex');
        ToTop.classList.add('hidden');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// click di luar hamburger

window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// dark-mode-toggle

const darktoggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktoggle.addEventListener('click', function(){
    if(darktoggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// pindahkan posisi toggle

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darktoggle.checked = true;
  } else {
    darktoggle.checked = false;
  }