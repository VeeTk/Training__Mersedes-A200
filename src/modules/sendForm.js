const sendForm = (form, input, formButton) => {
   const formTestDrive = document.querySelector(form);
   const inputs = document.querySelectorAll(input);
   const formBtn = document.querySelector(formButton);

   formBtn.disabled = true;
   for (let input of inputs) {
      input.oninput = function () {
         if (
            inputs[0].value !== "" &&
            inputs[0].value.charAt(0) !== " " &&
            inputs[1].value !== "" &&
            inputs[1].value.charAt(0) !== " " &&
            inputs[2].value !== "" &&
            inputs[2].value.charAt(0) !== " "
         ) {
            formBtn.disabled = false;
         } else {
            formBtn.disabled = true;
         }
      };
   }

   // https://jsonplaceholder.typicode.com
   formTestDrive.addEventListener("submit", (event) => {
      event.preventDefault();

      let data = {};

      for (let { name, value } of formTestDrive.elements) {
         if (name) {
            data[name] = value;
         }
      }

      fetch("https://jsonplaceholder.typicode.com/posts", {
         method: "POST",
         body: JSON.stringify(data),
      })
         .then((response) => {
            if (response.status === 200 || response.status === 201) {
               return response.json();
            } else {
               throw new Error(response.status);
            }
         })
         .then((data) => {
            alert("Данные успешно отправлены");
            formTestDrive.reset();
         })
         .catch((error) => {
            alert("Произошла ошибка, статус: " + error.message);
         });
      formBtn.disabled = true;
   });
};

export default sendForm;
