function Bat(x, y, context){
  this.x = x;
  this.y = y;
  this.length = 100;
  this.width = 15;
  this.context = context;
};

Bat.prototype.draw = function(){
  this.context.fillStyle = 'orange';
  this.context.fillRect(this.x, this.y, this.width, this.length);
};

Bat.prototype.moveUp = function(){
  this.y -= Bat.SPEED;
};

Bat.prototype.moveDown = function(){
  this.y += Bat.SPEED;
};

Bat.SPEED = 10;
