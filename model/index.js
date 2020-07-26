// se instancia la directiva para activar el modo estricto para todo el script
'user strict'; 
//Se instancia el objeto en donde están las variables de entorno
const {config} = require('../config');
//Se instancia los componentes del motor de MySQL
const mysql = require('mysql2/promise');

//Función que realiza conexión a la base de datos
async function sql(script, objeto){
    
    //Se inicia la conexión a la base de datos
    const conexion = await mysql.createConnection({
        host: config.bdHost,
        port: config.bdPort,
        charset: 'UTF8_GENERAL_CI',
        database: config.bdName,
        user: config.bdUser,
        password: config.bdPassword,
        dateStrings: true
    });

    //Se activa la propiedad que permite pasar objetos JSON para las consultas
    conexion.config.namedPlaceholders = true;

    //Se ejecuta la consulta y se guarda resultado
    const resultado = await conexion.execute(script, objeto);

    //Se cierra conexión de la base de datos
    await conexion.end();

    //Se retorna el primer resultado, ya qu es el que trae la información
    return resultado[0];
}

module.exports = sql;