// ORM（ORマッピング）

const fs = require('fs');

// JSONファイルのパス
var dataFile = "";

exports.init = (file) => {
    dataFile = file;
}

/**
 * データをすべて取得
 * @returns array
 */
exports.get = () => {
    console.log(dataFile)
    var values = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    return values;
}

/**
 * IDからデータ取得
 * @param number id 
 * @returns array 
 */
exports.find = (id) => {
    var values = this.get();
    return values.find((value) => value.id == id);
}