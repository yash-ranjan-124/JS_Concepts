const staticClass = function(val) {
  this.curVal = val;
};
staticClass.STATIC_VAL = null;

staticClass.SetStaticVal = function(val) {
  staticClass.STATIC_VAL = val;
};

staticClass.getStaticVal = function() {
  return staticClass.STATIC_VAL;
};

console.log(staticClass.SetStaticVal(45));
console.log(staticClass.STATIC_VAL)//45
console.log(staticClass.getStaticVal())//45


let newStaticClassObj = new staticClass(56);

console.log(newStaticClassObj.STATIC_VAL); //undefined
