const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : process.env.DB_HOST, // MYSQL HOST NAME
    user     : process.env.DB_USER, // MYSQL USERNAME
    password : process.env.DB_PASS, // MYSQL PASSWORD
    database : 'nodejs_login' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;