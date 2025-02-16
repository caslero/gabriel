//usuario en linea
//import { direccionLocal } from "./constantes.js";
import { consultarUsuarioActivo } from "./usuarioActivo.js";
import { todosProductosDisponibles } from "./todosLosProductosComprar.js";


/** 
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
*/


consultarUsuarioActivo();

todosProductosDisponibles();


//Perfil usuario activo

document.addEventListener('DOMContentLoaded', () => {
    const profileButton = document.getElementById('profile-button');
    const profileMenu = document.getElementById('profile-menu');

    // Mostrar/Ocultar el menú del perfil
    profileButton.addEventListener('click', () => {
        profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Manejo de eventos para los botones del menú
    document.getElementById('change-password-button').addEventListener('click', () => {
        // Lógica para cambiar la clave
        alert('Cambiar clave');
    });

    document.getElementById('logout-button').addEventListener('click', () => {
        // Lógica para cerrar sesión
        alert('Cerrar sesión');
    });

    // Cerrar el menú si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (!profileButton.contains(event.target) && !profileMenu.contains(event.target)) {
            profileMenu.style.display = 'none';
        }
    });
});


