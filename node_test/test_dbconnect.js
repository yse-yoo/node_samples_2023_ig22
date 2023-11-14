const mysql = require('mysql2');
const dotenv = require('dotenv')
dotenv.config()

// mysqlの接続設定
const db_info = {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
}
console.log("Database Info", db_info)

//DB接続
const con = mysql.createConnection(db_info)
con.connect((error) => {
    if (error) {
        //エラーの場合
        console.log('DB Error!!!')
    } else {
        //成功の場合
        console.log("DB Connect!!!");
        var sql = "INSERT INTO tweets (message, user_id) VALUE ('Node.jsから書き込み', 1);";
        console.log(sql)
        con.query(sql);
        con.end();
    }
})
