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
        xhr.send()
    })
}

function fetchUserTodos(){
    let userPromise = myFetch(`https://jsonplaceholder.typicode.com/users`)
    let todoPromise = myFetch(`https://jsonplaceholder.typicode.com/todos`)

    return Promise.all([userPromise, todoPromise])
    .then((todo) =>todo)
    .then(data => data.map(el => JSON.parse(el)))
    .then((todo) =>{
        let todos = (arr, userID) => {
            return arr.filter(el => el['userId'] === userID)
        }
        todo[0].forEach((el, i) => {
            todo[0][i]['todos'] = todos(todo[1], el.id)
        })
        todo[0][0]['todos'] = todos(todo[1], 1)
        return todo[0]
    })
}

fetchUserTodos()
.then(data => console.log(data))
.catch(error => console.error(error));