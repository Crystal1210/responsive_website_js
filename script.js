document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('nav');
    const menuLink = document.getElementById("menu-link");

    window.onscroll = () => {
        if(window.scrollY > 0) {
            navbar.style.background = '#eefff9';
        } else {
            navbar.style.background = 'transparent';
        }
    };
});

function toggleMenu() {
    const menuLink = document.getElementById("menu-link");
    menuLink.classList.toggle('show-menu');
}
