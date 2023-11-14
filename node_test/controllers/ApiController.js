const tweet = require('../models/tweet')

exports.tweets = async (req, res) => {
    // Tweetモデルから、データを取得
    const tweets = await tweet.get();
    var json = JSON.stringify(tweets);
    console.log(tweets);
    res.send(json);
}