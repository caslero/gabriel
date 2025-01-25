import { direccionLocal } from "./constantes.js";

const validarUsuario = document.getElementById("validado");

validarUsuario.addEventListener("click", irLogin);

async function irLogin() {
    // Llama a la función para enviar la petición al backend
    // Redirecciona al login
    window.location.href = '/login';
}

async function enviarPeticionAlBackend() {
    const url = `${direccionLocal}/api/comprobar-token`;
    const data = { url: window.location.href };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resultado = await response.json();
        console.log('Petición exitosa:', resultado);
    } catch (error) {
        console.log('Error:', error);
    }
}
