// do it!
function getNumeral(roman: string): number {
    // complete the solution by transforming the 
    // string roman numeral into an integer  
    let mapRoman = new Map<string, number>([
      ['I',1],
      ['V',5],
      ['X',10],
      ['L',50],
      ['C',100],
      ['D',500],
      ['M',1000],
    ])
    let matchRoman: any[] =[]
    matchRoman= [...roman].map((el: string) => mapRoman.get(el))
    let res: number = matchRoman.reduce((a: number, b: number) => {
      if(a >= b) return a + b
      else return b - a
    }, 0)
    return res
    
  }
  
  const solution = (str:string) :number[] => {
    let last = str[str.length -1]
    return (0 +',' + Array.from({length: getNumeral(last)}, (_, i) => i + 1)).split(',').map(el => Number(el))
  }
  
  console.log(solution('0..X'))