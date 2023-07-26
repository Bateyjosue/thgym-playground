function twoArePositive(a, b, c) {
  // Happy Coding
  let arr = [a,b,c].filter((el) => el > 0)
  return arr.length === 2
}

