const burger = (humburgerBtn, menu, linksForClose) => {
   const burger = document.querySelector(humburgerBtn);
   const menuElem = document.querySelector(menu);
   const linksHeadForClose = document.querySelectorAll(linksForClose);

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
}

export default burger;
