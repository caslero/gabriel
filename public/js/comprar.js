//usuario en linea
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

consultarUsuarioActivo()

// carrito de compras

document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cartDropdown = document.getElementById('cart');
    const itemCount = document.getElementById('item-count');
    const totalPriceElement = document.getElementById('total-price');
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');

    let cart = [];
    let totalPrice = 0;

    // Mostrar/Ocultar el carrito
    cartButton.addEventListener('click', () => {
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Agregar productos al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productName = productElement.getAttribute('data-name');
            const versionSelect = productElement.querySelector('.version-select');
            const selectedOption = versionSelect.options[versionSelect.selectedIndex];
            const productPrice = parseFloat(selectedOption.getAttribute('data-price'));
            const productImage = productElement.getAttribute('data-image');

            // Agregar producto al carrito
            cart.push({ name: productName, price: productPrice, image: productImage });
            totalPrice += productPrice;

            // Actualizar contadores
            itemCount.textContent = cart.length;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            // Mostrar productos en el carrito
            updateCartItems();
        });
    });

    // Actualizar la lista de productos en el carrito
    function updateCartItems() {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <button class="remove-item" data-index="${index}">Eliminar</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt(event.target.getAttribute('data-index'), 10);
                totalPrice -= cart[index].price;
                cart.splice(index, 1);
                itemCount.textContent = cart.length;
                totalPriceElement.textContent = totalPrice.toFixed(2);
                updateCartItems();
            });
        });
    }

    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            window.location.href = 'shop.html';
        }
    });
});

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