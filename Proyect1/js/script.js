const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

funciones();

function funciones() {
      listaCursos.addEventListener("click", agregarCarrito);
      carrito.addEventListener("click", eliminarCurso);
      vaciarCarritoBtn.addEventListener("click", () => {
            articulosCarrito = [];
            limpiarHtml;
      });
}

function agregarCarrito(e) {
      e.preventDefault();
      if (e.target.classList.contains("agregar-carrito")) {
            const cursoSeleccionado = e.target.parentElement.parentElement;
            leerCurso(cursoSeleccionado);
      }
}
function leerCurso(curso) {
      const infoCurso = {
            id: curso.querySelector("a").getAttribute("data-id"),
            imagen: curso.querySelector("img").src,
            titulo: curso.querySelector("h4").textContent,
            precio: curso.querySelector(".precio span").textContent,
            cantidad: 1,
      };
      // Revisar Duplicos
      //   const existe = articulosCarrito.some((item) => item.id === infoCurso.id);
      //   if (existe) {
      //     const curso = articulosCarrito.map((item) => {
      //       if (item.id === infoCurso.id) {
      //         item.cantidad++;
      //         return item;
      //       } else {
      //         return item;
      //       }
      //     });
      //     articulosCarrito = [...curso];
      //   } else {
      //     articulosCarrito = [...articulosCarrito, infoCurso];
      //   }
      if (articulosCarrito.hasOwnProperty(infoCurso.id)) {
            infoCurso.cantidad = articulosCarrito[infoCurso.id].cantidad++;
      }
      articulosCarrito[infoCurso] = infoCurso;
      insertarHtml(articulosCarrito);
}

function insertarHtml(articulosCarrito) {
      limpiarHtml();
      articulosCarrito.forEach((curso) => {
            const row = document.createElement("tr");
            const { imagen, titulo, precio, cantidad, id } = curso;
            row.innerHTML = `
        <td><img src='${imagen}' width='100px' > </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;
            //Agrega el HTML en el Tbody
            contenedorCarrito.appendChild(row);
      });
}
function limpiarHtml() {
      //     contenedorCarrito.innerHTML = "";
      while (contenedorCarrito.firstChild) {
            contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}
//eliminar
function eliminarCurso(e) {
      if (e.target.classList.contains("borrar-curso")) {
            const cursoId = e.target.getAttribute("data-id");
            //Eliman Articulo
            articulosCarrito = articulosCarrito.filter(
                  (item) => item.id !== cursoId
            );
            insertarHtml();
      }
}
