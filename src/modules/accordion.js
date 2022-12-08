const accordion = (btns, sub) => {
   const btns = document.querySelectorAll(btns);
   const sub = document.querySelectorAll(sub);

   // btn.addEventListener ('click', () => console.dir(btn)); //Отслеживание клика

   // for(let i = 0; i < btns.length; i++) {
   //    btns[i].addEventListener("click", () => console.dir(btns[i]));
   // }

   // Современный способ перебрать массив Selector All
   let number = 0;
   let i = 0;
   btns.forEach((btnItem, index) => {
      btnItem.addEventListener("click", () => {
         btns.forEach((btnItem, index) => {
            btnItem.classList.remove("feature__link_active");
         });

         btnItem.classList.add("feature__link_active");

         lists.forEach((listItem, index) => {
            listItem.classList.add("hidden");
         });

         lists[index].classList.remove("hidden");

         if (index == number && i % 2 == 0) {
            btns.forEach((btnItem, index) => {
               btnItem.classList.remove("feature__link_active");
            });

            lists.forEach((listItem, index) => {
               listItem.classList.add("hidden");
            });
         }
         i++;
         number = index;
         console.log(i);
      });
   });
}

export default accordion;
