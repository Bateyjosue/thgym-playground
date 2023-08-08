function isPangram(string){
    const matched = string.match(/\w/gi).join('').toLowerCase()
    return new Set([...matched]).size == 26
  }