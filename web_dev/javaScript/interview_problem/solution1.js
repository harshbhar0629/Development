// function sleep(ms) {
//     return new Promise((res, rej) => {
//         setTimeout(res, ms);
//     });
// }

// async function process() {
//     console.log('Hello!');
//     await sleep(2000);
//     console.log('Bye.');
// }

// console.log("Starting");
// process();
// console.log("Ending");

// but problems demands you have to blocking piece of code
// but in above case we r not actually block the code we r blocking only function code

// o/p -> starting
//        Hello!
//        Ending
//        Bye.


// now implement a blocking code

function blockingSleep(ms) {
    const timeNow = new Date().getTime();
    while (new Date().getTime() < timeNow + ms) {
        // wait 
    }
}

async function process1() {
    console.log("Hello!");
    blockingSleep(3000);
    console.log("Bye");
}

console.log("Starting");
process1();
console.log("Ending");