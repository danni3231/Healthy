const form = document.querySelector(".footer__form");

console.log(form);

const validateForm = (n, e, r) => {
   if (n === "") {
      alert("Ingresa tu nombre");
      return false;
   } else if (e === "") {
      alert("Ingresa tu correo");
      return false;
   } else if (r === "") {
      alert("Escribe algo en razones, tu opinion es muy valiosa para nosotros");
      return false;
   }

   return true;
};

form.addEventListener("submit", (e) => {
   e.preventDefault();
   const name = form.name.value;
   const email = form.email.value;
   const reasons = form.reasons.value;

   if (validateForm(name, email, reasons)) {
      const person = {
         name: name,
         email: email,
         reasons: reasons,
      };

      console.log(person);

      db.collection("persons")
         .add(person)
         .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert(`gracias por registrarte ${person.name}`);
         })
         .catch((error) => {
            console.error("Error adding person: ", error);
         });
   }
});
