import Symbol from "symbol";

let TestPrototypeInheritance = (function() {
  var privateOptions = Symbol("options");
  function TestPrototypeInheritance() {
    this[privateOptions] = { inc: 2, dec: 3 };
    this._objectBasedOptions = { incr: 4, dec: 7 };
  }

  TestPrototypeInheritance.prototype.ObjBasedchangeVal = function(type, value) {
    switch (type) {
      case "inc":
        return value + this._objectBasedOptions.incr;

      case "dec":
        return value - this._objectBasedOptions.dec;
      default:
        break;
    }
  };

  TestPrototypeInheritance.prototype.changeVal = function(type, val) {
    console.log("private variable option:", this[privateOptions].inc);
    switch (type) {
      case "inc":
        return val + this[privateOptions].incr;

      case "dec":
        return val - this[privateOptions].dec;
      default:
        break;
    }
  };
  return TestPrototypeInheritance;
})();

let pi = new TestPrototypeInheritance();

console.log("prototypal inheritance obj", pi);

console.log("test protoype obj", pi.ObjBasedchangeVal("inc", 7));

console.log("test private variable", pi.changeVal("dec", 10));
