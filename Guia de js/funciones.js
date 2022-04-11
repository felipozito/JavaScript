console.log("❤️");
function sumar() {
  console.log(2 + 2);
}
sumar();
//*funcion Expresion
const sumar2 = function () {
  console.log(3 + 3);
};
sumar2();
//! Debido al Hoisting la funcion expresion se ejecuta cuando primero se crea
//! El caso de la funcion normal se puede ejecutar y luego crear la funcion
//*----------------------------------Funciones Nativas de JS------------------------------------------
// alert("Hubo Error");
// prompt("Cual es tu edad");
// parseInt("20");
//-----------------------------------------Metodos Y Funciones
let numero1 = 20;
let numero2 = "20";
console.log(parseInt(numero2)); // Funcion
console.log(numero1.toString()); // Metodo
//-------------------------Funciones Con Parametros Y argumentos

function suma(a, b) {
  console.log(a + b);
}
function Saludar(nombre, apellido = "") {
  console.log(`hola ${nombre}  ${apellido}`);
}
Saludar("felipe", "asimbaya");
Saludar("felipe");
//*-----------------------------------Comunicacion de Funciones-----------------------------------
IniciarApp();
function IniciarApp() {
  console.log("Iniciando APP");
  SegundaFuncion();
}
function SegundaFuncion() {
  console.log("Cargando Archivos");
  AutenticandoUsuario("felipe");
}
function AutenticandoUsuario(user) {
  console.log("Autenticando Usuario.....");
  console.log("Login OK");
  console.log(`Bienvenido ${user}`);
}
//-----------------------------------------------------Retorno deValores-------------------------------------------
function multiplicacion(a, b) {
  return a * b;
}
const resultado = multiplicacion(5, 5);
console.log(`el Resultado es : ${resultado}`);

let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}
function calcularImpuesto(total) {
  return total * 0.1;
}

total = agregarCarrito(300);
total = agregarCarrito(500);
total = agregarCarrito(200);

console.log(`Precio carrito es: ${total}`);
const totalPagar = calcularImpuesto(total);
console.log(`el total a pagar es ${totalPagar}`);
//!-----------------------------------------Metodos De Propiedad (Objetos)---------------------------------------------------------
const ipod = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion ${id}`);
  },
  pausa: function () {
    console.log("Pausando musica");
  },
  borrar: function (id) {
    console.log(`Borrando Cancion ${id}`);
  },
};

ipod.reproducir(30);
ipod.pausa();
ipod.borrar(20);
//---------------------------------------------Arrow Function----------------------------------------//
const arrow = (tecnologia1, tecnologia2) => `Aprendiendo ${tecnologia1} y ${tecnologia2}`;
console.log(arrow("JAVASCRIPT", "Node JS"));
//=============================MAP Y FOR EACH
const carrito = [
  { nombre: "tv", precio: 500 },
  { nombre: "celular", precio: 200 },
  { nombre: "mouse", precio: 50 },
  { nombre: "ipad", precio: 800 },
];
const nuevoCarrito = carrito.map((item) => `${item.nombre} tiene un precio de ${item.precio}`);
console.log(nuevoCarrito);
//!-------------------------------------------------------------------------------------------
const radio = {
  reproducir: (cancion) => console.log(`Reproduciendo la  cancion${cancion}`),
  detener: (cancion) => console.log(`Pausando la  cancion${cancion}`),
  borrar: (cancion) => console.log(`Borrando la  cancion${cancion}`),
  reproducir: (playlist) => console.log(`Reproduciendo la  cancion${playlist}`),
  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Se Anadio la cancion ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};
radio.reproducir(10);
radio.nuevaCancion = "Enter Sandman";
radio.obtenerCancion;
