// Expressモジュール読み込み
const express = require('express')

// Routerの利用
const router = express.Router()

// controllersモジュール読み込み
const HomeController = require('./controllers/HomeController')
const LoginController = require('./controllers/LoginController')
const ItemController = require('./controllers/ItemController')
const UserController = require('./controllers/UserController')
const ApiController = require('./controllers/ApiController')

// HomeController
router.get('/', HomeController.index)
router.get('/profile', HomeController.profile)

// LoginController
router.get('/login', LoginController.index)
router.post('/auth', LoginController.auth)

// ItemController
router.get('/item/', ItemController.index)
router.get('/item/:id', ItemController.detail)

// UserController
router.get('/user/', UserController.index)
router.get('/user/logout', UserController.logout)

// ApiController
router.get('/api/tweets', ApiController.tweets)
router.get('/api/user/tweets/:user_id', ApiController.userTweets)

module.exports = router