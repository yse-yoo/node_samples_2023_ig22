
//ユーザトップページ
exports.index = (req, res) => {
    // セッションからユーザ情報を取得
    var authUser = req.session.authUser
    if (!authUser) {
        //ユーザがいなければ、ログインページにリダイレクト
        res.redirect('/login')
    }
    //受け渡すデータを用意
    var data = {
        user: authUser
    }
    // views/user/index.ejs を表示
    res.render('user/index', data)
}

exports.logout = (req, res) => {
    //ユーザのセッションを削除
    delete(req.session.authUser)
    //ログインページにリダイレクト
    res.redirect('/login')
}