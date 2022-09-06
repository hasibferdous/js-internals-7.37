console.log(11111);
console.log(22222);

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=> {
        console.log('response received');
        return response.json();
    })
    .then(json => console.log(json))

console.log(33333);
console.log(44444);
console.log(55555);