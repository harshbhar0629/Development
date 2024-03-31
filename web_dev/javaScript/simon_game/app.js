let userSeq = [];
let gameSeq = [];
let btns = ["yellow", "red", "green", "purple"];

let isGameStart = false;
let level = 0;

let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

document.addEventListener("keypress", function () {
    if (isGameStart == false) {
        h3.innerHTML = "";
        console.log("Game Started");
        isGameStart = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    // increase level 
    level++;
    // change text of h2
    h2.innerHTML = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let btnColor = btns[randomIdx];
    let btn = document.querySelector(`.${btnColor}`);
    btnFlash(btn);
    // console.log(btn);
    gameSeq.push(btnColor);
    console.log(gameSeq);
}

function check(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);            
        }
    }
    else {
        if (isGameStart) {
            document.querySelector('body').style.backgroundColor = 'red';
            setTimeout(function () {
                document.querySelector('body').style.backgroundColor = 'white';
            }, 150);
            reset();   
        }
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    // console.log(userSeq)
    // console.log(userColor);

    check(userSeq.length-1);
}

let allBtn = document.querySelectorAll('.btn');
for (let btn of allBtn) {
    btn.addEventListener('click', btnPress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    h2.innerHTML = `Game Over! Your Score was ${level}!`;
    level = 0;
    isGameStart = false;
    h3.innerHTML = "Press any to restart the game:)";
}

