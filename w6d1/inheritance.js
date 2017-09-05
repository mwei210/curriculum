Function.prototype.inheritsFull = function(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

Function.prototype.inheritsCreate = function(Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
}
