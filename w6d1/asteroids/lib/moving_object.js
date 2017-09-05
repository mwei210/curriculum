const MovingObject = function(chars) {
  this.pos = chars.pos;
  this.vel = chars.vel;
  this.color = chars.color;
  this.radius = chars.radius;
  this.game = chars.game;
};

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
}
