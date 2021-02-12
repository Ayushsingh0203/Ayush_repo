function lastcar(a){
    for (let i = 0; i < a.length; i++) {
        if (i+1===a.length) {
          
          return  "Last car " +
              " is a " +
              a[i].car_year +
              " " +
              a[i].car_make +
              " " +
              a[i].car_model
          ;
        }
      }
}
module.exports =  lastcar 