// Expressモジュール読み込み
const express = require('express')

// Routerの利用
const router = express.Router()

// ルーティング（URLマッピング）
// トップページにGETリクエストされたとき処理
// サーバを停止（ていし）: Ctrl + C
router.get('/', (req, res) => {
    // クライアンのからのリクエスト
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // サーバーからのレスポンス
    res.send('トップページ')
})

router.get('/profile', (req, res) => {
    res.send('プロフィールページ')
})

// ログイン認証（POST）
router.post('/auth', (req, res) => {
    var loginName = req.body.login_name
    var password = req.body.password

    var message = "ログインできませんでした"
    if (loginName == process.env.LOGIN_NAME
        && password == process.env.PASSWORD) {
            message = "ログインできました"
        }
    console.log(loginName)
    console.log(password)

    res.send(message)
})

module.exports = router