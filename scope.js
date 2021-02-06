// function sum(x,y){
//     let result = x+y;
//     console.log(result);
//     return result;
// }
// const output = sum(4,6);
// console.log(output);

//Closer
function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());