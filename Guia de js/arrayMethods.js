console.log("❤️");
const meses = ["Enero", "Febrero", "Marzo"];
const meses2 = ["Abril", "Mayo", "Junio"];
const carrito = [
  { nombre: "tv", precio: 500 },
  { nombre: "celular", precio: 200 },
  { nombre: "Play", precio: 200 },
];
//*---------------------- Comprobar si el valor Existe------------------------------------
meses.forEach((mes) => {
  if (mes === "Enero") {
    console.log(`${mes} si existe`);
  }
});
// Incluedes
if (meses.includes("Enero")) {
  console.log("Si Existe Enero");
}
//*En Arreglo de Objetos
const existe = carrito.some((item) => item.nombre === "celular");
console.log(existe);
//Uso de Some Array
const existe2 = meses.some((item) => item === "Enero");
console.log(existe2);
//*-------------------------------------------------------------------------------------------------------
//!-----------------------------------------Encontrar Indeces--------------------------------------
meses.forEach((mes, i) => {
  if (mes === "Marzo") {
    console.log(`Encontrado en el indice ${i}`);
  }
});
//Methodo
const indice = meses.findIndex((mes) => mes === "Marzo");
console.log(indice);
//Encontrar indice Objetos
const indice2 = carrito.findIndex((item) => item.precio == 200);
console.log(indice2);

//*-------------------------------------------Reduce----------------------------------------------------
let result = carrito.reduce((total, item) => total + item.precio, 0);
console.log(result);
result = carrito.reduce((total, item) => total + item.nombre, "");
console.log(result);
//*---------------------------------------------------------------------------------------------------------
//!--------------------------------------------Filter-------------------------------------------------------
let result1 = carrito.filter((item) => item.precio < 500);
console.log(result1);
//*-------------------------------------------Find----------------------------------------------------
result = carrito.find((item) => item.nombre == "tv");
console.log(result);
//*---------------------------------------------------------------------------------------------------------
//!--------------------------------------------Every Todos Some Alguno------------------------
console.log(result);
result = carrito.some((item) => item.precio < 1000);
console.log(result);
//*-------------------------------------------Concat----------------------------------------------------
result = meses.concat(meses2, "Resto del anio");
console.log(result);

//*---------------------------------------------------------------------------------------------------------
//!--------------------------------------------Spread Operator---------------------------------------
result = [...meses, ...meses2, "Resto del anio"];
console.log(result);
//!----------------------------------------------------------------------------------------------------------
