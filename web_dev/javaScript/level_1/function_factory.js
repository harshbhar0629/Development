let sum = function (a, b) {
    return a + b;
}

let s = sum(2, 3);
console.log(s);

let diff = function (a, b) {
    return Math.abs(a - b);
}

let d = diff(2, 3);
console.log(d);

let mult = function (a, b) {
    return a * b;
}

let m = mult(2, 4);
console.log(m);

let divide = function (a, b) {
    return a / b;
}

let div = divide(5, 2);
console.log(div);


// higher order function 
function multi(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
};

let greet = function () {
    console.log("hello");
}

multi(greet, 10);


//factory function

function func(request) {
    if (request == 'odd') {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
    if (request == 'even') {
        let even = function (n) {
            console.log((n % 2 == 0));
        }
        return even;
    }
}

let odd = func('odd');
odd(5);

let even = func('even');
even(3);