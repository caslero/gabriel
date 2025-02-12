import { direccionLocal } from "./constantes.js";







export function todosProductosDisponibles() {
  try {

      fetch(`${direccionLocal}/api/productos-disponibles`, {
          method: 'GET',
          credentials: 'include' // Esto incluye las cookies con la solicitud
      })
      .then(response => response.json())
      .then(data => {
          let gammaAltaContent = ''; // Variable para acumular el contenido de gamma alta
          let gammaMediaContent = ''; // Variable para acumular el contenido de gamma media
          let gammaBajaContent = '';

          data.productosDisponibles.forEach(element => {
            let cardContent = `
      <div class="card px-5">
          <div
            class="product"
            data-name="${element.producto}"
            data-price="1020/1110"
            data-image="../../img/equipos/zte-nubia-red-magic-9s-pro-plus.png"
          >
            <img
              src="${element.imagen}"
              class="card-img-top mt-5"
              alt="${element.producto}"
            />
            <div class="card-body">
              <h5 class="card-title">${element.producto}</h5>
              <!--Caracteristicas-->

              <div>
                <i class="bi bi-memory">${element.codigo}</i>
              </div>

              <div>
                <i class="bi bi-device-hdd">${element.existencia_actual == 1 ? 'Disponible' : 'Agotado'}</i>
              </div>

              <div>
                <i class="bi bi-camera">${element.precio}</i>
              </div>
            </div>

            <button class="add-to-cart btn btn-success btn-lg">
                Agregar al <i class="bi bi-cart4"></i>
            </button>
            </div>
          </div>
        </div>
      `;

              if (element.id_categoria == 1) {
                gammaAltaContent += cardContent;
              } else if (element.id_categoria == 2) {
                gammaMediaContent += cardContent;
              } else {
                gammaBajaContent += cardContent;
              }
          });

          document.getElementById('gamma-alta').innerHTML = gammaAltaContent; // Asigna el contenido de gamma alta
          document.getElementById('gamma-media').innerHTML = gammaMediaContent; // Asigna el contenido de gamma media
          document.getElementById('gamma-baja').innerHTML = gammaBajaContent;
        })
      .catch(error => {
          console.error('Error:', error);
      });

  } catch (error) {
      console.log('Error al consultar los productos: ' + error);        
  }
}
