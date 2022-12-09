const modal = (btn, modal) => {
   const moreBtn = document.querySelector(btn);
   const modalWindow = document.querySelector(modal);

   moreBtn.addEventListener("click", () => {
      modalWindow.classList.remove("hidden");
   });

   modalWindow.addEventListener("click", (event) => {
      const target = event.target;

      if (
         target.classList.contains("overlay") ||
         target.classList.contains("modal__close")
      ) {
         modalWindow.classList.add("hidden");
      }
   });
}

export default modal;
