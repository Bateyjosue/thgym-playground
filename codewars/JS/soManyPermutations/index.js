function permutations(string) {
	if(string.length <= 2) return string.length === 2 ? [...new Set([string, string[1]+ string[0]])]  : [string]
  return [... new Set(
    string.split('')
  .reduce(
    (acc, curr, index) => 
      acc.concat(permutations(string.slice(0, index) + string.slice(index + 1)).map(el => curr + el)),[]
  )
  )] 
}