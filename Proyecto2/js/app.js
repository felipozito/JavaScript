//Variables
const btnEnviar = document.querySelector("#enviar");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector("#enviar-mail");

eventListener();
function eventListener() {
    //Arranca APP
    document.addEventListener("DOMContentLoaded", IniciarApp);
    //Campos Del Form
    email.addEventListener("blur", ValidarFormulario);
    asunto.addEventListener("blur", ValidarFormulario);
    mensaje.addEventListener("blur", ValidarFormulario);
}

//Funciones
function IniciarApp() {
    btnEnviar.disable = true;
    btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}
function ValidarFormulario(e) {
    if (e.target.value.length > 0) {
        //Eliminar Errores
        const error = document.querySelector(".error");
        error.remove();
        //Dinamiso
        e.target.classList.remove("border", "border-red-500");
        e.target.classList.add("border", "border-green-500");
    } else {
        e.target.classList.remove("border", "border-green-500");
        e.target.classList.add("border", "border-red-500");
        mostrarError("Todos Los Campos Son Requeridos");
    }
    //Valido Correo
    if (e.target.type === "email") {
        const er =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const error = document.querySelector(".error");
        error.remove();
        if (er.test(e.target.value)) {
        } else {
            mostrarError("Ingresar un Correo Valido");
        }
    }
}
function mostrarError(msg) {
    const txtError = document.createElement("p");
    txtError.textContent = msg;
    txtError.classList.add("border", "border-red-500", "background-color-100", "text-red-500", "p-3", "mt-5", "error");
    const errores = document.querySelectorAll(".error");
    if (errores.length === 0) {
        formulario.appendChild(txtError);
    }
}
