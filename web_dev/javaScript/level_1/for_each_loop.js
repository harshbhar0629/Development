// for each loop or for in loop
let rect = {
    len: 2,
    bread: 5,
    height: 7,
};

// for (let key in rect) {
//     console.log(key, rect[key]);
// }

// //for-of loop it is used for iterate in arr or map
// for (let key of Object.keys(rect)) {
//     console.log(key, rect[key]);
// }

// //enteries
// for (let key of Object.entries(rect)) {
//     console.log(key);
// }


//finding any parameter in object
if ('color' in rect) {
    console.log('Present');
}
else {
    console.log('Not Present');
}
if ('len' in rect) {
    console.log('Present');
}
else {
    console.log('Not Present');
}