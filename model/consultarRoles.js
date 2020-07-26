'use strict';
const sql = require('./index');

//Clase que contiene las sentencias SQL
class ConsultarRoles{

    //Consultar todos los roles 
    async consultarNombres(){
        return await sql (
            'SELECT * FROM Rol'
        )
    }
}

module.exports = ConsultarRoles;