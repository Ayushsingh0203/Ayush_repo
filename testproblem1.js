const getinventory = require('./Inventory.js')

const findid33 = require('./problem1.js')

let inven = getinventory();

let lotcsdc = findid33(inven);

console.log(lotcsdc)
