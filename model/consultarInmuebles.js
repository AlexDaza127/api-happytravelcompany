'use strict';
const sql = require('./index');

//Clase que contiene las sentencias SQL
class ConsultarInmuebles{

    //Consultar todos los Inmuebles 
    async mostrarInmuebles(){
        return await sql (
            'SELECT * FROM Inmueble'
        )
    }
}

module.exports = ConsultarInmuebles;