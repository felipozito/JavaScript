console.log("❤️");

const nav = document.querySelector(".navegacion");

nav.addEventListener("mouseout", () => {
  console.log("Saliendo de Nav");
  nav.style.backgroundColor = "white";
});

nav.addEventListener("mouseenter", () => {
  console.log("Entrando Nav");
  nav.style.backgroundColor = "black";
});

/**Eventos de Mouse
 * mousedown=Similar Click
 * click
 * dbclick Doble Click
 * Mouseup Cuando Sueltas mouse
 */
//! Eventos Input Teclado

const busqueda = document.querySelector(".busqueda");
// busqueda.addEventListener("keydown", () => {
//   console.log("Escribiendo");
// });
// busqueda.addEventListener("keyup", () => {
//   console.log("Solte Tecla");
// });
// busqueda.addEventListener("blur", () => {
//   console.log("Fuera Zona");
// });
// busqueda.addEventListener("copy", () => {
//   // cut , paste
//   console.log("Copio El Archivo");
// });
busqueda.addEventListener("input", (e) => {
  if (e.target.value === "") {
    console.log("Error Validacion");
  } else {
    console.log(e.target.value);
  }
});
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", ValidarFormulario);
function ValidarFormulario() {
  e.preventDefault();
  console.log("Buscando");
  console.log(e.target.value);
}
//**Eventos de scroll */
window.addEventListener("scroll", () => {
  const scrollPx = window.scrollY;
  const premium = document.querySelector(".premium");
  const ubicacion = premium.getBoundingClientRect();
  if (ubicacion.top < 100) {
    console.log("El elemento es visible");
    console.log(`Elemento visible a :  ${scrollPx} px`);
  } else {
    console.log("Aun no ");
  }
});
