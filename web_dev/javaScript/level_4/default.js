// let btn = document.querySelector('a');
// btn.addEventListener('click', (eve) => {
//     eve.preventDefault();
//     console.log('Maja aya');
// });

// let myDiv = document.createElement('div');

// function eventFun(eve) {
//     console.log('event: ' + eve.target.textContent);
// };

// myDiv.addEventListener('click', eventFun);

// for (let i = 1; i <= 100; i++){
//     let ele = document.createElement('p');
//     ele.textContent = "this is a para" + i;
//     myDiv.appendChild(ele);
// }

// document.body.appendChild(myDiv);

let ip = document.querySelector('input');

ip.addEventListener('keydown', (eve)=>{
    console.log('key down1');
    console.log(eve.key)
});

// ip.addEventListener('keypress', ()=>{
//     console.log('key press2');
// });

// ip.addEventListener('keyup', ()=>{
//     console.log('key up3');
// });