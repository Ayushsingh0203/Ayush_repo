const getinventory = require('./Inventory.js')
const account = require('./problem4.js')
let inven = getinventory();
let accounting = account(inven)

console.log( accounting)