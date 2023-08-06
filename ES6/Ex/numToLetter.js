let numDic = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
}

const handler = {
    get(target, number){
        return target[number]? target[number]: number
    }
}

const str = '123'

const agent = new Proxy(numDic, handler);
let strNum = ''
for(string of [...str]){
strNum += `${agent[string]} `
}

console.log(strNum)