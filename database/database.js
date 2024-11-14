// database.js
const sql = require('mssql');

const config = {
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    server: process.env.MYSQLHOST,
    database: process.env.MYSQLDATABASE,
    options: {
        encrypt: true,
        enableArithAbort: true
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conectado a la base de datos SQL Server');
        return pool;
    })
    .catch(err => {
        console.error('Error al conectar a SQL Server:', err);
    });

module.exports = {
    sql,
    poolPromise
};
