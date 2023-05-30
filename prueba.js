function showAlert() {
  alert("¡Hola, esta es una alerta desde JavaSript!");
}

document.getElementById("myForm");
addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}
function validateForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert("Por favor ingrese un correo electrónico válido.");
  } else {
    alert("Correo electrónico enviado correctamente.");
  }
}

//       document
//         .querySelector(".nav-links")
//         .classList.toggle("nav-links-responsive");
//     });// newFunction();
// function newFunction() {
//   document
//     .querySelector("button.button-menu-toggle")
//     .addEventListener("click", function () {

// }
document.querySelector(".button-menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Evita el comportamiento de enlace predeterminado

    var href = link.getAttribute("href"); // Obtén el valor del atributo href del enlace
    if (href) {
      window.location.href = href; // Redirige al usuario a la página correspondiente
    }
  });
});

