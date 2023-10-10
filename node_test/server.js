// Express MVCフレームワーク（Webフレームワーク）
// expressモジュール読み込み
const express = require('express')
// dotenvモジュール読み込み
const dotenv = require('dotenv')

//設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT


//Webサーバ作成
const app = express()

// Middlewareの利用
// staticコンテンツの設定
// publicフォルダをWebルートとしてブラウザからアクセスできるようにする
app.use(express.static(__dirname + '/public'))

// URLエンコード（マルチバイト文字の対策）
app.use(express.urlencoded({ extended: true }))

// ルーティング（URLマッピング）
// トップページにGETリクエストされたとき処理
// サーバを停止（ていし）: Ctrl + C
app.get('/', (req, res) => {
    // クライアンのからのリクエスト
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // サーバーからのレスポンス
    res.send('トップページ')
})

app.get('/profile', (req, res) => {
    res.send('プロフィールページ')
})

// ログイン認証（POST）
app.post('/auth', (req, res) => {
    var loginName = req.body.login_name
    var password = req.body.password

    console.log(loginName)
    console.log(password)

    res.send('ログイン')
})

// サーバー待機（たいき） wait 
app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})
