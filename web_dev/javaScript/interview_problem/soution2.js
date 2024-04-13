// function setCancellableTimeOut(cb, delay) {
//     const timerId = setTimeout(cb, delay);
//     // we don't have to return timer id we have to return function when returning function called then set timeout function will stop.
//     return () => {
//         clearTimeout(timerId);
//     }
// }

function cb() {
    console.log("hii");
}

// let f = setCancellableTimeOut(cb, 3000);

// setTimeout(() => {
//     console.log("Called");
//     f();
//     console.log("clear set timeout");
// }, 1000);

// concept of function first class citizens


// what if: if we don't have access of timer id then how can i stop..?
// why this happened bcoz of closure in JS

function setCancellableTimeOut2(cb, delay) {
    let flag = true;
    setTimeout(() => {
        if (!flag) return;
        cb();
    }, delay);
    return () => {
        flag = false;
    }
}

let f1 = setCancellableTimeOut2(cb, 3000);

setTimeout(() => {
    console.log("Called2");
    f1();
    console.log("clear set timeout2");
}, 1000);
