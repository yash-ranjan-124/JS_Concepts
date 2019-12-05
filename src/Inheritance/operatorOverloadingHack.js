function variable(val) {
  this.val = val;
}

variable.prototype.valueOf = function() {
  return this.val + "xyz";
};

let a = new variable(2);
let b = new variable(3);

console.log(a + b); // 2xyz3xyz
