console.log("❤️");
console.log(document);
/// Propiedades
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.domain);
/// Metodos
console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb").innerHTML);

////// Prueba   ///////////////////

const color = document.getElementById("input-color");
const txtColor = document.getElementById("textoHexa");
const area = document.getElementById("cardColor");

function pintar() {
      console.log(color.value);
      txtColor.textContent = color.value;
      cardColor.style.backgroundColor = color.value;
}

////////////////////////////////////////////////////////
const username = document.getElementById("user");
const passwordUser = document.getElementById("password");
const correoUser = document.getElementById("correo");
const btnRegistrar = document.getElementById("registro");
const stateUser = document.getElementById("state");

const usuario = {
      user: "",
      password: "",
      correo: "",
      estado: false,
};

btnRegistrar.addEventListener("click", () => {
      usuario.user = username.value;
      usuario.password = passwordUser.value;
      usuario.correo = correoUser.value;
      usuario.estado = true;
      console.log(usuario);
      usuario.estado ? (stateUser.textContent = "OK THANKS") : (stateUser.textContent = "Login");
});

/////////////////////////////////////////////////

const lista = document.getElementById("lista");
const btnCrear = document.getElementById("crear");
const btnAgregar = document.getElementById("agregar");
const fragment = new DocumentFragment();

const arrayPaises = ["Peru", "Ecuador", "Bolivia"];

btnCrear.addEventListener("click", () => {
      const li = document.createElement("li"); // Creo Elemento
      li.textContent = "Elemento Creado"; // Defino Elemento
      lista.appendChild(li); // Agrego
});

btnAgregar.addEventListener("click", () => {
      arrayPaises.forEach((pais) => {
            li = document.createElement("li"); // Creo Elemento
            li.textContent = pais; // Defino Elemento
            fragment.appendChild(li); // Agrego
      });
      lista.appendChild(fragment);
});
