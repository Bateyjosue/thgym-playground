function whatCentury(year)
{
  // code must go here
  const cent = getCentury(year).toString()
  const [a, b] = [...cent]
  if(a > 1){
    switch(b){
        case '1':{
          return `${getCentury(year)}st`
          break
        }
        case '2':{
          return `${getCentury(year)}nd`
          break
        }
        case '3':{
          return `${getCentury(year)}rd`
          break
        }
        default:{
          return `${getCentury(year)}th`
        }
    }
  }else {
    return `${getCentury(year)}th`
  }
}

function getCentury(year){
  const [a, b,...rest] = [...year]
  const su = a + b
  return check(...rest) ? +su : +su + 1 
}

function check(...rest){
  return rest.every(el => el == 0)
}