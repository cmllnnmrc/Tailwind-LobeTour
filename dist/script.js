const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
  header.classList.toggle("open");
});

const links = document.querySelectorAll(".footer__item h5");
links.forEach((down) => {
  down.addEventListener("click", () => {
    down.nextElementSibling.classList.toggle("open");
    down.querySelector("i").classList.toggle("open");
  });
});