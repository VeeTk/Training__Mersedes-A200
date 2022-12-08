const tabs = (title, dataHandler, dataField) => {
   const designTitle = document.querySelectorAll(title);
   const tabsHandlerElems = document.querySelectorAll(dataHandler);
   const tabsContentsElems = document.querySelectorAll(dataField);

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
}

export default tabs;
