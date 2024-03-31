// function print() {
//     console.log('I clicked on web Page:');
// }

// document.addEventListener('click', print);

// if we click on (#uni1) then add event listener will remove..
// let cont = document.querySelector('#uni1');
// cont.addEventListener('click', () => {
//     document.removeEventListener('click', print);
// });

// let link = document.querySelector('a');
// link.addEventListener('click', function (eve) {
//     eve.preventDefault();
//     console.log('mja aya:');
// });

// let myDiv = document.createElement('div');

// for (let i = 0; i < 100; i++) {
//     let nc = document.createElement('p');
//     nc.textContent = 'This is a para: ' + (i + 1);
//     nc.addEventListener('click', (eve) => {
//         console.log('I have clicked on para:');
//     });
//     myDiv.appendChild(nc);
// }

// document.body.appendChild(myDiv);

let myDiv = document.createElement('div');
function para(eve) {
    console.log('I have clicked on para: ', eve.target.textContent);
};

myDiv.addEventListener('click', para);

for (let i = 0; i < 100; i++) {
    let nc = document.createElement('p');
    // nc.textContent = 'This is a para: ' + (i + 1);
    nc.textContent = i + 1;
    myDiv.appendChild(nc);
}

document.body.appendChild(myDiv);