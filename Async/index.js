const wait = (ms) => new Promise((resolve)=> setTimeout(resolve, ms));
function get(url){
    return fetch(url)
}

function getJSON(url){  
    return get(url)
        .then(res => res.json())
        .catch(err => err.message);
}

getJSON('https://www.themealdb.com/api/json/v1/1/search.php?s').then(res => console.log(res))