/////////////// FUNDAMENTOS/////////////////////////
console.log("Esta es la consola ❤️"); // Uso de Consola String
console.log("tambien es String");
console.log(2); //Numero
console.log(2, 1); //Vector

let x = 10; //Declaro Variables
let y = 15; //Declaro Variables
let answer = x + y;
console.log("x:" + x);
console.log("y:" + y);
console.log(x + "+" + y);
console.log(answer);

if (x > y) {
  console.log("mayor");
}
if (x < y) {
  console.log("Menor");
}
///////////////////////////////////////////////////////////////////////////
function Operaciones() {
  let number1 = prompt("Ingrese el numero 1"); //Ingresa Texto
  let number2 = prompt("Ingrese el numero 2"); //IngresaTexto
  let result = parseInt(number1) + parseInt(number2);
  console.log(result);
}
///////////////////////////////////////////////////////////////////////////
function alerta() {
  alert("Fundamentos JAVASCRIPT"); //Alertas
}
////////////////////////////////////////////////////////////////////////////
function Switch() {
  let Opcion = prompt(`
    1.Futbol
    2.Basquet
    3. Volley`);
  switch (Opcion) {
    case "1":
      console.log("futbol");
      break;
    case "2":
      console.log("Basquet");
      break;
    case "2":
      console.log("Volley");
      break;
    default:
      console.log("No valida");
      break;
  }
}

///////////////////////// JUEGO ADIVNA EL NUMERO //////////////////////////
function Juego() {
  let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);
  console.log(numeroMaquina);
  let vidas = 3;
  let numeroUsuario = parseInt(prompt("Adivine el numero de 1 - 10"));

  while (numeroMaquina !== numeroUsuario && vidas > 1) {
    let mensaje = numeroMaquina > numeroUsuario ? "El numero es mayor" : "El numero es menor"; //Operador Ternario
    console.log(mensaje);
    console.log("ERROR");
    vidas--;
    numeroUsuario = parseInt(prompt("Adivine el numero de 1 - 10 te quedan" + vidas + "vidas"));
  }

  if (numeroMaquina === numeroUsuario) {
    console.log("Ganaste ❤️");
  } else {
    console.log("Perdiste 💣");
  }
}

////////////////////////////////ARRAYS//////////////////////////////////////////////
let frutas = ["manzana", "sandia", "pera", "Platano", "pina"];
console.log(frutas);
console.log(frutas.length); // Tamano del vector 4
console.log(frutas[1]);

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
console.log("FOR OF"); //Objectos iterables
for (let fruta of frutas) {
  console.log(fruta);
}
let nombre = "Ignacio";
for (let letra of nombre) {
  console.log(letra);
}
