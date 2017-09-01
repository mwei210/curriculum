Function.prototype.myBind = function (context) {
  return () => this.apply(context);
};

Function.prototype.mybind = function (context, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
};
