//Variables
const btnEnviar = document.querySelector("#enviar");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector("#enviar-mail");
const er =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListener();
function eventListener() {
      document.addEventListener("DOMContentLoaded", IniciarApp);
      email.addEventListener("blur", ValidarCampos);
      asunto.addEventListener("blur", ValidarCampos);
      mensaje.addEventListener("blur", ValidarCampos);
}

function IniciarApp() {
      btnEnviar.disable;
      btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}
function MostrarError(msg) {
      const txtError = document.createElement("p");
      txtError.textContent = msg;
      txtError.classList.add(
            "border",
            "border-red-500",
            "background-color-100",
            "text-red-500",
            "p-3",
            "mt-5",
            "error"
      );
      const errores = document.querySelectorAll(".error");
      if (errores.length === 0) {
            formulario.appendChild(txtError);
      }
}
function ValidarCampos(e) {
      if (e.target.length > 0) {
            const error = document.querySelector(".error");
            error.remove();
            e.target.classList.remove("border", "border-red-500");
            e.target.classList.add("border", "border-green-500");
      } else {
            e.target.classList.remove("border", "border-green-500");
            e.target.classList.add("border", "border-red-500");
            MostrarError("Todos Los Campos Son Requeridos");
      }
      if (e.target.type === "email") {
            const error = document.querySelector(".error");
            error.remove();
            if (er.test(e.target.value)) {
                  e.target.classList.remove("border", "border-red-500");
                  e.target.classList.add("border", "border-green-500");
            } else {
                  MostrarError("Ingresar un Correo Valido");
            }
      }
      if ((email.value !== "") & (asunto.value !== "") & (mensaje.value !== "")) {
            console.log("bien");
      }
}
