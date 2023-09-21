async function getFastPosts(){
    const post1 = await fetch(`https://dummyjson.com/posts`)
    const post2 = await fetch(`https://this-may-not-exist.com/posts`)
    const post3 = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return Promise.race([post1, post2, post3]).  
}