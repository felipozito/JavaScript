// -------------------------------Ejercicio FIZZ BUZZ---------------------------------------
// multiplos de 3 FIZZ
// Multipos de 5 BUZZ
// Multiplos de Ambox FIZZ BUZZ

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} FizzBuzz !!`);
  } else if (i % 3 == 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 == 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(`${i}`);
  }
}

/*
For each recorre todoslos valores
array.forEach(item => .........)
map igual recorre todos los valor pero crea nuevos arreglos 
array.map(item => .........)
For of ( for (let i of array)) ....Sobre Arrelglos
For in (for(let i in array)).... Sobre Objetos 
*/
