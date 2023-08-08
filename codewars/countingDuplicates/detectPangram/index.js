function isPangram(string){
    const matched = string.match(/[a-z]/gi).join('').toLowerCase()
    return new Set([...matched]).size == 26
  }
