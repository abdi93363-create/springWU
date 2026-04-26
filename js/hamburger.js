var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});