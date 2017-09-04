var canvas;
var canvasContext;
var batLeft;
var ballAY;
var ballInitialVX = 3;
var ballInitialVY = -3;
var UPDATES_PER_SECOND = 60;
var GAME_LOOP_DELAY = 1000 / UPDATES_PER_SECOND;

function initialize(){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  Bat.SPEED = Math.abs(ballInitialVY)*10;
  batLeft = new Bat(0, 60, canvasContext);
  ballAY = new Ball(canvas.width / 2, canvas.height / 2, ballInitialVX, ballInitialVY, canvasContext);
};

function gameLoop() {
  render();
  update();
  // detect events
  // callback the loop
  setTimeout(gameLoop, GAME_LOOP_DELAY);
};

function render(){
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  batLeft.draw();
  ballAY.draw();
};

function update(){
  if (haveCollided(batLeft, ballAY)) {
    ballAY.bounceOffBat();
  }
  ballAY.update();
};

window.onload = function(){
  initialize();
  // batLeft.moveUp();
  // batLeft.moveDown();
  gameLoop();
}

function haveCollided(bat, ball){
  return (ball.x <= bat.x + bat.width) && (bat.y <= ball.y) && (ball.y <= bat.y + bat.length);
}
