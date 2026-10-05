// Hide and show toggle nav
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.onclick = () => {
    navList.classList.toggle("open");
    menuToggle.classList.toggle("open");
};

// Lightbox (only runs on pages that have it, i.e. the homepage)
const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightbox-close");

if (lightbox && lightboxClose) {
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    document.querySelectorAll(".lightbox-trigger").forEach((el) => {
        el.onclick = (e) => {
            e.preventDefault();
            const img = el.querySelector("img");
            lightboxImg.src = img ? img.src : el.dataset.bg;
            lightboxCaption.textContent = el.dataset.caption || "";
            lightbox.classList.add("open");
        };
    });

    lightboxClose.onclick = () => lightbox.classList.remove("open");

    lightbox.onclick = (e) => {
        if (e.target === lightbox) lightbox.classList.remove("open");
    };

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") lightbox.classList.remove("open");
    });
}