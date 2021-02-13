function mark(inv){
    inv.sort((a,b)=>{
        let aname = a.car_model.toLowerCase();
          let    bname = b.car_model.toLowerCase();
      
          if (aname < bname) {
              return -1;
          }
          if (aname > bname) {
              return 1;
          }
          return 0;
      })
      
      let sortedcarnames=[]
      
      for (let i = 0; i < inv.length; i++)
      sortedcarnames.push(inv[i].car_model)
      
    retrun inv
    
}

module.exports = mark
