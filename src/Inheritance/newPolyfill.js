function sampleClass() {
  this.cname = "sample";
}
sampleClass.prototype.getCname = function() {
  return this.cname;
};

const newPolyfill = function(fname) {
  if (typeof fname !== "function")
    throw Error("can't call new on non-functional input");
  //function newFun() {}

  let newFun = {};
  newFun.__proto__ = Object.assign(fname.prototype);
  fname.prototype.constructor();

  for (let key in fname.prototype) {
    if (typeof fname.prototype[key] !== "function") {
      newFun[key] = fname.prototype[key];
      delete newFun.__proto__[key];
      delete fname.__proto__[key];
    }
  }

  return newFun;
};
let newObj = new sampleClass();
console.log("new obj", newObj);
console.log("new cname", newObj.getCname());
let newPolyObj = newPolyfill(sampleClass);
console.log("new poly obj", newPolyObj);
console.log("newPly cname", newPolyObj.getCname());
