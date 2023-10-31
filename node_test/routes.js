// Expressモジュール読み込み
const express = require('express')
// models/itemモジュール読み込み
const item = require('./models/item')

// Routerの利用
const router = express.Router()

// controllersモジュール読み込み
const HomeController = require('./controllers/HomeController')
const LoginController = require('./controllers/LoginController')

// HomeController
router.get('/', HomeController.index)
router.get('/profile', HomeController.profile)

// LoginController
router.get('/login', LoginController.index)
router.post('/auth', LoginController.auth)

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


module.exports = router