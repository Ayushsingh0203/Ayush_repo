function account(c){
    let yearArray=[]

for (let i = 0; i < c.length; i++) {
  yearArray.push(c[i].car_year);
}
return(yearArray)

}

module.exports = account