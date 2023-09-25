const promise = new Promise((resolve, reject) => {
    return fetch('./index.js').then(text => resolve(text.text()))
})
promise.then(res => console.log(eval(res)), err=>console.log(err))

fetch('./index.html')
.then(res => res.text())
.then(text => console.log(eval(text)))
.catch(err => console.log(`Failed with ${err}`))
