// adding hundred para
const t1 = performance.now();
let myDiv = document.createElement('div');
for (let i = 0; i < 100; i++) {
    let newEl = document.createElement('p');
    newEl.textContent = 'This is a para ' + (i + 1);
    myDiv.appendChild(newEl);
}
document.body.appendChild(myDiv);
const t2 = performance.now();
console.log("Time Consume: ", (t2 - t1));

// optimising using fragment bcoz it decrease reflow and repaint
const t3 = performance.now();
let frag = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    let newEl = document.createElement('p');
    newEl.textContent = 'This is a para ' + (i + 1);
    frag.appendChild(newEl);
}
document.body.appendChild(frag);
const t4 = performance.now();
console.log("Time Consume: ", (t4 - t3));