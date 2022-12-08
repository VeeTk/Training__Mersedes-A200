const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentsElems = document.querySelectorAll("[data-tabs-field]");
const designTitle = document.querySelectorAll(".design__title");


for (let btn of tabsHandlerElems) {
   btn.addEventListener("click", () => {
      tabsHandlerElems.forEach((item) => {
         item.classList.remove("design-list__item_active");
      });
      btn.classList.add("design-list__item_active");

      tabsContentsElems.forEach((content) => {
         if (content.dataset.tabsField === btn.dataset.tabsHandler) {
            content.classList.remove("hidden");
            designTitle[0].classList.add("hidden");
            designTitle[1].classList.remove("hidden");
         } else {
            content.classList.add("hidden");
            designTitle[0].classList.remove("hidden");
            designTitle[1].classList.add("hidden");
         }
      });
   });
}
