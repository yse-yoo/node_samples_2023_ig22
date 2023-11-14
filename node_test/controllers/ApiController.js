const tweet = require('../models/tweet')

exports.tweets = async (req, res) => {
    // Tweetモデルから、データを取得
    const tweets = await tweet.get();
    var json = JSON.stringify(tweets);
    console.log(tweets);
    res.send(json);
}

exports.userTweets = async (req, res) => {
    // Tweetモデルから、データを取得
    const user_id = req.params.user_id;
    const tweets = await tweet.getByUseId(user_id);
    var json = JSON.stringify(tweets);
    console.log(tweets);
    res.send(json);
}