//Esta API contiene todas las asignaciones de las consultas a la tabla Inmueble

const express = require('express');
const router = express.Router();
const cors = require("cors");
const Inmuebles = require('../../model/consultarInmuebles');

router.use(cors());//habilitando los cors para paginas web

const objInmuebles = new Inmuebles();

//Consultar los inmuebles a traves de la función de middleware
router.get('/', async (request, response, next) => {
    try {
        const roles = await objInmuebles.mostrarInmuebles();
        response.status(200).json({
            data: roles,
            estado: true
        })
    } catch (error) {
        response.status(500).json({
            data:error,
            mensaje: 'No fue posible traer los datos de los inmuebles',
            estado: false
        });
    }
});

module.exports = router;