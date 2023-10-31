const fs = require('fs');

// JSONファイルのパス
var dataFile = "./data/items.json"

exports.get = () => {
    var values = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    return values;
}

exports.find = (id) => {
    var values = this.get();
    return values.find((value) => value.id == id);
}

module.exports = this