require("dotenv").config();
const mysql = require("mysql");

// etablir la connexion avec les variables d environnement creees
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = connection;