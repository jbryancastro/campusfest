/* este es elcorazón de la aplicación Node.js. Es el archivo que inicia el servidor 
y coordina todo lo que ocurre entre el navegador y conecta con la base de datos  */

// Importa la librería Express para crear el servidor web
const express = require("express");

// Importa Mongoose, que permite conectar Node.js con MongoDB
const mongoose = require("mongoose");

// Lee el archivo .env y carga sus variables de entorno
require("dotenv").config();

// Importa el modelo Evento para trabajar con la colección eventos
const Evento = require("./models/Evento");

// Crea la aplicación de Express
const app = express();

// Define el puerto donde se ejecutará el servidor
const PORT = 3000;

/*==================================================
    CONEXIÓN A MONGODB ATLAS
==================================================*/

// Se conecta a MongoDB utilizando la cadena almacenada
// en la variable MONGO_URI del archivo .env
mongoose.connect(process.env.MONGO_URI)

// Si la conexión fue exitosa, ejecuta esto
.then(() => {

    console.log("✅ Conectado a MongoDB Atlas");

})

// Si ocurrió algún error durante la conexión, ejecuta esto
.catch((error) => {

    console.log("❌ Error al conectar con MongoDB");

    // Muestra el detalle del error
    console.log(error);

});

/*==================================================
    CONFIGURACIÓN DE EXPRESS
==================================================*/

// Permite que el navegador pueda acceder a todos los
// archivos que estén dentro de la carpeta "public"
// (HTML, CSS, JavaScript, imágenes, etc.)
app.use(express.static("public"));

/*==================================================
    RUTA PARA CREAR UN EVENTO DE PRUEBA
==================================================*/

// Cuando el navegador visite:
// http://localhost:3000/crear-evento
// este código guardará un documento en MongoDB.

app.get("/crear-evento", async (req, res) => {

    try {

        // Crea un nuevo objeto basado en el modelo Evento
        const nuevoEvento = new Evento({

            // Nombre del evento
            nombre: "Concurso de Robótica",

            // Fecha del evento
            fecha: "24 de mayo de 2026",

            // Descripción del evento
            descripcion: "Competencia entre universidades.",

            // Ruta de la imagen
            imagen: "/img/robotica.jpeg"

        });

        // Guarda el documento en MongoDB
        await nuevoEvento.save();

        // Envía un mensaje al navegador
        res.send("✅ Evento guardado correctamente.");

    } catch (error) {

        // Muestra el error en la consola
        console.log(error);

        // Envía un mensaje al navegador
        res.send("❌ Error al guardar el evento.");

    }

});

/*==================================================
    OBTENER TODOS LOS EVENTOS
==================================================*/

// Cuando el navegador visite:
// http://localhost:3000/eventos
// el servidor consultará todos los eventos
// almacenados en MongoDB.

app.get("/eventos", async (req, res) => {

    try {

        // Busca todos los documentos de la colección eventos
        const eventos = await Evento.find();

        // Envía los eventos al navegador en formato JSON
        res.json(eventos);

    } catch (error) {

        // Muestra el error en la consola
        console.log(error);

        // Envía un mensaje de error
        res.status(500).send("Error al obtener los eventos.");

    }

});
/*==================================================
    INICIAR EL SERVIDOR
==================================================*/

// Inicia el servidor y queda esperando solicitudes
// desde el navegador en el puerto 3000
app.listen(PORT, () => {

    console.log(`Servidor iniciado en http://localhost:${PORT}`);

});