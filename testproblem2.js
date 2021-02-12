const getinventory = require('./Inventory.js')
const lastcar = require('./problem2.js')
let inven = getinventory();
let lc = lastcar(inven)

console.log(lc)