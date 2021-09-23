function Fn() {
  this.prop = 'Property';
  return 'hello world';
}

Fn.prototype.lalala = function lalaFunction() {
  return 'lalala';
};
//console.log(Fn());

const f = new Fn();
console.log(f.__proto__);

// fat arrow function

const fatFn = () => {
  return 'fatArrow';
};

//Is not a constructor
//const fatF = new fatFn();

//console.log(fatFn());
