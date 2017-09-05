const sum = function(...sumArgs) {
  let result = 0;
  for(let i = 0; i < sumArgs.length; i++) {
    result += sumArgs[i];
  }
  return result;
}

const myBind = function(context, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  }
}

const curriedSum = function(numArgs) {
  const numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let total = 0;
      numbers.forEach(el => total += el);
      return total;
    }
    else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  const args = [];
  const funct = this;

  function = _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn(...args);
    }
    else {
      return _curriedFn;
    }
  }
  return _curriedFn;
}
