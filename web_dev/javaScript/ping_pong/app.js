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
        ballY += dy;
        ball.style.top = `${ballY}px`;

        // detect the collision between the paddle and ball
        /**
         * ballX < paddle.offsetLeft + paddle.offsetWidth -> this compare left(w.r.t table of ball) < right(W.r.t tbale of paddle)
         * 
         * (ballY - ball.offsetHeight > paddle.offsetTop) -> if(top of ball w.r.t table is > top of paddle w.r.t table)
         * 
         * (ballY - ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight) -> if(ball is less than equal to bottom of paddle w.r.t table when it collides properly)
         * 
        */
        if (ballX < paddle.offsetLeft + paddle.offsetWidth &&
            ballY > paddle.offsetTop && ballY - ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
        ) {
            dx *= -1;
        }


        // offsetWidth is nothing but it gives the width of current table
        if (ballX > table.offsetWidth - ball.offsetWidth - 2 || ballX <= 0) {
            dx *= -1; // change direction of ball in x-direction
        }
        
        // offsetHeight is nothing but it gives the height of current table
        if (ballY > table.offsetHeight - ball.offsetHeight - 2 || ballY <= 0) {
            dy *= -1; // change direction of ball in y-direction
        }        
        
        // if(ballX < 5) console.log("left");
    }, 10);


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

