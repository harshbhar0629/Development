// let person = {
//     fname: 'harsh',
//     lname: 'bhardwaj',
//     set Name(str) {
//         if (typeof (str) !== String) {
//             throw error('Don\'t have a name');
//         }
//         let parts = str.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     },
//     get Name() {
//         return `${this.fname} ${this.lname}`;
//     }
// };

// try {
//     person.Name = 'hello ji';
// }
// catch (e) {
//     alert(e);
// }

let a = [1, 2, 3, 4, 6, 7];

let s = a.reduce((acc, el) => {
    return acc + el;
});
console.log(s);