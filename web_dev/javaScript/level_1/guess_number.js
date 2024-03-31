let range = prompt("Enter a range starts from 1 to: " );
let cnt = 1;
let random = Math.floor((Math.random() * range) + 1);
while (true) {
    let num = prompt("Guess Number: ");
    if (num == random) {
        console.log('You Guess the number in: ', cnt, ' Steps');
        break;
    }
    cnt++;
    if (num < random) {
        console.log('Higher number please: ');
    }
    else {
        console.log('Lower Number Please: ');
    }
}