console.log("Clase de Strings ❤️");
const producto1 = "Television";
const producto2 = String("Radio");
const producto3 = new String("Computadora"); //!Creo objeto String

console.log(producto1);
console.log(producto2);
console.log(producto3);

// ? Metodos

const producto = "Monitor 20 pulgadas";
console.log(producto.length); //** Longuitud del String
console.log(producto.includes("Monitor")); //**Encuentrar Caracteres en String
//!Concadenar Strings
const tv = "Lg 21 pulgadas";
const precio = "100 USD";
console.log(tv.concat(precio));
console.log("El producto : " + tv + "Tiene precio de: " + precio);
console.log(`El producto: ${tv} tiene precio de ${precio}`);
//!Cortar Espacio en Blanco Strinds
console.log(producto.length);
console.log(producto.trim()); //Limpia el espacio en blanco al inicio trimStart y al Final trimEnd trim limpia ambos
//!Metodos String
console.log(producto.replace("pulgadas", "''")); //* remplaza palabras
console.log(producto.slice(0, 8)); //* corta palabras
console.log(producto.substring(0, 8)); //* Corta palabras
console.log(producto.charAt(0)); //*selecciona el caracter seleccionado
console.log(producto.split(" "));
console.log(producto.toUpperCase());
console.log(producto.toLowerCase());
//!------------------------------------------------------
