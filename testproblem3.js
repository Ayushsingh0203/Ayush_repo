const getinventory = require('./Inventory.js')
const mark = require('./problem3.js')
let inven = getinventory();
let marketing = mark(inven)

console.log(marketing)