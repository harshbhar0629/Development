// by default return promise
// async function greet() {
//     return "Hello World!";
// }
// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6, 7];
// let c = [5, 6, 7, 8, 9];
// let d = [7, 7, 8, 9, 0];

// async function demo() {
//     try {
//         await display(a, 6000);
//         await display(b, 5000);
//         await display(c, 4000);
//         await display(d, 3000);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// function display(arr, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(arr);
//             resolve(1);
//         }, delay);
//     });
// };

// demo();

async function utility() {
    let hydMausam = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hyd m grmi hai");
        }, 10000);
    });

    let delMausam = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Delhi hot h");
        }, 14000);
    });

    let h = await hydMausam;
    let d = await delMausam;
    console.log(h);
    console.log(d);

    // return [HM, DM];
}

// console.log(utility());