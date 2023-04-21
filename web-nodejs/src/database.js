const mysql = require('mysql');
const {promisify} = require('util');

const database = {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_ROOT_PASSWORD || 'itesm',
    database: process.env.MYSQL_DATABASE || 'test_database'
}

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === "PROTOCOL_COONECTION_LOST") {
            console.error('DATABASE CONNECTION WAS CLOSED', err);
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("DATABASE HAS TO MANY CONNECTIONS", err);
        }
        if (err.code = "ECONNREFUSED") {
            console.error('DATABASE CONNECTION WAS REFUSED', err);
        }
    }

    else {
        if (connection) connection.release();
        console.log("DB is Connected");
        return;
    }
})

// Create promises from callbacks
pool.query = promisify(pool.query);

module.exports = pool;

