import { consultarUsuarioActivo } from "./comprar.js";

const agregarNuevoProducto = document.getElementById(
  "form-registrar-nuevo-producto"
);

agregarNuevoProducto.addEventListener("submit", guardarProducto);

async function guardarProducto(e) {
  try {
    const nombre = e.target.value;
    console.log(nombre);
  } catch (error) {
    console.log("Error, al guardar unnuevo producto");
  }
}
