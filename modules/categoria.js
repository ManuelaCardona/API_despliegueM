const { Schema, model } = require('mongoose'); // Importa las funciones Schema y model de mongoose para definir esquemas y modelos de datos
// Define el esquema del modelo Categoria

const CategoriaSchema = Schema({
    id_categoria: {
        type: Number,
        required: [true, 'El identificador del categoria es obligatorio'],
        unique: true
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    // estado: {
    //     type: Boolean,
    //     default: true, 
    //     required: [true, 'El estado es obligatorio']
    // },
})

// Crea y exporta el modelo Categoria a partir del esquema CategoriaSchema
module.exports = model('Categoria', CategoriaSchema);
