let ul = document.querySelector('ul');
let btn = document.querySelector('button');
let inp = document.querySelector('input');

btn.addEventListener('click', () => {
    let str = inp.value;

    let newEl = document.createElement('li');
    newEl.innerText = str + ' ';

    let dBtn = document.createElement('button');
    dBtn.innerText = 'Delete';
    dBtn.classList.add("del");
    newEl.appendChild(dBtn);

    ul.appendChild(newEl);
    inp.value = '';
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let parent = event.target.parentElement;
        parent.remove();
    }
})
// not working for new Element due to it's not applicable for new element

// let dBtns = document.querySelectorAll('.del');
// for (btn of dBtns) {
//     btn.addEventListener('click', function() {
//         let par = this.parentElement;
//         ul.removeChild(par);
//     });   
// }