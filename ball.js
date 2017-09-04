function Ball(x, y, vx, vy, context){
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.context = context;
};

Ball.prototype.draw = function(){
  this.context.fillStyle = 'white';
  this.context.fillRect(this.x - Ball.SIZE / 2, this.y - Ball.SIZE / 2, Ball.SIZE, Ball.SIZE);
};

Ball.prototype.update = function(){
  this.x += this.vx;
  this.y += this.vy;

  if (this.x >= 800 - Ball.SIZE / 2){
    this.vx = -this.vx;
  };
  if (this.y <= Ball.SIZE / 2 || this.y >= 600 - Ball.SIZE / 2){
    this.vy = -this.vy;
  };
};

Ball.prototype.bounceOffBat = function() {
  this.vx = -this.vx;
}

Ball.SIZE = 8;
