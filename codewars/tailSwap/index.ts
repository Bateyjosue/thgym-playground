export function tailSwap(arr: [string,string]): [string,string] {
    let [a, b] = arr;
    let map = new Map<string, string>();
    
    map.set(a.split(':')[0], b.split(':')[1]);
    map.set(b.split(':')[0], a.split(':')[1]);
  
    let lastArr: [string, string] = Array.from(map.entries()).map(([key, value]) => key + ':' + value) as [string, string];
    
    return lastArr;
  }