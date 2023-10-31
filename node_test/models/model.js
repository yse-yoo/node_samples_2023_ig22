const fs = require('fs');

// JSONファイルのパス
exports.dataFile = "";

/**
 * データをすべて取得
 * @returns array
 */
exports.get = () => {
    var values = JSON.parse(fs.readFileSync(this.dataFile, 'utf8'));
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