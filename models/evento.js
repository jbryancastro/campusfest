// Importamos Mongoose para crear esquemas y modelos de MongoDB.
const mongoose = require("mongoose");

// Definimos la estructura que tendra cada evento en la base de datos.
const eventoSchema = new mongoose.Schema({
    // Campo para guardar el nombre del evento.
    nombre: {
        // El tipo de dato sera texto.
        type: String,
        // Este campo es obligatorio.
        required: true
    },

    // Campo para guardar la fecha del evento.
    fecha: {
        // El tipo de dato sera texto.
        type: String,
        // Este campo es obligatorio.
        required: true
    },

    // Campo para guardar la descripcion del evento.
    descripcion: {
        // El tipo de dato sera texto.
        type: String,
        // Este campo es obligatorio.
        required: true
    },

    // Campo para guardar la ruta o URL de la imagen del evento.
    imagen: {
        // El tipo de dato sera texto.
        type: String,
        // Este campo es obligatorio.
        required: true
    }
});

// Creamos el modelo llamado Evento usando el esquema definido.
const Evento = mongoose.model("Evento", eventoSchema);

// Exportamos el modelo para poder usarlo en otros archivos.
module.exports = Evento;