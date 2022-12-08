const modal = document.querySelector(".modal");
const moreBtn = document.querySelector(".more");

moreBtn.addEventListener("click", () => {
   modal.classList.remove("hidden");
});

modal.addEventListener("click", (event) => {
   const target = event.target;

   if (
      target.classList.contains("overlay") ||
      target.classList.contains("modal__close")
   ) {
      modal.classList.add("hidden");
   }
});
