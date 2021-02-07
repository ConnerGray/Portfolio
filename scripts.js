const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuicon = document.querySelector('hamburger');
const navbar = document.querySelector('navbar');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});


