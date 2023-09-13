function duplicateCount(text){
    let obj = {}
    
    text.toLowerCase().split('').forEach(el => {
      if(Object.keys(obj).includes(el)){
        obj[el]++
      }else {
        obj[el] = 1
      }
    })
    return Object.entries(obj).filter(el => el[1] > 1).length
  }