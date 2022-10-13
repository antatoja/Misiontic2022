const mongoose = require('mongoose');


let EstudianteSchema = new mongoose.Schema({
    idEstudiante: Number,
    tipo_documentoEstudiante: String,
    documentoEstudiante: Number,
    nombreEstudiante: String,
    ApellidoEstudiante: String,
    DireccionEstudiante: String,
    Correo_eEstudiante: String,
    Telefono_FijoEstudiante: String,
    Telefono_CelularEstudiante: String,
    Link_ConsignacionEstudiante: String,
    Codigo_IcfesEstudiante: String,
    FamiliarEstudiante: String,
    EstractoEstudiante: Number,
    ColegioEstudiante: String,
});

module.exports = mongoose.model('estudiante', EstudianteSchema, 'Estudiantes');
