const getinventory = require('./Inventory.js')
const audiandbmw = require('./problem6.js')
let inven = getinventory();
let cars = audiandbmw(inven)

console.log(cars)