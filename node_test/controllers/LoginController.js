const user = require('../models/user')

// ログイントップ
exports.index =  (req, res) => {
    // views/login/index.ejs
    res.render('login/index')
}

// 認証処理
exports.auth = (req, res) => {
    var loginName = req.body.login_name
    var password = req.body.password

    var message = "ログイン失敗..."
    var authUser = user.auth(loginName, password);
    console.log(authUser)
    // if (loginName == process.env.LOGIN_NAME
    //     && password == process.env.PASSWORD) {
    //     message = "ログイン成功！"
    // }
    // console.log(loginName)
    // console.log(password)


    res.send(message)
}