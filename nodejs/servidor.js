//console.log("Hola  Mundo desde NodeJS")

const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require("./modelos/Terea.js");


const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//conexon base de datos
mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.p8ml1hi.mongodb.net/ActividadesBD?retryWrites=true&w=majority");

// operaciones CRUD
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})

router.get('/tarea', (req, res) => {
    TareaSchema.find(function(err, datos){
        if(err){
            console.log("error leyendo Tareas");
        }else{
            res.send(datos);
        }   
    })
});


router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });

    nuevaTarea.save(function(err, datos){
        if (err){
            console.log(err);
        }
        res.send("Tarea Almacenada correactamente")
    })
});

router.delete('/tarea', (req, res) => {
    TareaSchema.remove({idTarea:3},
    function(err, datos){
        if(err){
            console.log("error leyendo Tareas");
        }else{
            res.send(datos);
            console.log("El dato ha sido Borrado");
        }   
    })
});

/*router.post('/tarea', (req, res) => {
    TareaSchema.findByIdAndDelete((req.body.id),
    function(err, datos){
        if(err){
            console.log("error leyendo Tareas");
        }else{
            res.send(datos);
            console.log("El dato ha sido Borrado");
        }   
    });
});*/

router.patch('/tarea', (req, res) => {
    TareaSchema.findByIdAndUpdate((req.body.id), {nombreTarea: req.body.nombre}, 
    function(err, datos){
        if(err){
            console.log("error leyendo Tareas");
        }else{
            res.send(datos);
            console.log("El dato ha sido modificado");
        }   
    })
});


app.use (router);
app.listen(3000, () => {
    console.log("servidor corriendo por el puesto 3000")
});