const btns = document.querySelectorAll(".feature__link");
const lists = document.querySelectorAll(".feature-sub");

// btn.addEventListener ('click', () => console.dir(btn)); //Отслеживание клика

// for(let i = 0; i < btns.length; i++) {
//    btns[i].addEventListener("click", () => console.dir(btns[i]));
// }

// Современный способ перебрать массив Selector All
let number = 0;
btns.forEach((btnItem, index) => {
   btnItem.addEventListener("click", () => {
      
      if (number == index && !(lists[index].classList.contains("hidden"))) {

         lists[index].classList.add("hidden");

         btns.forEach((btnItem) => {
            btnItem.classList.remove("feature__link_active");
         });

      }else if (lists[index].classList.contains("hidden")) {

         lists.forEach((listItem) => {
            listItem.classList.add("hidden");
         });

         lists[index].classList.remove("hidden");

         btns.forEach((btnItem) => {
            btnItem.classList.remove("feature__link_active");
         });

         btnItem.classList.add("feature__link_active");
      }
      number = index;
   });
});
