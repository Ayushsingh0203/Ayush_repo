function audiandbmw(audibmw){
    let audibmwarray=[]
for (let i = 0; i < audibmw.length; i++) {
  if (audibmw[i].car_make==='BMW'||audibmw[i].car_make==='Audi') {
   audibmwarray.push(audibmw[i]);
  }
}

return (audibmwarray);
}

module.exports = audiandbmw