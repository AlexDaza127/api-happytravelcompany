//Esta API contiene todas las asignaciones de las consultas a la tabla Rol

const express = require('express');
const router = express.Router();
const cors = require("cors");
const consultarRoles = require('../../model/consultarRoles');

router.use(cors());//habilitando los cors para paginas web

const objRoles = new consultarRoles();

//Consultar los roles a traves de la función de middleware
router.get('/', async (request, response, next) => {
    try {
        const roles = await objRoles.consultarNombres();
        response.status(200).json({
            data: roles,
            estado: true
        })
    } catch (error) {
        response.status(500).json({
            data:error,
            mensaje: 'No fue posible traer los datos de los roles',
            estado: false
        });
    }
});

module.exports = router;