const rich = {status: 'Looking for work'};
const handler = {
    set(target, propName, value){
        if(propName === 'payRate'){
            value = value * 0.85;
        }
        target[propName] = value
    },
    get(target, propName){
        // console.log(target);
        // console.log(target[propName]);
        return target[propName]
    }
}

const agent = new Proxy(rich, handler)
agent.payRate = 1000
console.log(agent.payRate)