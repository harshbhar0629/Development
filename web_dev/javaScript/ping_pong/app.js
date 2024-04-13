document.addEventListener("DOMContentLoaded", () => {
   
    let paddle = document.getElementById("paddle");
    let ball = document.getElementById("ball"); // targetting ball
    let table = document.getElementById("ping-pong-table");

    //handle the movement of ball in this game

    // here ballX and ballY helping us to set the starting position of ball w.r.t ping pong table
    let ballX = 50; // distance of the left of the ball w.r.t ping-pong-table 
    let ballY = 50; // distance of the top of the ball w.r.t ping-pong-table

    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;

    // displacement factor int (x-y) direction
    let dx = 2, dy = 2;
    setInterval(function exe() {
        ballX += dx;
        ball.style.left = `${ballX}px`;

        // offsetWidth is nothing but it gives the width of current table
        if (ballX > table.offsetWidth - ball.offsetWidth - 2 || ballX <= 0) {
            dx *= -1; // change direction of ball in x-direction
        }

        ballY += dy;
        ball.style.top = `${ballY}px`;

        // offsetHeight is nothing but it gives the height of current table
        if (ballY > table.offsetHeight - ball.offsetHeight - 2 || ballY <= 0) {
            dy *= -1; // change direction of ball in y-direction
        }

        // detect the collision between the paddle and ball
        
        // if(ball.offsetLeft <= 5)
        //     console.log(ball.offsetLeft)

        // if(ball)


    }, 5);


    // handle the paddle in this ping-pong-game
    let paddleY = 0;
    let dPy = 10; //displacement for paddle in y-direction    

    document.addEventListener("keydown", (event) => {
        // console.log(event);
        // event.preventDefault(); // it prevents the execution of default event behaviour

        if (event.key == "ArrowUp" && paddleY>0) {
            // up-arrow-key 
            // console.log("up");
            paddleY -= dPy;
        }
        else if (event.key == "ArrowDown" && paddleY<table.offsetHeight - paddle.offsetHeight - 10) {
            // down-arrow-key 
            // console.log("Down");
            paddleY += dPy;
        }

        paddle.style.top = `${paddleY}px`;
    });

});

