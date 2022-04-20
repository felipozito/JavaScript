const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const boton = document.querySelectorAll(".card-body button");
let carritoObjeto = {};

funciones();

function funciones() {
  boton.forEach((boton) => boton.addEventListener("click", addCarrito));
}

function addCarrito(e) {
  e.preventDefault();
  console.log(e.target);
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  if (carritoObjeto.hasOwnProperty(producto.id)) {
    producto.cantidad = carritoObjeto[producto.id].cantidad + 1;
  }
  carritoObjeto[producto.id] = producto;
  console.log(carritoObjeto);
  pintarCarrito();
}

const pintarCarrito = () => {
  carrito.textContent = "";

  Object.values(carritoObjeto).forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".rounded-pill").textContent = item.cantidad;
    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};
