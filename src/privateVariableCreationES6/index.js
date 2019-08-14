const Symbol = require("symbol");

const ES6privateVarTest = (function() {
  var _options = Symbol("name");
  class ES6privateVarTest {
    constructor() {
      this._options = Object.assign({}, { inc: 2, dec: 4 });
      this[_options] = Object.assign({}, { inc: 7, dec: 2 });
    }
    manipulateValUsingPrivate(val, type) {
      switch (type) {
        case "inc":
          return val + this[_options].inc;
        case "dec":
          return val - this[_options].dec;
        default:
          return false;
      }
    }

    manipulateValUsingConstVar(val, type) {
      switch (type) {
        case "inc":
          return val + this._options.inc;
        case "dec":
          return val - this._options.dec;
        default:
          return false;
      }
    }
  }
  return ES6privateVarTest;
})();

let ES6var = new ES6privateVarTest();
console.log("ES6 var", ES6var);
console.log("private:", ES6var.manipulateValUsingConstVar(78, "inc"));
console.log("constructor var:", ES6var.manipulateValUsingConstVar(78, "dec"));
