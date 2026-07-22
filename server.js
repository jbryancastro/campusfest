/*
Este archivo levanta el servidor de Node.js.
Tambien conecta con MongoDB y define las rutas CRUD de eventos.
*/

// Importamos Express para crear el servidor web.
const express = require("express");
// Importamos Mongoose para trabajar con MongoDB.
const mongoose = require("mongoose");
// Importamos CORS para permitir peticiones desde el navegador.
const cors = require("cors");
// Cargamos variables de entorno desde el archivo .env.
require("dotenv").config();
// Importamos el modelo de eventos.
const Evento = require("./models/Evento");
// Importamos path para construir rutas de archivos.
const path = require("path");

// Creamos la aplicacion de Express.
const app = express();
// Definimos el puerto donde correra el servidor.
const PORT = 3000;

// Activamos CORS para aceptar solicitudes de otros origenes.
app.use(cors());
// Permitimos recibir datos JSON en req.body.
app.use(express.json());
// Publicamos archivos estaticos del proyecto (html, css, js, img).
app.use(express.static(__dirname));

// Conectamos a MongoDB usando la variable MONGO_URI.
mongoose
    .connect(process.env.MONGO_URI)
    // Si conecta bien, mostramos mensaje en consola.
    .then(() => {
        console.log("Conectado a MongoDB Atlas");
    })
    // Si falla la conexion, mostramos el error.
    .catch((error) => {
        console.log("Error al conectar con MongoDB");
        console.log(error);
    });

// Ruta para abrir directamente la pagina de registro de eventos.
app.get("/eventos.html", (req, res) => {
    // Enviamos el archivo html/eventos.html al navegador.
    res.sendFile(path.join(__dirname, "html", "eventos.html"));
});

// Ruta para obtener todos los eventos guardados.
app.get("/eventos", async (req, res) => {
    // Iniciamos bloque para capturar errores.
    try {
        // Consultamos todos los eventos en MongoDB.
        const eventos = await Evento.find();
        // Respondemos con la lista de eventos en JSON.
        res.json(eventos);
    } catch (error) {
        // Mostramos el error en consola para depurar.
        console.log(error);
        // Respondemos con error 500 si falla la consulta.
        res.status(500).send("Error al obtener los eventos.");
    }
});

// Ruta para crear un nuevo evento.
app.post("/eventos", async (req, res) => {
    // Iniciamos bloque para capturar errores.
    try {
        // Creamos un objeto Evento con datos del body.
        const nuevoEvento = new Evento({
            // Guardamos nombre.
            nombre: req.body.nombre,
            // Guardamos fecha.
            fecha: req.body.fecha,
            // Guardamos descripcion.
            descripcion: req.body.descripcion,
            // Guardamos imagen.
            imagen: req.body.imagen
        });

        // Guardamos el nuevo evento en la base de datos.
        await nuevoEvento.save();

        // Respondemos con mensaje de exito y el evento creado.
        res.json({
            mensaje: "Evento creado correctamente",
            evento: nuevoEvento
        });
    } catch (error) {
        // Mostramos el error en consola para depurar.
        console.log(error);
        // Respondemos con error 500 si falla el guardado.
        res.status(500).json({
            mensaje: "Error al crear evento"
        });
    }
});

// Ruta para obtener un evento por su id.
app.get("/eventos/:id", async (req, res) => {
    // Iniciamos bloque para capturar errores.
    try {
        // Leemos el id enviado en la URL.
        const id = req.params.id;
        // Buscamos ese evento en MongoDB.
        const evento = await Evento.findById(id);

        // Si no existe, devolvemos 404.
        if (!evento) {
            return res.status(404).json({
                mensaje: "Evento no encontrado."
            });
        }

        // Si existe, lo devolvemos en formato JSON.
        res.json(evento);
    } catch (error) {
        // Mostramos el error en consola.
        console.error(error);
        // Respondemos con error 500 si falla la consulta.
        res.status(500).json({
            mensaje: "Error al obtener el evento."
        });
    }
});

// Ruta para eliminar un evento por id.
app.delete("/eventos/:id", async (req, res) => {
    // Iniciamos bloque para capturar errores.
    try {
        // Eliminamos el evento usando su id.
        const evento = await Evento.findByIdAndDelete(req.params.id);
        // Respondemos con mensaje de exito y el evento eliminado.
        res.json({
            mensaje: "Evento eliminado correctamente",
            evento
        });
    } catch (error) {
        // Respondemos con error 500 si falla la eliminacion.
        res.status(500).json({
            mensaje: "Error al eliminar evento",
            error
        });
    }
});

// Ruta para actualizar un evento por id.
app.put("/eventos/:id", async (req, res) => {
    // Iniciamos bloque para capturar errores.
    try {
        // Actualizamos el evento con nuevos datos y devolvemos la version actualizada.
        const eventoActualizado = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // Respondemos con mensaje de exito y el evento actualizado.
        res.json({
            mensaje: "Evento actualizado correctamente",
            evento: eventoActualizado
        });
    } catch (error) {
        // Respondemos con error 500 si falla la actualizacion.
        res.status(500).json({
            mensaje: "Error al actualizar evento",
            error
        });
    }
});

// Iniciamos el servidor en el puerto definido.
app.listen(PORT, () => {
    // Mostramos URL local para abrirlo en el navegador.
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});