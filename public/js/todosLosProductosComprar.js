import { direccionLocal } from "./constantes.js";

export function todosProductosDisponibles() {
    try {

        fetch(`${direccionLocal}/api/productos-disponibles`, {
            method: 'GET',
            credentials: 'include' // Esto incluye las cookies con la solicitud
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        document.getElementById('gamma-alta').innerHTML = `
        <div class="card px-5">
            <div
              class="product"
              data-name="Nubia Red Magic 9S Pro+"
              data-price="1020/1110"
              data-image="../../img/equipos/zte-nubia-red-magic-9s-pro-plus.png"
            >
              <img
                src="../../img/equipos/zte-nubia-red-magic-9s-pro-plus.png"
                class="card-img-top mt-5"
                alt="Nubia Red Magic 9S Pro+"
              />
              <div class="card-body">
                <h5 class="card-title">Nubia Red Magic 9S Pro+</h5>
                <!--Caracteristicas-->
                <div>
                  <i class="bi bi-memory"> 16GB/24GB</i>
                </div>

                <div>
                  <i class="bi bi-device-hdd"> 512GB/1TB</i>
                </div>

                <div>
                  <i class="bi bi-display"> 6.8", 1116 x 2480 pixels</i>
                </div>

                <div>
                  <i class="bi bi-cpu"> Snapdragon 8 Gen 3 Leading 3.4GHz</i>
                </div>

                <div>
                  <i class="bi bi-battery-full"> 5500 mAh</i>
                </div>

                <div>
                  <i class="bi bi-camera"> Triple, 50MP+50MP+2MP</i>
                </div>
              </div>

              <div class="d-flex flex-row">
                <h6 class="me-2">Disponibles:</h6>
                <b>3</b>
              </div>

              <div class="text-center">
                <select class="version-select">
                  <option value="version1" data-price="1020">
                    Versión 1 - $1020
                  </option>
                  <option value="version2" data-price="1110">
                    Versión 2 - $1110
                  </option>
                </select>
                <button class="add-to-cart btn btn-success btn-lg">
                  Agregar al <i class="bi bi-cart4"></i>
                </button>
              </div>
            </div>
          </div>
        `;

    } catch (error) {
        console.log('Error, al consultar los productos: ' + error);        
    }
}