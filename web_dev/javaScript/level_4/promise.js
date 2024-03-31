// console.log("Hello jiii")
// let newPro = new Promise(function (resolve, reject) {
//     // console.log("Successfully Resolve");
//     // pass value in resolve
//     // resolve(111);

//     // pass or throw error to reject
//     reject(new Error('Mere Mrji'));
// });

// newPro.then((val) => {
//     console.log(val);
// });

// newPro.catch((error) => {
//     console.log(error);
// });


function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let speed = Math.floor(Math.random() * 11);
        if (speed > 4) {
            resolve("Succesfull");
        }
        else {
            reject("Mere Mrji m nhi kr rha accept");
        }
    });
}

// simple promise

// let request = saveToDb("harsh bhardwaj");
// request
//     .then((value) => {
//         console.log("Promise resolved", value);
//     })
//     .catch((error) => {
//         console.log("Promise rejected",error);
//     })


// promise chaining 
saveToDb("harsh bhardwaj")
    .then((val) => {
        console.log("Sucessfully complete");
        return saveToDb("new promise");
    })
    .then((value) => {
        console.log("Promise2 resolved");
    })
    .catch((error) => {
        console.log("Promise rejected");
    })