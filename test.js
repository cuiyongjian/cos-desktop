const path = require('path')

var a = path.resolve(__dirname, '../node_modules')

console.log(a)

var b = a.replace(/\\/g, '\\\\')
console.log('b', b)