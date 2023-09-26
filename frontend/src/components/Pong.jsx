const GameOne = () => {
//creating the base background for the game
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.canvas.width  = 1000;
ctx.canvas.height = 680;
document.getElementById('game').style.display = "block"
document.getElementById('game').style.backgroundColor = "black"

// creating our players
var playerOne = {
    x: 0.5,
    y: canvas.height/2.5,
    width: 25,
    height: 130,
    color: 'white',
    score: 0,
};

var playerTwo = {
    x: canvas.width - 25,
    y: canvas.height/2.5,
    width: 25,
    height: 130,
    color: 'white',
    score: 0,
};
//allowing our paddles to move with arrow keys
document.addEventListener('keydown', keyUpHandler, false);
document.addEventListener('keyup', keyDownHandler, false);

var upPressed = false;
var downPressed = false;
var wPressed = false;
var sPressed = false;

var ball = {
    x: canvas.width/2 + 4,
    y: canvas.height/2 - 5,
    radius: 15,
    color: 'white',
}

//pong ball velocity
var dx = 3;
var dy = 3;


var interval = setInterval(draw, 10);


// creating the player
function drawPlayer(x, y, w, h, color){
ctx.fillStyle = color;
ctx.fillRect(x, y, w, h);
};



function keyUpHandler(e) {
    if(e.key == 'Down' || e.key == 'ArrowDown') {
        upPressed = true;
    }
    else if(e.key == 'Up' || e.key == 'ArrowUp') {
        downPressed = true;
    } 
    if(e.key == 83 || e.key == 's') {
        wPressed = true;
    }
    else if(e.key == 87 || e.key == 'w') {
        sPressed = true;
    } 

}

function keyDownHandler(e) {
    if(e.key == 'Down' || e.key == 'ArrowDown') {
        upPressed = false;
    }
    else if(e.key == 'Up' || e.key == 'ArrowUp') {
        downPressed = false;
    }
    if(e.key == 83 || e.key == 's') {
        wPressed = false;
    }
    else if(e.key == 87 || e.key == 'w') {
        sPressed = false;
    } 
}

//creating the pong ball
function drawBall() {
    ctx.beginPath(),
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, true),
    ctx.closePath();
    ctx.fillStyle = ball.color,
    ctx.fill()
}



//creating the pong net
function drawRect(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
    };
const net = {
    x: 500,
    y: 0,
    width: 10,
    height: 35,
    color: 'white'
}

//drawing the score board
function drawPlayerOneScore(){
    ctx.fillStyle = playerOne.color;
    ctx.font = '90px Source Sans Pro';
    ctx.fillText(`${playerOne.score}`, 300, 120);
}
function drawPlayerTwoScore(){
    ctx.fillStyle = playerTwo.color;
    ctx.font = '90px Source Sans Pro';
    ctx.fillText(`${playerTwo.score}`, 650, 120);
}

//function to reset the ball after a point is claimed 
function resetBall(){
    ball.x = canvas.width/2 + 4,
    ball.y = canvas.height/2 - 5
}

//collision detection
function collision() {
    //both players paddle collision
    if (
        ball.x > playerOne.x &&
        ball.x < playerOne.x + playerOne.width &&
        ball.y > playerOne.y &&
        ball.y < playerOne.y + playerOne.height
    ) {
        dx = -dx;
    } 
    if (
        ball.x > playerTwo.x &&
        ball.x < playerTwo.x + playerTwo.width &&
        ball.y > playerTwo.y &&
        ball.y < playerTwo.y + playerTwo.height
    ) {
        dx = -dx;
    } 

    //ball collision
    if(ball.x - ball.radius < 0-ball.radius || ball.x + dx < ball.radius){
        dx = -dx;
        playerTwo.score = playerTwo.score + 1;
        resetBall();
    }

    if(ball.x + dx > 1000-ball.radius || ball.x + dx < ball.radius) {
        dx = -dx;
        playerOne.score = playerOne.score + 1;
        resetBall();
    }
    
    if(ball.y + dy > canvas.height-ball.radius || ball.y + dy < ball.radius) {
        dy = -dy;

    //win condition for both players
    }
        ball.x += dx;
        ball.y += dy;
      
    if (playerOne.score === 3) {
        alert('Winner is player One')
        document.location.reload();
        clearInterval(interval);
    } else if (playerTwo.score === 3) {
        alert('Winner is player Two')
        document.location.reload();
        clearInterval(interval);
    }
    }

//rendering everything into the browser
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer(playerOne.x, playerOne.y, playerOne.width, playerOne.height, playerOne.color);
    drawPlayer(playerTwo.x, playerTwo.y, playerTwo.width, playerTwo.height, playerTwo.color);
    drawBall();
    drawPlayerOneScore();
    drawPlayerTwoScore();
    collision();
    
    if(wPressed) {
        playerOne.y += 3;
        if (playerOne.y + playerOne.height > canvas.height){
            playerOne.y = canvas.height - playerOne.height;
        }
    }
    else if(sPressed) {
        playerOne.y -= 3;
        if (playerOne.y < 0){
            playerOne.y = 0;
        }
    }

    if(upPressed) {
        playerTwo.y += 3;
        if (playerTwo.y + playerTwo.height > canvas.height){
            playerTwo.y = canvas.height - playerTwo.height;
        }
    }
    else if(downPressed) {
        playerTwo.y -= 3;
        if (playerTwo.y < 0){
            playerTwo.y = 0;
        }
    }

    //applying the net 
    for (let i = 0; i <= canvas.height; i+=50){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }

}; 


// export default draw;
  return (
    <div style={{ color: 'white' }}>
        <h1>Game Controls</h1>
        <p>Player 1: W (up) S (down)</p>
        <p>Player 2: Arrow Up (up) Arrow Down (down)</p>
        <p>Whoever reaches 3 points wins the game!</p>
    </div>
  );
};

export default GameOne;