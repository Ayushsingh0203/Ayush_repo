function manager(yearArray,inv){
    
let oldcars=[]
for (let i = 0; i < yearArray.length; i++) {
  if(yearArray[i]<2000){
oldcars.push(inv[i])

  }
}
return(oldcars)
}

module.exports = manager


