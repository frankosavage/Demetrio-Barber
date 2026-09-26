/* TOGGLE MENU */
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/* CERRAR MENU AL HACER CLICK */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

/* SCROLL SUAVE (solo UNA vez y bien hecho) */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const imgGrande = document.getElementById("img-grande");

document.querySelectorAll(".img-click").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        imgGrande.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});