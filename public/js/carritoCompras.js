// carrito de compras

document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cartDropdown = document.getElementById('cart');
    const itemCount = document.getElementById('item-count');
    const totalPriceElement = document.getElementById('total-price');



    const cartItemsContainer = document.getElementById('carrito-vista');



    const checkoutButton = document.getElementById('checkout-button');

    //let cart = JSON.parse(localStorage.getItem('cart')) || []; // Cargar el carrito desde localStorage
    let totalPrice = 0;

    // Mostrar/Ocultar el carrito
    cartButton.addEventListener('click', () => {
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    /** 
        // Inicializar el carrito en la interfaz
        function initializeCart() {
            totalPrice = 0; // Reiniciar el total
            cartItemsContainer.innerHTML = ''; // Limpiar el contenedor

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>No hay artículos en el carrito.</p>';
            } else {

                console.log(cart);
                

                cart.forEach((item, index) => {
                    const itemDiv = document.createElement('div');
                    itemDiv.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
                        <span>${item.name} - $${item.price.toFixed(2)}</span>
                        <button class="remove-item" data-index="${index}">Eliminar</button>
                    `;
                    cartItemsContainer.appendChild(itemDiv);
                    totalPrice += item.price; // Sumar el precio al total
                });
            }

            // Mostrar el total
            totalPriceElement.textContent = totalPrice.toFixed(2);
            itemCount.textContent = cart.length; // Actualizar el contador de artículos
        }

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
                localStorage.setItem('cart', JSON.stringify(cart)); // Guardar el carrito en localStorage
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
                    localStorage.setItem('cart', JSON.stringify(cart)); // Actualizar el carrito en localStorage
                });
            });
        }

        // Inicializar el carrito al cargar la página
        initializeCart();

        // Guardar datos del carrito al finalizar compra
        checkoutButton.addEventListener('click', () => {
            if (cart.length > 0) {
                // Guardar el carrito en localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
                // Redirigir a la página de checkout
                window.location.href = '/Fcompras';
            }
        });
    */



        
});