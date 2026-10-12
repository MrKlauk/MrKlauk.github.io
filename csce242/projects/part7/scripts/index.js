// Hide and show toggle nav
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.onclick = () => {
    navList.classList.toggle("open");
    menuToggle.classList.toggle("open");
};