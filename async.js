console.log('1st');
console.log('2nd');
//setTimeout(()=>{
    //console.log('3rd');
//}, 5000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=> {
        console.log('response received');
        return response.json();
    })
    .then(json => console.log(json))
    
console.log('4th');
console.log('5th');