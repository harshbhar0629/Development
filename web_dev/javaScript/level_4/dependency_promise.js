
let wada1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise1 executed:');
    }, 2000);
    resolve(1);
});

wada1.then(function () {
    let wada2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise2 executed:');
        }, 3000);
        resolve("wada2 resolve:");
    });
    return wada2;
}).then((val) => {
    console.log(val);
});