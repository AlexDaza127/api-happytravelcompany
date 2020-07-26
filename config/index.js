require('dotenv').config();

// se crea la instanciación de las variables de ambiente que se van a utilizar en el proyecto
const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT,
    bdUser: process.env.BD_USER,
    bdPassword: process.env.BD_PASSWORD,
    bdHost: process.env.BD_HOST,
    bdPort: process.env.BD_PORT,
    bdName: process.env.BD_NAME,
    bdDialect: process.env.BD_DIALECT
}

module.exports = { config };