// let sqr = (n) => {
//     return n * n;
// }

// console.log(sqr(4));

// let id = setInterval(() => (console.log('hello world')), 2000);

// setTimeout(() => {
//     clearInterval(id);
// }, 10000);

// 1-> return avg of array using arrow function
// let arr = [1, 2, 3, 4, 5, 6, 7];

// let avg = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }

//     return (sum / arr.length);
// }

// console.log('Avg is : ', avg(arr));


//even or odd
// let isEven = (n) => {
//     return n % 2 == 0;
// }

// console.log(isEven(3));

// o/p
// const out = {
//     message: 'hello world',
//     logMess() {
//         return this.message;
//     }
// };
// setTimeout(() => {
//     console.log(out.logMess());
// }, 1000);

// let len = 5;
// function callback() {
//     console.log(this.len);
// }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     },
// };
// object.method(callback, 1, 2);

// for each loop
// let arr = [1, 2, -1, 3, 4, 5];
// let print = function (el) {
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function (el) {
//     console.log(el);
// });


//check all ele in array is multiple of 10
// let a = [-120, -32, 3320, 2340];

// let ans = a.every((el) => (el % 10 == 0));
// console.log(ans);

// let ans1 = a.reduce((r, el) =>{
//     if (r < el) {
//         return r;
//     }
//     return el;
// });
// console.log(a);
// console.log(...a);

// let s = 'harsh';
// console.log(s);
// console.log(...s);


let a = [{
    name: 'harsh',
    pass: 'wo m nhi btaunga'
},
{
    name: 'hello',
    pass: 'acha bta dunga'
}
];

let copy = {...a, id: 3};
console.log(copy);