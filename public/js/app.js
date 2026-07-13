
/*==================================================
    CARGAR LOS EVENTOS DESDE EL SERVIDOR
==================================================*/

// Cuando la página termine de cargar,
// se ejecutará la función cargarEventos().

window.onload = function () {

    cargarEventos();

};


/*==================================================
    FUNCIÓN PARA OBTENER LOS EVENTOS
==================================================*/

async function cargarEventos() {

    try {

        // Hace una petición al servidor
        const respuesta = await fetch("/eventos");

        // Convierte la respuesta a formato JSON
        const eventos = await respuesta.json();

      // Obtener la sección donde se mostrarán los eventos
const seccionEventos = document.getElementById("eventos");

// Recorrer todos los eventos recibidos
eventos.forEach(evento => {

    // Crear un artículo
    const article = document.createElement("article");

    // Agregar el contenido del evento
    article.innerHTML = `
        <img src="${evento.imagen}" alt="${evento.nombre}">
        <h3>${evento.nombre}</h3>
        <p>${evento.fecha}</p>
        <p>${evento.descripcion}</p>
        <button>Más información</button>
    `;

    // Agregar el artículo a la sección
    seccionEventos.appendChild(article);

});

    } catch (error) {

        console.log("Error al obtener los eventos");

        

    }

}