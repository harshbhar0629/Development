let sum = (a, b) => {
    console.log(a + b);
}
sum(3.5, 44);

const cube = (n) => {
    return n * n * n;
}
console.log(cube(3));


const sqr = (n) => {
    return n * n;
}
console.log(sqr(4));


const a = n => {
    return n * n * 2;
}
console.log(a(2));


// implicit return
const r = (a, b) => (
    a + b
);

console.log(r(2, 3));

const mul = (a, b) => (
    a * b
)
console.log(mul(2, 19));
