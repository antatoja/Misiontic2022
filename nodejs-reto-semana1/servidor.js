//console.log("Hola  Mundo desde NodeJS")

const express = require('express');
const mongoose = require('mongoose');
const EstudianteSchema = require("./modelos/Estudiante");


const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//conexon base de datos
mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.p8ml1hi.mongodb.net/EstudiantesBD?retryWrites=true&w=majority");

// operaciones CRUD
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})

router.get('/estudiante', (req, res) => {
    EstudianteSchema.find(function(err, datos){
        if(err){
            console.log("error leyendo estudiante");
        }else{
            res.send(datos);
        }   
    })
});


router.post('/estudiante', (req, res) => {
    let nuevaEstudiante = new EstudianteSchema({
        idEstudiante: req.body.id,
        tipo_documentoEstudiante: req.body.tipo_documento,
        documentoEstudiante: req.body.documento,
        nombreEstudiante: req.body.nombre,
        ApellidoEstudiante: req.body.Apellido,
        DireccionEstudiante: req.body.Direccion,
        Correo_eEstudiante: req.body.Correo_e,
        Telefono_FijoEstudiante: req.body.Telefono_Fijo,
        Telefono_CelularEstudiante: req.body.Telefono_Celular,
        Link_ConsignacionEstudiante: req.body.Link_Consignacion,
        Codigo_IcfesEstudiante: req.body.Codigo_Icfes,
        FamiliarEstudiante: req.body.Familiar,
        EstractoEstudiante: req.body.Estracto,
        ColegioEstudiante: req.body.Colegio
    });

    nuevaEstudiante.save(function(err, datos){
        if (err){
            console.log(err);
        }
        res.send("Estudiante Almacenada correactamente")
    })
});

router.delete('/estudiante', (req, res) => {
    EstudianteSchema.remove({idEstudiante:1},
    function(err, datos){
        if(err){
            console.log("error leyendo Estudiante");
        }else{
            res.send(datos);
            console.log("El dato ha sido Borrado");
        }   
    });
});


router.put('/estudiante', (req, res) => {
    EstudianteSchema.findByIdAndUpdate((req.body.id), {nombreEstudiante: req.body.nombre},
    function(err, datos){
        if(err){
            console.log("error leyendo Estudiante");
        }else{
            res.send(datos);
            console.log("El dato ha sido modificado");
        }   
    });
});


app.use (router);
app.listen(3000, () => {
    console.log("servidor corriendo por el puesto 3000")
});