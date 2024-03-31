// let arr = ["harsh", 'ki', 'shdi', 'jrur', 'hogi'];
// for (let a in arr) {
//     console.log(a, arr[a]);
// }
// for (let i = 0; i < arr.length; i++){
//     console.log(i, arr[i]);
// }
// for (let a of arr) {
//     console.log(a);
// }


// Ques: Delete all occurence of num in arr
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 1, 3, 2, 2];
// let num = 2;
// let n = arr.length;
// for (let i = 0; i < n; i++) {
//     if (arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);


/********************** Get Unique *****************************/

function unique(str) {
 
    let ans = "";
    for (let i = 0; i < str.length; i++){
        let ch = str[i];
        if (ans.indexOf(ch) == -1) {
            ans += str[i];
        }
    }

    return ans;
}

let str = "harsh";
let res = unique(str);
console.log(res);