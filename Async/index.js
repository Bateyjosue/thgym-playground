// const wait = (ms) => new Promise((resolve)=> setTimeout(resolve, ms));
// function get(url){
//     return fetch(url)
// }

// function getJSON(url){  
//     return get(url)
//         .then(res => res.json())
//         .catch(err => err.message);
// }

// getJSON('https://www.themealdb.com/api/json/v1/1/search.php?s').then(res => console.log(res))

// console.log("First");

// setTimeout(() => {
//     console.log("Second");
// }, 0)

// new Promise(res => {
//     res('Third')
//     console.log("Intruder");
// })
// .then(console.log)

// console.log("Fourth");

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

//Output
    //success
    //error
    //Error caught


//     const fetchPosts = async () => {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         return data;
//       };
      
//       const fetchUsers = async () => {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         return data;
//       };

// (async function fetchUserTodos(){
//     return await Promise.all([fetchUsers(), fetchPosts()])
//     .then(data => console.log(data));
// })()
setTimeout(() => {
    console.log("this is the first message");
}, 5000);
setTimeout(() => {
    console.log("this is the second message");
}, 3000);
setImmediate(() => {
    console.log("this will run Immediatly");
  })
  console.log('Im Synchronous')
  setTimeout(() => {
    console.log("this is the third message");
  }, 1000);