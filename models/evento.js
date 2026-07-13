// Importa Mongoose
const mongoose = require("mongoose");

// Crea el esquema del evento
const eventoSchema = new mongoose.Schema({

    // Nombre del evento
    nombre: {
        type: String,
        required: true
    },

    // Fecha del evento
    fecha: {
        type: String,
        required: true
    },

    // Descripción
    descripcion: {
        type: String,
        required: true
    },

    // Ruta de la imagen
    imagen: {
        type: String,
        required: true
    }

});

// Crea el modelo llamado Evento
const Evento = mongoose.model("Evento", eventoSchema);

// Exporta el modelo para utilizarlo en otros archivos
module.exports = Evento;