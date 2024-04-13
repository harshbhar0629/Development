// console.log("Hello");
// setTimeout(() => {
//     console.log("first");
// }, 1000);
// console.log("hey");
// console.log("function call");

// async function sleep(t) {
//     setTimeout(() => {}, t);
// }

// async function f() {
//     console.log("Hello");
//     await sleep(2000);
//     console.log("hey");

// }
// f();

function sleep(t) {
    setTimeout(() => {}, t);
}


console.log("Hello");
sleep(2000).then(() => {
    console.log("hey");    
});
