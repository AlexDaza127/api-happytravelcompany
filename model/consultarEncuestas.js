'use strict';
const sql = require('./index');

//Clase que contiene las sentencias SQL
class ConsultarEncuesta{

    //Consultar todos las encuestas 
    async mostrarEncuestas(){
        return await sql (
            'SELECT * FROM Encuesta'
        )
    }

}

module.exports = ConsultarEncuesta;