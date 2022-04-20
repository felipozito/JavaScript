const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const boton = document.querySelectorAll(".card-body button");
let carritoObjeto = [];

funciones();

function funciones() {
      boton.forEach((boton) => boton.addEventListener("click", addCarrito));
}

function addCarrito(e) {
      e.preventDefault();
      const producto = {
            titulo: e.target.dataset.fruta,
            id: e.target.dataset.fruta,
            cantidad: 1,
      };
      //   const existe = carritoObjeto.some((item) => item.id === producto.id);
      //   if (existe) {
      //         //Actualizacom Cantidad
      //         const tem = carritoObjeto.map((item) => {
      //               if (item.id === producto.id) {
      //                     item.cantidad++;
      //                     return item; // Retorna Actualizado
      //               } else {
      //                     return item; // Retorna Todos
      //               }
      //         });
      //         carritoObjeto = [...tem];
      //   } else {
      //         //Agregar Elementos
      //         carritoObjeto = [...carritoObjeto, producto];
      //   }
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
