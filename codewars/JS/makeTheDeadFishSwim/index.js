// Return the output array, and ignore all non-op characters
function parse( data )
{
  let deadfish = 0
  let arrayDeadfish = []
  let arr = [...data]
  arr.forEach((el) => {
    switch(el){
        case 'i' : {
          deadfish += 1
          break
        }
        case 'd': {
          deadfish -= 1
          break
        }
        case 's': {
          deadfish *= deadfish
          break
        }
        case 'o': {
          arrayDeadfish.push(deadfish)
          break
        }
    }
  })
  
  return arrayDeadfish
}

console.log(parse("iiisdoso")) // => [ 8, 64 ]