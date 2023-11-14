const mysql = require('mysql2/promise');
const db = require('../db')

exports.getTweets = async () => {
    const sql = "SELECT * FROM tweets;";
    const con = await mysql.createConnection(db.info);
    const [rows, fields] = await con.query(sql);
    con.end();
    return rows;
}
