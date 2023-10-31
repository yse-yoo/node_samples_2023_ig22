// Expressモジュール読み込み
const express = require('express')
// models/itemモジュール読み込み
const item = require('./models/item')

// Routerの利用
const router = express.Router()

// controllers/HomeControllerモジュール読み込み
const HomeController = require('./controllers/HomeController')
// トップページ
// HomeController の index() を実行
router.get('/', HomeController.index)
// HomeController の profile() を実行
router.get('/profile', HomeController.profile)

// ログイン
router.get('/login', (req, res) => {
    // views/login/index.ejs
    res.render('login/index')
})


// 商品一覧（しょうひんいちらん）
router.get('/item/', (req, res) => {
    //データをすべて取得
    var data = {
        items: item.get()
    }
    // views/item/index.ejs に dataを渡して表示
    res.render('item/index', data)
})


// 商品詳細（しょうひんしょうさい）
router.get('/item/:id', (req, res) => {
    const id = req.params.id
    // データを検索して用意
    var data = {
        item: item.find(id)
    }
    // views/item/detail.ejs に dataを渡して表示
    res.render('item/detail', data)
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