// Guardamos la URL base de la API.
const API_EVENTOS = "/eventos";
// Tomamos el formulario de registro.
const formEvento = document.getElementById("formEvento");
// Tomamos el cuerpo de la tabla donde se listan eventos.
const tablaEventos = document.getElementById("tablaEventos");

// Esta funcion obtiene y muestra todos los eventos.
async function cargarEventos() {
    // Inicia el bloque para manejar errores.
    try {
        // Pedimos los eventos al servidor.
        const respuesta = await fetch(API_EVENTOS);
        // Convertimos la respuesta en JSON.
        const eventos = await respuesta.json();
        // Limpiamos la tabla para no duplicar filas.
        tablaEventos.innerHTML = "";

        // Recorremos cada evento recibido.
        eventos.forEach((evento) => {
            // Agregamos una fila con sus datos.
            tablaEventos.innerHTML += `
                <tr>
                    <td>${evento.nombre}</td>
                    <td>${evento.fecha}</td>
                    <td>${evento.descripcion}</td>
                    <td><img src="${evento.imagen}" width="100" alt="${evento.nombre}"></td>
                </tr>
            `;
        });
    // Si algo falla, entra aqui.
    } catch (error) {
        // Mostramos el error para revisarlo.
        console.error("Error al cargar eventos:", error);
    }
}

// Escuchamos cuando se envia el formulario.
formEvento.addEventListener("submit", async (e) => {
    // Evitamos que la pagina se recargue.
    e.preventDefault();

    // Armamos el objeto con los datos escritos.
    const evento = {
        // Tomamos el nombre del evento.
        nombre: document.getElementById("nombre").value,
        // Tomamos la fecha del evento.
        fecha: document.getElementById("fecha").value,
        // Tomamos la descripcion del evento.
        descripcion: document.getElementById("descripcion").value,
        // Tomamos la ruta de la imagen del evento.
        imagen: document.getElementById("imagen").value
    };

    // Inicia el bloque para manejar errores.
    try {
        // Enviamos los datos al servidor para registrar.
        const respuesta = await fetch(API_EVENTOS, {
            // Indicamos que es creacion.
            method: "POST",
            // Indicamos formato JSON.
            headers: { "Content-Type": "application/json" },
            // Convertimos el objeto a texto JSON.
            body: JSON.stringify(evento)
        });
        // Leemos la respuesta del servidor.
        const resultado = await respuesta.json();

        // Si el servidor responde bien, seguimos.
        if (respuesta.ok) {
            // Avisamos que se registro correctamente.
            alert("Evento registrado correctamente");
            // Limpiamos el formulario.
            formEvento.reset();
            // Recargamos la tabla para ver el nuevo evento.
            cargarEventos();
        // Si el servidor responde error, mostramos mensaje.
        } else {
            // Mostramos el mensaje de error del servidor.
            alert("Error: " + resultado.mensaje);
        }
    // Si algo falla, entra aqui.
    } catch (error) {
        // Mostramos el error para depurar.
        console.error("Error al registrar evento:", error);
        // Avisamos al usuario.
        alert("No se pudo conectar con el servidor");
    }
});

// Al cargar la pagina, listamos eventos.
window.onload = cargarEventos;