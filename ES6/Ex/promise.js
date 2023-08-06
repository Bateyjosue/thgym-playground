const myPromise = new Promise((resolve, reject) => {
    let sampleData = [2,4,6,8];
    let randomNumber = Math.ceil(Math.random() * 5)
    if(sampleData[randomNumber]){
        resolve(sampleData[randomNumber]);
    }else {
        reject('An error occured!')
    }
});

myPromise
.then(e => {
    console.log(e)
})
.catch(err => {
    throw new Error(err)
})
.finally(()=>{
    console.log('Promise Completed')
})