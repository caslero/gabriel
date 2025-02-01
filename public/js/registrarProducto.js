import { consultarUsuarioActivo } from "./comprar.js";

document.addEventListener('DOMContentLoaded', (event) => {
  // Obtener todas las casillas
  const checkboxes = document.querySelectorAll('.form-check-input');

  // Asignar el evento onclick a cada casilla
  checkboxes.forEach((checkbox) => {
    checkbox.onclick = () => {
      marcarExclusivo(checkbox);
    };
  });

  // Marcar una casilla inicial, por ejemplo, la primera
  document.getElementById('versionUno').checked = true;

  // Si ninguna casilla está marcada, marcar la primera por defecto
  if (!document.querySelector('.form-check-input:checked')) {
    document.getElementById('versionUno').checked = true;
  }
});

function marcarExclusivo(checkbox) {
  if (!checkbox.checked) {
    checkbox.checked = true;
  } else {
    document.querySelectorAll('.form-check-input').forEach((input) => {
      if (input !== checkbox) {
        input.checked = false;
      }
    });
  }
}



const agregarNuevoProducto = document.getElementById("form-registrar-nuevo-producto");

agregarNuevoProducto.addEventListener("submit", guardarProducto);

async function guardarProducto(e) {
  try {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const versionSeleccionada = document.querySelector('.form-check-input:checked');

    if (versionSeleccionada.value === 'versionUno') {
      const version = versionSeleccionada.value;
      console.log(`Nombre: ${nombre}, Versión: ${version}`);
      // Aquí puedes enviar los datos al servidor o manejarlos como necesites
      /*
      fetch('ruta/al/servidor', {
        method: 'POST',
        body: JSON.stringify({ nombre, version }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
      */
    } else {
      alert('Por favor, selecciona una versión.');
    }

  } catch (error) {
    console.log("Error al guardar un nuevo producto");
  }
}

