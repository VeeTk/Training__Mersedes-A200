const modal = (moreBtn, modal) => {
   const moreBtn = document.querySelector(moreBtn);
   const modal = document.querySelector(modal);

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
}

export default modal;
