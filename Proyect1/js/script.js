const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];
Funciones();
function Funciones() {
    listaCursos.addEventListener("click", AgregarCarrito);
    carrito.addEventListener("click", EliminarCurso);
    vaciarCarritoBtn.addEventListener("click", VaciarCarrito);
}
function VaciarCarrito() {
    articulosCarrito = [];
    limpiarHtml();
}
function AgregarCarrito(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const curso = e.target.parentElement.parentElement;
        LeerInfo(curso);
    }
}
function EliminarCurso(e) {
    if (e.target.classList.contains("borrar-curso")) {
        const id = e.target.getAttribute("data-id");
        articulosCarrito = articulosCarrito.filter((curso) => curso.id !== id);
        CrearCarrito();
    }
}
function LeerInfo(curso) {
    const info = {
        cantidad: 1,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        imagen: curso.querySelector("img").src,
        id: curso.querySelector("a").getAttribute("data-id"),
    };
    // Verificar Duplicos
    const duplicos = articulosCarrito.some((curso) => curso.id === info.id);
    if (duplicos) {
        const itemActualizado = articulosCarrito.map((cursos) => {
            if (cursos.id === info.id) {
                cursos.cantidad++;
                return cursos;
            } else {
                return cursos;
            }
        });
        articulosCarrito = [...itemActualizado];
    } else {
        articulosCarrito = [...articulosCarrito, info];
    }
    console.log(articulosCarrito);
    CrearCarrito();
}
function CrearCarrito() {
    LimpiarHtml();
    articulosCarrito.forEach((curso) => {
        const row = document.createElement("tr");
        const { imagen, cantidad, titulo, precio, id } = curso;
        row.innerHTML = `
        <td><img src='${imagen}' width='100px'></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href='#' class='borrar-curso' data-id='${id}'>X</a></td>
        `;
        contenedorCarrito.appendChild(row);
    });
}
function LimpiarHtml() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
