const menu = document.querySelector('#menu-icon');
const navigationBar = document.querySelector('.navbar');
const sec = document.querySelectorAll('section');
const link = document.querySelectorAll('header nav a');


menu.onclick = function() {
    menuIcon.classList.toggle('fa-x');
    menuIcon.classList.toggle('active');
};

window.onscroll = function() {
    sec.forEach(function(sec) {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            link.forEach(function(links) {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};


