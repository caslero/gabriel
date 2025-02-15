document.addEventListener('DOMContentLoaded', () => {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  function actualizarVistaCarrito() {
      let carritoContent = '';
      let totalPagar = 0;

      carrito.forEach(producto => {
          totalPagar += producto.precio;
          carritoContent += `
              <div class="cart-item">
                  <img src="${producto.imagen}" alt="${producto.nombre}">
                  <div class="cart-details">
                      <h5>${producto.nombre}</h5>
                      <p>${producto.precio}</p>
                  </div>
              </div>`;
      });

      document.getElementById('carrito-vista').innerHTML = carritoContent;
      document.getElementById('total-price').innerHTML = `${totalPagar.toFixed(2)}`;
  }

  actualizarVistaCarrito();
});

function finalizarCompra() {
  alert('Compra confirmada!');
  // Aquí puedes añadir la lógica para finalizar la compra, como enviar los datos al servidor.
  localStorage.removeItem('carrito'); // Limpia el carrito después de la compra
  window.location.href = 'index.html'; // Redirige a la página principal o a otra vista
}