const navbarToggle = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".nav-links");

navbarToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
