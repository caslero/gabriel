import { direccionLocal } from "./constantes.js"; 

export function gestionar() {
    try {
        fetch(`${direccionLocal}/api/productos-disponibles`, {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Verifica la estructura de los datos
            let productosContent = ''; // Variable para acumular el contenido de productos

            // Asegúrate de que data.productosDisponibles sea un array
            if (Array.isArray(data.productosDisponibles)) {
                data.productosDisponibles.forEach(element => {
                    // Agrega solo una fila a la tabla
                    let rowContent = `
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.producto}</td>
                            <td>${element.codigo}</td>
                            <td>${element.precio}</td>
                            <td>
                                <button class="btn btn-primary">Editar</button>
                                <button class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    `;
                    productosContent += rowContent; // Acumula el contenido de cada producto
                });
            } else {
                console.error('La respuesta no contiene un array de productos disponibles.');
            }

            // Inserta el contenido acumulado en el contenedor
            document.getElementById('productos-container').innerHTML = productosContent;

        })
        .catch(error => {
            console.error('Error:', error);
        });

    } catch (error) {
        console.log('Error al consultar los productos: ' + error);        
    }
}







/*


export function todosProductosDisponibles() {
    try{
        fetch(`${direccionLocal}/api/productos-disponibles`, {
            method: 'GET',
            credentials: 'include' // Esto incluye las cookies con la solicitud
        })
        .then(response => response.json())   
        .then(data => { 
            let productoIdContent = '';
            let productoNombreContent = '';
            let productoCodigoContent = '';
            let productoPrecioContent = '';
            data.productosDisponibles.forEach(element => {
                 let tableContent = `
                 <div class="table"
                   <div class="product"
                      data-id="${element.id}"
                      data-name="${element.producto}"
                      data-codigo="${element.codigo}"
                      data-price="${element.precio}"
                    >
                    <thead>
                       <tr>
                         <th>${element.id}</th>
                         <th>${element.producto}</th>
                         <th>${element.codigo}</th>
                         <th>${element.precio}</th>
                         <th>Acciones</th>
                      </tr>
                    </thead>
                    </div> 
                   </div> 
                   `;

                document.getElementById('gamma-alta').innerHTML = gammaAltaContent; 
                document.getElementById('gamma-media').innerHTML = gammaMediaContent;
                document.getElementById('gamma-baja').innerHTML = gammaBajaContent;

            



const express = require('express');
const app = express();
const port = 3000;

// Simulación de una base de datos
const productos = [
    { id: 1, nombre: 'Producto 1', codigo: 'P001', precio: 100 },
    { id: 2, nombre: 'Producto 2', codigo: 'P002', precio: 200 },
    { id: 3, nombre: 'Producto 3', codigo: 'P003', precio: 300 },
];

// Endpoint para obtener todos los productos
app.get('/api/productos', (req, res) => {
    res.json(productos);
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});


async function cargarProductos() {
    try {
        const response = await fetch('http://localhost:3000/api/productos');
        if (!response.ok) {
            throw new Error('Error al cargar los productos');
        }
        const productos = await response.json();
        const tbody = document.getElementById('product-table-body');

        // Limpiar la tabla antes de agregar nuevos productos
        tbody.innerHTML = '';

        // Agregar cada producto a la tabla
        productos.forEach(producto => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.codigo}</td>
                <td>${producto.precio}</td>
                <td>
                    <button onclick="editarProducto(${producto.id})">Editar</button>
                    <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Funciones de acción (puedes implementar la lógica según tus necesidades)
function editarProducto(id) {
    alert(`Editar producto con ID: ${id}`);
    // Aquí puedes agregar la lógica para editar el producto
}

function eliminarProducto(id) {
    alert(`Eliminar producto con ID: ${id}`);
    // Aquí puedes agregar la lógica para eliminar el producto
}

// Cargar los productos al cargar la página
window.onload = cargarProductos;
*/