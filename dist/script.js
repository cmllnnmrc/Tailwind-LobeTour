const faqs = document.querySelectorAll(".faq__ques h4");
faqs.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});

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

const faqNav = document.querySelectorAll(".faq-nav-link");
const faqContent = document.querySelectorAll(".faq__tab__content");
faqNav.forEach((faq) => {
  faq.addEventListener("click", () => {
    removeActiveFaq();
    faq.classList.add("active");
    const activeFaqContent = document.querySelector(`#${faq.id}-content`);
    removeActiveFaqContent();
    activeFaqContent.classList.add("active");
  });
});

function removeActiveFaq() {
  faqNav.forEach((faq) => {
    faq.classList.remove("active");
  });
}

function removeActiveFaqContent() {
  faqContent.forEach((faq) => {
    faq.classList.remove("active");
  });
}
