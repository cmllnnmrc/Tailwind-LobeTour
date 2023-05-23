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

const faqs = document.querySelectorAll(".faq__ques h4");
faqs.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});

const faqNav = document.querySelectorAll(".star-nav-link");
const faqContent = document.querySelectorAll(".coffee__tab__content");
faqNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveStar();
    nav.classList.add("active");
    const activeContent = document.querySelector(`#${nav.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  faqNav.forEach((nav) => {
    nav.classList.remove("active");
  });
}

function removeActiveContent() {
  faqContent.forEach((nav) => {
    nav.classList.remove("active");
  });
}
