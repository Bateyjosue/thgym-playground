 # Exercise 1

 Create a function called `myFetch` that should work as a simple version of the native [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API. The function `myFetch` should use the [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) to make a `GET` Request and return a promise that resolves with the request’s response and rejects with an error if any.

```js
function myFetch(){
	//... your code here
	
}

myFetch('<https://my-random-api.com/data>')
.then(data => console.log(data))
.catch(error => console.log('Error:', error));
```

# Exercise 2

1. Create a function called `fetchUserTodos` that uses the `Promise.all()` method to fetch users and todos concurrently from the provided API endpoints and combine them based on the `userId`. The function should return a promise that resolves with the combined data.

- Users endpoints [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
    
- Todos endpoints [`https://jsonplaceholder.typicode.com/todos`](https://jsonplaceholder.typicode.com/todos)
    
    The returned promise should resolve into an array of users, where each user object has a new key `todos`. This key should contain an array of todos that belong to the user, determined by matching the `userId` of the todo with the `id` of the user.
    
    User objects may look like
    
    ```js
    // User object may look like
    {
    	id: 10,
      name: 'Clementina DuBuque',
      ...
    }
    
    // Todo object may look like
    {
    	userId: 5,
      completed: false,
    	...
    }
    
    // The result array will have objects that look like
    
    {
    	id: 10,
      name: 'Clementina DuBuque',
      todos: [
    		{
    			userId: 10,
    		  completed: false,
    			...
    		},
    		{
    			userId: 10,
    		  completed: false,
    			...
    		}
    	]
    	...
    }
    
    ```
    
    Example of function usage
    
    ```js
    
        function fetchUserTodos(){
            // Your code here ...
        }
        
        fetchUserTodos()
        .then(data => console.log(data))
        .catch(error => console.error(error));
    ```
    