//Esta API contiene todas las asignaciones de las consultas para le usuario cliente

const express = require('express');
const router = express.Router();
const cors = require("cors");
const Cliente = require('../../model/consultaCliente');

router.use(cors());//habilitando los cors para paginas web

const objCliente = new Cliente();

//Consultar los inmuebles para reservar a traves de la función de middleware
router.get('/reserinm', async (request, response, next) => {
    try {
        const roles = await objCliente.mostrarReservasInmuebles();
        response.status(200).json({
            data: roles,
            estado: true
        })
    } catch (error) {
        response.status(500).json({
            data:error,
            mensaje: 'No fue posible traer los datos de los inmuebles de reserva',
            estado: false
        });
    }
});

router.get('/observaciones', async (request, response, next) => {
    try {
        const roles = await objCliente.observacionesCliente();
        response.status(200).json({
            data: roles,
            estado: true
        })
    } catch (error) {
        response.status(500).json({
            data:error,
            mensaje: 'No fue posible traer los datos de los inmuebles de reserva',
            estado: false
        });
    }
});

module.exports = router;