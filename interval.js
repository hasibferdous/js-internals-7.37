console.log('1st');
console.log('2nd');
let seconds =  0;
const intervalId = setInterval(()=>{
    //seconds++
    console.log(++seconds);
    if(seconds === 10){
        clearInterval(intervalId);
    }
}, 1000);
console.log('4th');
console.log('5th');