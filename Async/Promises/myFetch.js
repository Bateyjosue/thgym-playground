let XMLHttpRequest = require('xhr2');

function myFetch(url){
	//... your code here
	return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            if(xhr.status == 200){
                resolve(xhr.response)
            } else {
                reject(Error(xhr.statusText))
            }
        }
        xhr.onerror = () => {
            reject(Error('Network error'))
        }
        return xhr.send()
    })
}

myFetch('[`https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log('Error:', error));