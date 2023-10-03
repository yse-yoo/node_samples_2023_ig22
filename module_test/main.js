// モジュール読み込み
const itemsModule = require('./items')
const controlModule = require('./control')

var items = itemsModule.itmes
controlModule.show(items)