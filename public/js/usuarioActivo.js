import { direccionLocal } from "./constantes.js";

export async function consultarUsuarioActivo() {
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
  
  } catch (error) {
    console.log("Error, al consultar usuario activo");
  }
}