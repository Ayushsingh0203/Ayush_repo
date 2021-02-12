function findid33(inv){
    for (let i = 0; i < inv.length; i++) {
        if (inv[i].id === 33) {
           
          return  "car " +
              33 +
              " is a " +
              inv[i].car_year +
              " " +
              inv[i].car_make +
              " " +
              inv[i].car_model
          ;
        }
        // return 'notfound'
      }
}
module.exports = findid33



