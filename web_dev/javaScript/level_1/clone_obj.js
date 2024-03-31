let rect = {
    l: 1,
    b: 2,
    h: 3
};

let r = rect;
console.log(r);

let r1 = {};
for (let x in rect) {
    r1[x] = rect[x];
}

console.log(r1);

let r3 = {...rect}
console.log(r3);

let r4 = rect.assign({}, rect);
console.log(r4);