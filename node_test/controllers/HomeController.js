
// トップページの処理
exports.index = (req, res) => {
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)
    // res.send('トップページ')
    //views/index.ejsを表示
    res.render('index')
}