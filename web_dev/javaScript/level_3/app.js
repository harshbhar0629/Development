// // btn-onclick
// let btn = document.querySelector('button');
// btn.onclick = function () {
//     console.log('Button was Clicked');
// }

// //btn-mouseenter
// let btn2 = document.querySelector('button');
// btn.onmouseenter = function () {
//     console.log('Mouse hover on button:');
// }

// //add event listener
// let a = document.querySelector('a');
// a.addEventListener('click', (eve) => {
//     // deafult behaviour of anchor tag
//     eve.preventDefault();
//     console.log('hey');
// });

// activity generate multiple color
// let btn = document.querySelector('button');
// let reset = document.querySelector('#btn1');
// reset.addEventListener('click', () => {
//     let text = document.querySelector('h3');
//     text.innerText = 'Generate a random Color';
//     let div = document.querySelector('#divi');
//     div.style.backgroundColor = 'white';
// })

// btn.addEventListener('click', () => {
//     let random = getRandomColor();
//     let text = document.querySelector('h3');
//     text.innerText = random;
//     let div = document.querySelector('#divi');
//     div.style.backgroundColor = random;
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

//button keyboard event
// let inp = document.querySelector('input');
// inp.addEventListener('keydown', (eve) => {
//     console.log('key = ', eve.key);
//     console.log('code = ', eve.code);
// });


// event listener for nested element (app.js)

let ul = document.querySelector('ul');
ul.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('ul was clicked');
});

let divi = document.querySelector('div');
divi.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('div was clicked');
});

let lis = document.querySelectorAll('li');

for (li of lis) {
    li.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log("li was clicked");
    });
}