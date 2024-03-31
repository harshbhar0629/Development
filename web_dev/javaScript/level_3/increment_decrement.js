let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#text");

let value = 0;
btn3.innerHTML = value;

btn3.addEventListener("click", (eve) => {
    eve.preventDefault();
});

btn1.addEventListener("click", (eve) => {
    value--;
    btn3.innerHTML = value;
});

btn2.addEventListener("click", (eve) => {
    value++;
    btn3.innerHTML = value;
});
