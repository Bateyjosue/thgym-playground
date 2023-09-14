 Create a function called `myReduce` that works similarly to the native [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) the function should receive 3 arguments:

- The array itself is to be reduced
- A reducer callback function that will be used to reduce the array 

(this callback function should itself receive 3 parameters: `accumulator`, `currentValue`, `currentIndex`, and `array` 

(check the original [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) docs for more info)
- The optional initial value

The function should return the results from running the `reducer` callback function to completion over the entire array.
    
```js
const numbers = [1, 2, 3, 4]

const sum = myReduce(numbers, (acc , curr) => {
    return acc + curr 
}, 0)

console.log(sum) // 10
```
    
****************Bonus points (optional)****************

Update `myReduce` function so that it can be called as a method of any array instead (it should be called as the native `reduce` method.

```js
const numbers = [1, 2, 3, 4]

const sum = numbers.myReduce((acc , curr) => {
	return acc + curr 
}, 0)

console.log(sum) // 10
```
