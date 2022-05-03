// variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articuloCarrito = [];

cargarEventListener();

function cargarEventListener() {
  //Cuando se agrega al carrito
  listaCursos.addEventListener("click", agregarCarrito);
  //Eliminar Curso
  carrito.addEventListener("click", eliminarCurso);
  //Vaciar Carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    articuloCarrito = [];
    limpiarHtml();
  });
}

function agregarCarrito(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

//eliminar
function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");
    //Eliman Articulo
    articuloCarrito = articuloCarrito.filter((item) => item.id !== cursoId);
    carritoHtml();
    console.log(articuloCarrito);
  }
}

// lee html del curso
function leerDatosCurso(curso) {
  const infoCurso = {
    id: curso.querySelector("a").getAttribute("data-id"),
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    cantidad: 1,
  };
  //Revisar Duplicos
  const existe = articuloCarrito.some((item) => item.id === infoCurso.id);
  if (existe) {
    //Actualizacom Cantidad
    const cursos = articuloCarrito.map((item) => {
      if (item.id === infoCurso.id) {
        item.cantidad++;
        return item; // Retorna Actualizado
      } else {
        return item; // Retorna Todos
      }
    });
    articuloCarrito = [...cursos];
  } else {
    //Agregar Elementos
    articuloCarrito = [...articuloCarrito, infoCurso];
  }
  console.log(articuloCarrito);
  carritoHtml();
}
// Muestra El Carrito en HTML

function carritoHtml() {
  //Limpio HTML
  limpiarHtml();

  //Recorre el carrito y genera html
  articuloCarrito.forEach((curso) => {
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
