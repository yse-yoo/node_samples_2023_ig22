const mysql = require('mysql2/promise');
const db = require('./db')
// 非同期処理
const getTweets = async () => {
    const sql = "SELECT * FROM tweets;";
    //DB接続
    const con = await mysql.createConnection(db.info);
    //SQL実行
    const [rows, fields] = await con.query(sql);
    rows.forEach((row) => {
        console.log(row.message)
    })
    //DB切断
    con.end();
}

getTweets();