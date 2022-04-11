console.log("Clase de Objectos❤️");

const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: { peso: "1kg", medida: "1m" },
    ano: "2022",
    marca: "Sony",
  },
};

console.log(producto);
console.log(producto.nombre);

//! Agregar propiedades
producto.cantidad = 10;
console.log(producto);
//!Eliminar propiedades
delete producto.disponible;
console.log(producto);
//! Acceder a los valores Y Destructuring
//const nombre = producto.nombre;  Forma Antigua
const { nombre, precio, cantidad } = producto;
console.log(`item: ${nombre} valor ${precio} unidades ${cantidad}`);
console.log(producto);

const {
  informacion: { marca },
} = producto;
const {
  informacion: {
    medidas: { peso },
  },
} = producto;
console.log(`item: ${nombre} valor ${precio} unidades ${cantidad}`);
console.log(producto.informacion.medidas.peso);
console.log(marca);
console.log(peso);
//! Metodos de Objetos
/*
"Use strict"
Object.freeze(producto) //No se puede modificar ni agregar ni Borrar
Object.seal(producto) //Solo se puede modificar 
*/
//*-----------------------------Unir Objetos
const item1 = {
  nombre: "tv",
  marca: "lg",
};
const item2 = {
  precio: 10,
  cantidad: 10,
};
//!-------------------------------------Spread Operation Mas Utilizado----------------------------
const resultado = Object.assign(item1, item2);
const result = { ...item1, ...item2 };
console.log(resultado);
console.log(result);
//!-------------------------------------------------------------------------------------------------------------
//*  ---------------------------Funciones en objetos
const item3 = {
  nombre: "Computador",
  precios: 200,
  disponible: true,
  mostrarInfo: function () {
    console.log(`el producto ${this.nombre} cuesta ${this.precios}`); //! This busca dentro del mismo objeto
  },
};
item3.mostrarInfo();
//*------------------------------- Object Constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible - true;
}

const item4 = new Producto("Iphone", 1000);
const item5 = new Producto("table", 3000);
console.log(item4);
console.log(item5);
console.log(Object.keys(item4));
console.log(Object.values(item4));
console.log(Object.entries(item4));
