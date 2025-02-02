import { consultarUsuarioActivo } from "./usuarioActivo.js";
import { direccionLocal } from "./constantes.js";

consultarUsuarioActivo();

document.addEventListener("DOMContentLoaded", (event) => {
  // Obtener todas las casillas
  const checkboxes = document.querySelectorAll(".form-check-input");

  // Asignar el evento onclick a cada casilla
  checkboxes.forEach((checkbox) => {
    checkbox.onclick = () => {
      marcarExclusivo(checkbox);
      imprimirLog(checkbox);
    };
  });

  // Marcar una casilla inicial, por ejemplo, la primera
  document.getElementById("versionUno").checked = true;

  // Si ninguna casilla está marcada, marcar la primera por defecto
  if (!document.querySelector(".form-check-input:checked")) {
    document.getElementById("versionUno").checked = true;
  }
});

function marcarExclusivo(checkbox) {
  if (!checkbox.checked) {
    checkbox.checked = true;
  } else {
    document.querySelectorAll(".form-check-input").forEach((input) => {
      if (input !== checkbox) {
        input.checked = false;
      }
    });
  }
}

function imprimirLog(checkbox) {
  if (checkbox.id === "versionUno" && checkbox.checked) {
    document.getElementById("segundaVersion").innerHTML = ``;
    document.getElementById("precioDos").innerHTML = ``;
    document.getElementById("pantallaVersionDos").innerHTML = ``;
    document.getElementById("resolucionDos").innerHTML = ``;
    document.getElementById("procesadorDos").innerHTML = ``;
    document.getElementById("bateriaDos").innerHTML = ``;
    document.getElementById("camaraDos").innerHTML = ``;
    document.getElementById("gammaDos").innerHTML = ``;
  } else if (checkbox.id === "versionDos" && checkbox.checked) {
    document.getElementById("segundaVersion").innerHTML = `
      <label for="ramVersionDos">Memoria Ram</label>
      <input
        id="ramVersionDos"
        type="text"
        class="form-control"
      />
      <label for="romVersionDos">Memoria Rom</label>
      <input
        id="romVersionDos"
        type="text"
        class="form-control"
      />`;

    document.getElementById("precioDos").innerHTML = `
      <label for="precioVersionDos">Precio version dos ($)</label>
      <input
        id="precioVersionDos"
        type="text"
        class="form-control"
      />`;

    document.getElementById("pantallaVersionDos").innerHTML = `
      <label for="sizePantallaVersionDos">Tamaño pantalla version 2</label>
      <input
        type="text"
        class="form-control"
        id="sizePantallaVersionDos"
      />`;

    document.getElementById("resolucionDos").innerHTML = `
      <label for="resolucionVersionDos">Resolucion</label>
      <input
        type="text"
        class="form-control"
        id="resolucionVersionDos"
      />`;

    document.getElementById("procesadorDos").innerHTML = `
      <label for="procesadorVersionDos">Procesador</label>
      <input
        type="text"
        class="form-control"
        id="procesadorVersionDos"
      />`;

    document.getElementById("bateriaDos").innerHTML = `
      <label for="bateriaVersionDos">Bateria</label>
      <input
        type="text"
        class="form-control"
        id="bateriaVersionDos"
      />`;

    document.getElementById("camaraDos").innerHTML = `
      <label for="camaraVersionDos">Camara</label>
      <input
        type="text"
        class="form-control"
        id="camaraVersionDos"
      />`;

    document.getElementById("gammaDos").innerHTML = `
      <label class="" for="gammaVersion2">Gamma version 2</label>
      <div class="d-flex flex-row">
        <div class="input-group-prepend">
          <label class="input-group-text" for="gammaVersionDos">Options</label>
        </div>
        <select class="custom-select" id="gammaVersionDos">
          <option selected>seleccionar</option>
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
      </div>`;
  }
}















const agregarNuevoProducto = document.getElementById(
  "form-registrar-nuevo-producto"
);

const msj = document.getElementById("validar");
const divMsj = document.getElementById("validar");

agregarNuevoProducto.addEventListener("submit", guardarProducto);

async function guardarProducto(e) {
  try {
    e.preventDefault();
    const versionSeleccionada = document.querySelector(
      ".form-check-input:checked"
    );

    const nombre = e.target.nombre.value;
    const version = versionSeleccionada.value;
    const ramVersionUno = e.target.ramVersionUno.value;
    const romVersionUno = e.target.romVersionUno.value;
    const precioVersionUno = e.target.precioVersionUno.value;
    const sizePantallaUno = e.target.sizePantallaVersionUno.value;
    const resolucionVersionUno = e.target.resolucionVersionUno.value;
    const procesadorVersionUno = e.target.procesadorVersionUno.value;
    const bateriaVersionUno = e.target.bateriaVersionUno.value;
    const camaraVersionUno = e.target.camaraVersionUno.value;
    const gammaVersionUno = e.target.gammaVersionUno.value;

    if (versionSeleccionada.value === "versionUno") {
      const respuesta = await fetch(
        `${direccionLocal}/api/registrar-productos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: nombre,
          }),
        }
      );

      const respuestaJson = await respuesta.json();
      const statusError = respuestaJson.status;
      const mensaje = respuestaJson.message;

      if (statusError == "error") {
        mensajesValidacion(mensaje);
      } else {
        mensajesValidacion(mensaje);
      }

    } else {
      const ramVersionDos = e.target.ramVersionDos.value;
      const romVersionDos = e.target.romVersionDos.value;
      const precioVersionDos = e.target.precioVersionDos.value;
      const sizePantallaDos = e.target.sizePantallaVersionDos.value;
      const resolucionVersionDos = e.target.resolucionVersionDos.value;
      const procesadorVersionDos = e.target.procesadorVersionDos.value;
      const bateriaVersionDos = e.target.bateriaVersionDos.value;
      const camaraVersionDos = e.target.camaraVersionDos.value;
      const gammaVersionDos = e.target.gammaVersionDos.value;

      const respuesta = await fetch(
        `${direccionLocal}/api/registrar-productos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: nombre,
          }),
        }
      );

      const respuestaJson = await respuesta.json();
      const statusError = respuestaJson.status;
      const mensaje = respuestaJson.message;

      if (statusError == "error") {
        mensajesValidacion(mensaje);
      } else {
        mensajesValidacion(mensaje);
      }
    }

  } catch (error) {
    console.log("Error al guardar un nuevo producto: " + error);
    mensajesValidacion(error);
  }
}

/** mensajesValidacion recibe la respuesta del guardado del nuevo usuario y muestra
  el msj correspondiente a la repuesta */
async function mensajesValidacion(mensaje) {
  toggleCuadroMensajes();
  divMsj.innerHTML = `<div class="text-[20px]">${mensaje}</div>`;
  toggleMensajes();
}

/** toggleMensajes oculta los mensajes de validacion */
async function toggleMensajes() {
  setTimeout(() => {
    msj.classList.remove("d-flex");
    msj.classList.add("d-none");
    divMsj.innerHTML = "";
  }, "3000");
}

/** toggleMensajes oculta o muestra el cuadro de validacion */
async function toggleCuadroMensajes() {
  msj.classList.remove("d-none");
  msj.classList.add("d-flex");
}
