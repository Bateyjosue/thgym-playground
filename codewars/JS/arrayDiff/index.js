function arrayDiff(a, b) {
  // your code here
  return a.filter(el => !b.includes(el))
}