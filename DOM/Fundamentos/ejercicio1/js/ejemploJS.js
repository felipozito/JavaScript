const btn = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

//btn.addEventListener("click", funcion())
btn.addEventListener("click", () => {
  console.log(footer.classList);
  //   if (footer.classList.contains("activo")) {
  //     footer.classList.remove("activo");
  //   } else {
  //     footer.classList.add("activo");
  //   }

  footer.classList.contains("activo")
    ? (footer.classList.remove("activo"), btn.classList.remove("activo"), (btn.textContent = "Footer"))
    : (footer.classList.add("activo"), btn.classList.add("activo"), (btn.textContent = "Close"));
});
