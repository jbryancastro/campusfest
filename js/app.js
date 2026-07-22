// Guardamos la URL para consultar eventos.
const API_EVENTOS = "/eventos";
// Buscamos la seccion donde pintamos los eventos.
const seccionEventos = document.getElementById("eventos");

// Esta funcion carga y muestra eventos en la pagina principal.
async function cargarEventos() {
    // Si no existe la seccion, no continuamos.
    if (!seccionEventos) {
        // Salimos para evitar errores en consola.
        return;
    }

    // Inicia el bloque para manejar errores.
    try {
        // Pedimos eventos al servidor.
        const respuesta = await fetch(API_EVENTOS);
        // Convertimos la respuesta a JSON.
        const eventos = await respuesta.json();

        // Borramos solo tarjetas creadas por este script.
        seccionEventos.querySelectorAll("article.evento-dinamico").forEach((item) => item.remove());

        // Recorremos cada evento para crear su tarjeta.
        eventos.forEach((evento) => {
            // Creamos un elemento article.
            const article = document.createElement("article");
            // Marcamos esta tarjeta como dinamica.
            article.className = "evento-dinamico";
            // Escribimos los datos del evento dentro de la tarjeta.
            article.innerHTML = `
                <img src="${evento.imagen}" alt="${evento.nombre}">
                <h3>${evento.nombre}</h3>
                <p>${evento.fecha}</p>
                <p>${evento.descripcion}</p>
                <button>Mas informacion</button>
            `;
            // Agregamos la tarjeta al final de la seccion.
            seccionEventos.appendChild(article);
        });
    // Si algo falla, entra aqui.
    } catch (error) {
        // Mostramos mensaje y detalle del error.
        console.log("Error al obtener los eventos:", error);
    }
}

// Al cargar la pagina, ejecutamos la carga de eventos.
window.onload = cargarEventos;