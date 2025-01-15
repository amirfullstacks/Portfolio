document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavbar = document.querySelector('.mobile-navbar');

    menuToggle.addEventListener('click', function() {
        mobileNavbar.classList.toggle('open');
    });
});