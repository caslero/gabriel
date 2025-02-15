document.addEventListener('DOMContentLoaded', () => {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  function actualizarVistaCarrito() {
      let carritoContent = '';
      let totalPagar = 0;

      carrito.forEach(producto => {
          totalPagar += producto.precio;
          carritoContent += `
              <div id="${producto.id}" class="cart-item">
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

  document.querySelector('#compra-form').addEventListener('submit', (event) => {
    event.preventDefault();
    finalizarCompra();
  });

  function finalizarCompra() {
    // Obtener la referencia bancaria
    const referenciaBancaria = document.querySelector('#referencia').value;
    
    // Mostrar la referencia bancaria en la consola
    console.log('Referencia bancaria:', referenciaBancaria);

    // Obtener los datos de los productos en el carrito
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log('Carrito:', carrito); // Verificar el contenido del carrito

    const productosComprados = carrito.map(producto => ({
      id: producto.id,
      codigo: producto.codigo,
      nombre: producto.nombre,
      imagen: producto.imagen,
      precio: producto.precio
    }));

    // Mostrar los productos comprados en la consola con más detalles
    productosComprados.forEach(producto => {
      console.log(`Producto comprado - ID: ${producto.id}, Código: ${producto.codigo}, Nombre: ${producto.nombre}, Imagen: ${producto.imagen}, Precio: ${producto.precio}`);
    });

    // Confirmar la compra
    alert('Compra confirmada!');
    
    // Limpiar el carrito después de la compra
    localStorage.removeItem('carrito'); 
    // Redirigir a la página principal o a otra vista
    window.location.href = 'index.html'; 
  }
});