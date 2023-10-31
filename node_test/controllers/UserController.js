
//ユーザトップページ
exports.index = (req, res) => {
    // セッションからユーザ情報を取得
    var authUser = req.session.authUser
    if (!authUser) {
        //ユーザがいなければ、ログインページにリダイレクト
        res.redirect('/login')
    }
    // views/user/index.ejs を表示
    res.render('user/index')
}