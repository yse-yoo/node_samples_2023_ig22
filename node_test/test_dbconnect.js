const mysql = require('mysql2');
const dotenv = require('dotenv')
dotenv.config()

const db_info = {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
}
console.log("Database Info", db_info)
