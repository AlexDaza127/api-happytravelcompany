//Esta API contiene todas las asignaciones de las consultas a la tabla Encuesta

const express = require('express');
const router = express.Router();
const cors = require("cors");
const Encuestas = require('../../model/consultarEncuestas');

router.use(cors());//habilitando los cors para paginas web

const objEncuestas = new Encuestas();

//Consultar los encuestas a traves de la función de middleware
router.get('/', async (request, response, next) => {
    try {
        const roles = await objEncuestas.mostrarEncuestas();
        response.status(200).json({
            data: roles,
            estado: true
        })
    } catch (error) {
        response.status(500).json({
            data:error,
            mensaje: 'No fue posible traer los datos de las encuestas',
            estado: false
        });
    }
});

module.exports = router;