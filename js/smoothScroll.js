/** @format */

const linksHead = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");
const newArray = [...linksHead, mainScroll];

newArray.forEach((link) => {
   link.addEventListener("click", (event) => {
      event.preventDefault();

      const ID = event.target.getAttribute("href").substr(1);

      seamless.scrollIntoView(document.getElementById(ID), {
         behavior: "smooth",
         block: "start",
         inline: "center",
      });
   });
});
