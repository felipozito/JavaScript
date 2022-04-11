const encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);
console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);

//Modificaciones del DOM
encabezado.innerHTML = "Probando el Control del DOM ";

const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg";

console.log(encabezado.style);
encabezado.style.color = "red";
encabezado.style.backgroundColor = "gray";
// Agregar Clases
const card = document.querySelector(".card");
card.classList.add("nueva-clase");
console.log(card.classList);
//Traversing DOM
const navegacion = document.querySelector(".navegacion");
console.log(navegacion);
console.log(navegacion.children);
console.log(navegacion.children.length);
console.log(navegacion.children[0].textContent);
//Eliminar elementos de DOM
const primerEnlace = document.querySelector("a");
console.log(primerEnlace);
primerEnlace.remove();
navegacion.removeChild(navegacion.children[2]);
//Crear HTML DE JS
const enlace = document.createElement("a");
enlace.textContent = "Nuevo ";
enlace.href = "/nuevo-enlace";
enlace.className = "enlace";
console.log(enlace);
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[0]);
//! Ejercicio Card De manera Dinamica
const parrafo1 = document.createElement("p");
parrafo1.textContent = "Conciert";
parrafo1.classList.add("categoria", "Concierto");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto Sala ";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "1000% oportunidad  ";
parrafo3.classList.add("precio");

const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log(info);

const img = document.createElement("img");
img.src = "img/hacer2.jpg";

const card1 = document.createElement("div");
card1.classList.add("card");
card1.appendChild(img);
card1.appendChild(info);

console.log(card1);

const container = document.querySelector(".hacer  .contenedor-cards");
container.insertBefore(card1, container.children[0]);
