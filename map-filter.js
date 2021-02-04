//const number =[2,3,4,5,6,7];
// const output = [];
// for(let i=0; i<number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


// function square(element){
//     return element * element;
// }


// const square = element => element * element ;




//  const result = number.map(function(element){
//     return element * element;
// })
// console.log(result);

// const result = number.map(x => x*x);
// console.log(result);


// const biggestnum = number.filter( x => x>5);
// console.log(biggestnum);

// const biggestone = number.find( x => x>5);
// console.log(biggestone);


const students =[ { id:21, name: 'riaz'},{id:23, name:'mikat'},{id:17, name:'nahin'}, {id:27, name:'ajoy'}];

// const names = students.map(s => s.name);
// const ids = students.map(s => s.id);


// const condition = students.filter(s=> s.id>20);


const condition = students.find(s=> s.id>20);

console.log(condition);