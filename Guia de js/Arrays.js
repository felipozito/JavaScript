console.log("Clase de Arrays ❤️");
const numero = [1, 2, 3];
const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosot", "Septiembre", "Octubre", "Noviembre", "Diciembre");
console.log(numero);
console.log(meses);
console.table(numero);
const numero1 = [1, 2, 3, [4, 5, 6]];
console.log(numero1[3][0]);

//!----------------------------------------------------- recorrer array
console.log(meses.length); // Conoces Tamana de array
console.log("\n");
for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}
//!---------------------------------------------------- Agregar y Eliminar elementos
let carrito = ["television", "Computadora"];
console.log(carrito);
carrito.shift(); //Borra la primera posicion  del array
console.log(carrito);
carrito.unshift("Celular"); //Agregar a la primera posicion array
console.log(carrito);
carrito.push("ipad"); //Agregar en la ultima posicion array
console.log(carrito);
carrito.pop(); //Borra en la ultima posicion array
console.log(carrito);
carrito.splice(0, 1); //(donde empiezo Eliminar, Cuantos elmino)
console.log(carrito);
//!----------------------------Spread Operator--------------------------
carrito = [];
const item1 = {
  nombre: "telefono",
  precio: 100,
};
const item2 = {
  nombre: "ipad",
  precio: 200,
};
const item3 = {
  nombre: "tv",
  precio: 150,
};
let result;
result = [...carrito, item1];
console.log(result);
result = [item2, ...result];
result = [item3, ...result];
console.log(result);
//!-----------------------------Destructuring------------------------------------
const nombre = ["felipe", "juan"];
const [nombre1, nombre2] = nombre;
console.log(`El nombre 1 es ${nombre1} y el nombre 2 es ${nombre2}`);
//!-------------------------------------Methodos------------------------------------
carrito = [
  { nombre: "pelota", tipo: "Futbol" },
  { nombre: "Zapato", tipo: "Futbol" },
  { nombre: "Guantes", tipo: "Box" },
];
for (const item of carrito) {
  console.log(`Los objetos son: ${item.nombre}`);
}
console.log("\n"); //* Solo Recorre el array
carrito.forEach((element) => {
  console.log(element.nombre);
});

const array = carrito.map((item) => {
  //* Crea nuevos arrays del array
  return `Producto ${item.nombre} y tipo es: ${item.tipo}`;
});
console.log(array);
