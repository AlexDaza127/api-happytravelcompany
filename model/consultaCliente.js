'use strict';
const sql = require('./index');

//Clase que contiene las sentencias SQL
class ConsultarCliente {

    //Consultar todos las encuestas 
    async mostrarReservasInmuebles() {
        return await sql(
            `
        SELECT
            I.idInmueble,
            I.precioMin,
            I.nHabitaciones,
            I.nBaños,
            I.nPersonas,
            E.nEstrella,
            I.mascotas,
            T.nombre,
            V.tipo,
            I.disponible,
            F.foto
        FROM
            Inmueble AS I 
        INNER JOIN
            Encuesta AS E 
        ON 
            I.idInmueble = E.idInmueble
        INNER JOIN
            Ventilacion AS V
        ON
            I.idVentilacion = V.idVentilacion
        INNER JOIN 
            Tipo AS T
        ON
            I.idTipo = T.idTipo
        INNER JOIN 
            FotoInmueble AS F
        ON
            F.idInmueble = I.idInmueble;`
        )
    }

    async observacionesCliente() {
        return await sql(`
        SELECT
            E.observaciones
        FROM
            HappyTravel.Inmueble AS I 
        INNER JOIN
            HappyTravel.Encuesta AS E 
        ON 
            I.idInmueble = E.idInmueble;`
        )
    }
}

module.exports = ConsultarCliente;