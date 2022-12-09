const smoothScroll = (links, scroll) => {
   const linksHead = document.querySelectorAll(links);
   const mainScroll = document.querySelector(scroll);
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
};

export default smoothScroll;


