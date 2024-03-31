const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
};

console.log(calculator);

let cal = calculator;
console.log(cal.mul(cal.add(1 , 3), cal.add(2, 4)));