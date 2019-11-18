function sampleClass() {
  this.cname = "sample";
}
sampleClass.prototype.getCname = function() {
  return this.cname;
};

const _new = function(className , ...args){
  let classObj = Object.create(className.prototype);
  classObj.call(classObj , args);
  return classObj;
}

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
console.log(newObj instanceOf sampleClass);//true
console.log("new cname", newObj.getCname());//sample

let newPolyObj = newPolyfill(sampleClass);
console.log("new poly obj", newPolyObj);
console.log(newPolyObj instanceOf sampleClass);//true
console.log("newPly cname", newPolyObj.getCname());//sample

let _newObj = _new(sampleClass);
console.log("_new obj",_newObj);
console.log(_newObj instanceOf sampleClass);//true
console.log("_new cname",_newObj.getCname());//sample


