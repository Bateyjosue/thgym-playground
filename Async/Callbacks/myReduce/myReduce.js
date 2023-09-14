// function myReduce(arr, func, inialValue=null) {
//     let value = 0;
//     if(arr){
//         for(let i = 0; i <arr.length; i++) {
//             value = func(inialValue, arr[i])
//             inialValue  = value
//         }
//         return value;
//     }else return inialValue
// }

// const numbers = [1, 2,3,4]
    
// const sum = myReduce(numbers,(acc , curr) => {
// 	return acc + curr 
// }, 0)

function myReduce(func, inialValue=null) {
    let value = 0;
    if(this){
        for(let i = 0; i <this.length; i++) {
            value = func(inialValue, this[i])
            inialValue  = value
        }
        return value;
    }else return inialValue
}

Array.prototype.myReduce = myReduce
const numbers = [1, 2, 3, 4]

const sum = numbers.myReduce((acc , curr) => {
	return acc * curr 
}, 0)

console.log(sum)
    // console.log(numbers.reduce((a, b) => a + b))