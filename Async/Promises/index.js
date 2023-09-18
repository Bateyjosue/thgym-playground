let timerID  =0;
function repeatEvery(func, time){
    timerID = setInterval(func, time)
}

console.log(repeatEvery(()=> {
    if(timerID > 5000){
        clearInterval(timerID)
    }
    console.log('Josh')
},1000))
