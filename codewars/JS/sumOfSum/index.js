function sumOfSums(n) {
    let sum = 0n
    let innerSum = 0n 
    for(let i = 1n; i <= n; i++){
      innerSum += (i * (i + 1n)) / 2n
    }
    for(let j = 1n; j <= innerSum; j++){
        sum += j
      }
    console.log(sum)
    return sum;
}