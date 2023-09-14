 Create a function called `myFetch` that should work as a simple version of the native [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API. The function `myFetch` should use the [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) to make a `GET` Request and return a promise that resolves with the request’s response and rejects with an error if any.

```js
function myFetch(){
	//... your code here
	
}

myFetch('<https://my-random-api.com/data>')
.then(data => console.log(data))
.catch(error => console.log('Error:', error));
```
