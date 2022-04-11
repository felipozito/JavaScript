console.log("Vinculado ❤️");

const perro = {
  nombre: "Bolita",
  raza: "shizu",
  edad: 10,
  miedos: ["agua", "gatos"],
};
console.log(perro);
console.log(perro.nombre);
console.log(perro["nombre"]);

/////////////////////CRUD///////////////////
perro.dueno = "Felipe"; // Crear
perro.nombre = "Pepe"; //Actualizar
delete perro.miedos; //Borrar
console.log(perro); //Leer

////////////////////////////////////////////////
const gato = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  otros: {
    amigos: ["Cobarde", "Tímido", "Pegajoso"],
    favoritos: {
      comida: {
        fria: "salmón",
        caliente: "pollo",
      },
    },
  },
};
console.log(gato);
console.log(gato.otros.amigos[0]);
console.log(gato.otros.favoritos.comida.fria);
console.log("estoy");
for (const propiedad in gato) {
  console.log(gato[propiedad]);
}

console.log(Object.values(gato));
Object.values(gato).forEach((item) => console.log(item));

////////////////Destructuring/////////////////////////////

const pajaro = {
  nombre: "Pajarito",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  otros: {
    amigos: ["Cobarde", "Tímido", "Pegajoso"],
    favoritos: {
      comida: {
        fria: "salmón",
        caliente: "pollo",
      },
    },
  },
};

const { nombre: nombrePato } = pajaro;
console.log(nombrePato);

const { dueno: nombreDueno = "Sin nombre" } = pajaro;
console.log(nombreDueno);

const {
  otros: { amigos },
} = gato;
console.log(amigos);
