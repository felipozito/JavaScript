console.log('Conceptos Claves')

let nombre = 'Felipe';
let numero = 10
console.log("Bienvenido : \n" + nombre)
console.log(`1.Pedro
2.Juan
3.${nombre}`)
console.log(`${nombre.toUpperCase()}`)
console.log(`${nombre.toLowerCase()}`)
console.log(numero)
console.log(`${numero.toString()}`)
/////////////////////////FUNCIONES ARRAYS//////////////////////////
const frutas=['Manzana']

function Push(){// Al final
    frutas.push(prompt('Ingrese frutas'))
    console.log(frutas)
}
function Pop(){// Borrar Final
    frutas.pop()
    console.log(frutas)
}
function Unshift(){// Al Principio
    frutas.unshift(prompt('Ingrese frutas'))
    console.log(frutas)
}
function Shift(){// Borrar Principio
    frutas.shift()
    console.log(frutas)
}
///////////////////////////CARRITO BASICO/////////////////////////////
function CarritoBasico(){
    const carrito=[]
    const productos = prompt('Bienvenido que desea Comprar')
    carrito.push(productos)
    console.log(carrito)
    
    while(confirm('Desea mas Productos')){
        const productos= prompt('Elija otro producto')
        carrito.push(productos)
        console.log(carrito)
    }
    for (const producto of carrito){
        console.log(producto)
    }
    console.log("Usted a Comprado: " + carrito)
}

////////////////////////////ARROW FUNCTION///////////////////////////////

const azarFlecha =  (min, max) => (Math.floor(Math.random() * (max - min)) + min)
console.log(azarFlecha(1,11))

//////////////////////////////FOR EACH/////////////////////////////////////
const nombres = ["manzana", "sandia", "pera"]
nombres.forEach(item =>console.log(item))
nombres.forEach((item,index) => {
    console.log(`${item}: ${index}`)
    
});