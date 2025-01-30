import { direccionLocal } from "./constantes.js";


async function consultarUsuarioActivo() {
  try {
    fetch(`${direccionLocal}/api/usuario-activo`, {
      method: 'GET',
      credentials: 'include' // Esto incluye las cookies con la solicitud
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('nombre-usuario-activo').innerHTML = `<span><i class="bi bi-person"></i>${data.usuarioActivo.nombre}</span>`;
      console.log(data.usuarioActivo.nombre);
  })
  .catch(error => {
      console.error('Error:', error);
  });
  
    //const token = localStorage.getItem("programacioniii");
    
    

    /** 
    const respuesta = await fetch(`${direccionLocal}/api/usuario-activo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    });

    const respuestaJson = await respuesta.json();
    const statusError = respuestaJson.status;
    const mensaje = respuestaJson.message;
    console.log(respuestaJson);
    */
  } catch (error) {
    console.log("Error, al consultar usuario activo");
  }
}

setTimeout(() => {
  consultarUsuarioActivo()
}, 2000);

const carrito = document.getElementById("carrito");
const elementos = document.getElementById("lista");
const elementos2 = document.getElementById("lista-2");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

//Listeners
//cargarEventListeners();

function cargarEventListeners() {
  elementos.addEventListener("click", comprarElemento);
  elementos2.addEventListener("click", comprarElemento);

  carrito.addEventListener("click", eliminarElemento);

  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

function comprarElemento(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento);
  }
}

function leerDatosElemento(elemento) {
  const infoElemento = {
    imagen: elemento.querySelector("img").src,
    titulo: elemento.querySelector("h4").textContent,
    precio: elemento.querySelector(".precio").textContent,
    id: elemento.querySelector("a").getAttribute("data-id"),
  };

  insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>${elemento.titulo}</td>
        <td>${elemento.precio}</td>
        <td>
            <a href="#" class="borrar-elemento" data-id="${elemento.id}">X</a>
        </td>
    `;
  lista.appendChild(row);
  guardarElementoLocalStorage(elemento);
}

function eliminarElemento(e) {
  e.preventDefault;

  let elemento, elementoId;

  if (e.target.classList("borrar")) {
    e.target.parentElement.parentElement.remove();
    elemento = e.target.parentElement.parentElement;
    elementoId = elemento.querySelector("a").getAttribute("data-id");
  }

  eliminarElementoLocalStorage(elementoId);
}

function vaciarCarrito() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  vaciarLocalStorage();

  return false;
}

function guardarElementoLocalStorage(elemento) {
  let elementos;

  elementos = obtenerElementosLocalStorage();

  elementos.push(elemento);

  localStorage.setItem("elementos", JSON.stringify(elementos));
}

function obtenerElementosLocalStorage() {
  let elementosLS;

  if (localStorage.getItem("elementos") === null) {
    elementosLS = [];
  } else {
    elementosLS = JSON.parse(localStorage.getItem("elementos"));
  }
  return elementosLS;
}

function leerLocalStorage() {
  let elementosLS;

  elementosLS = obtenerElementosLocalStorage();

  elementosLS.forEach(function (elemento) {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>
                <img src="${elemento.imagen}" width=100>
            </td>
            <td>${elemento.titulo}</td>
            <td>${elemento.precio}</td>
            <td>
                <a href="#" class="borrar-elemento" data-id="${elemento.id}">X</a>
            </td>
        `;
    lista.appendChild(row);
  });
}

function eliminarElementoLocalStorage(elemento) {
  let elementosLS;

  elementosLS = obtenerElementosLocalStorage();
  elementosLS.forEach(function (elementoLS, comprarProductos) {
    if (elementoLS.id === elemento) {
      elementoLS.splice(comprarProductos, 1);
    }
  });

  localStorage.setItem("elementos", JSON.stringify(elementosLS));
}

function vaciarLocalStorage() {
  localStorage.clear();
}
