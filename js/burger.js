let linksHeadForClose = document.querySelectorAll(".menu-list__link");
const burger = document.querySelector(".humburger-menu");
const menuElem = document.querySelector(".menu");

const toggleMenu = () => {
   menuElem.classList.toggle("menu-active");
   burger.classList.toggle("humburger-menu-active");
};

burger.addEventListener("click", () => {
   toggleMenu();
});

linksHeadForClose.forEach((close) => {
   close.addEventListener("click", () => {
      menuElem.classList.remove("menu-active");
      burger.classList.remove("humburger-menu-active");
   });
});
