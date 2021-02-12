const getinventory = require('./Inventory.js')
const manager = require('./problem5.js')
const account = require('./problem4')
let inven = getinventory();
let accounting = account(inven);

let manage = manager(accounting,inven)

console.log(manage)
