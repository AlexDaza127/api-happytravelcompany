//Esta API contiene todas las asignaciones de las consultas a la tabla Rol

const express = require('express');
const router = express.Router();
const cors = require("cors");
const consultarLoginUsuarios = require('../../model/login');

router.use(cors());//habilitando los cors para paginas web

const objLogin = new consultarLoginUsuarios();


//Consultar usuario a traves de la función de middleware
router.get('/:idUsuario', 
async (request, response) => {
    try {
        const { idUsuario } = request.params;
        const usuario = await objLogin.LoginUsuario({ idUsuario });
        
        if (usuario) {
            response.status(200).json({
                data: usuario,
                estado: true
            });
        }else{
            response.status(404).json({
                data: usuario,
                mensaje: 'Usuario no existe',
                estado: false
            });
        }
    } catch (error) {
        response.status(500).json({
            data: error,
            mensaje: 'No fue posible traer los datos del usuario',
            estado: false
        });
    }
});







module.exports = router;