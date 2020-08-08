'use strict';
const sql = require('./index');

//Clase que contiene las sentencias SQL
class Login {

    //Consultar todos las encuestas 
    async LoginUsuario(idUsuario) {
        const query = `SELECT 
                contraseña 
            FROM 
                HappyTravel.Usuario 
            WHERE 
                idUsuario = :idUsuario`;
        const usuario = await sql(query, idUsuario);
        return usuario;
    }

}

module.exports = Login;