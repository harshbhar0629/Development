const player = document.querySelector("[game-info]");
let boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector(".btn");
let isWinnerDeclare = false;

const winnigPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let gameGrid;
let currPlayerTurn ;
let cnt = 0;
intialize();

function intialize() {
    player.innerHTML = "Current Player - X";    
    cnt = 0;
    currPlayerTurn = 'X';
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    for (let box of boxes) {
        box.innerHTML = "";
        box.classList.remove("removeCursor");
        box.classList.remove("win");
    }
    newGameBtn.classList.remove("active");
    isWinnerDeclare = false;
}

function handleClick(idx) {
    if (gameGrid[idx] == "") {
        cnt++;
        gameGrid[idx] = currPlayerTurn;
        boxes[idx].innerHTML = currPlayerTurn;
        boxes[idx].classList.add("removeCursor");
        if (currPlayerTurn == 'X') {
            player.innerHTML = "Current Player - Y";
            currPlayerTurn = 'O';
        }
        else {
            player.innerHTML = "Current Player - X";
            currPlayerTurn = 'X';
        }

        if (cnt >= 5) {
            checkWin();
        }
        if (cnt == 9) {
            player.innerHTML = "Match Tied !";
            newGameBtn.classList.add("active");
        }
    }

}

let seqX = [];
let seqY = [];
function declareWin(name, seq) {
    player.innerHTML = `Winner Player ${name}`;
    for (let i = 0; i < 3; i++){
        boxes[seq[i]].classList.add("win");
    }
    newGameBtn.classList.add("active");
    isWinnerDeclare = true;
    // intialize();
}

newGameBtn.addEventListener("click", () => {
    intialize();
});

function checkWin() {
    for (let i = 0; i < 8; i++){
        let x = 0, y = 0;
        for (let j = 0; j < 3; j++){
            let idx = winnigPos[i][j];
            if (gameGrid[idx] == "X") {
                seqX.push(idx);
                x++;
            }
            else if (gameGrid[idx] == "O") {
                seqY.push(idx);
                y++;
            }
        }
        let flag = false;
        if (x === 3) {
            flag = true;
            declareWin("X", seqX);
        }
        if (flag === false && y === 3) {
            declareWin("Y", seqY);
        }
        seqX = [];
        seqY = [];
    }
}

boxes.forEach((box, idx) => {
    box.addEventListener("click", () => {
        // console.log( idx);
        if (isWinnerDeclare === false) {
            handleClick(idx);
        }
    });
});


