const fs = require('fs');
const dotenv = require('dotenv')

dotenv.config()
const message = require('./message')

// .envから読み込み
const NAME = process.env.NAME
const NUMBER = process.env.NUMBER

// messageのcreate() を実行
const result = message.create(NAME, NUMBER)
console.log(result)

// ファイルに書き込み
fs.writeFile('result.txt', result, (err) => {
  if (err) {
    console.error('Error...', err);
    return;
  }
  console.log('Success!');
});
