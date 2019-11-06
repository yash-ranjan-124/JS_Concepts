
function _multipleInherits(subClass, baseClassArr = []) {
  let new_proto = {};
  baseClassArr.forEach(row => {
    new_proto = { ...new_proto, ...row.prototype };
  });
  subClass.prototype = new_proto;
  subClass.prototype.constructor = subClass;
}
var MainTest = (function() {
  function MainTest() {
    this.main = "main";
  }

  MainTest.prototype.getMain = function() {
    return this.main;
  };

  return MainTest;
})();

var SecTest = (function() {
  function SecTest() {
    this.sec = "10sec";
  }
  SecTest.prototype.getSec = function() {
    return this.sec;
  };

  return SecTest;
})();

var MinTest = (function() {
  function MinTest() {
    this.min = "10 min";
  }
  MinTest.prototype.getMin = function() {
    return this.min;
  };

  return MinTest;
})();

var ProtoTest =
  /*#__PURE__*/
  (function(_MainTest) {
    // _inheritsLoose(ProtoTest, _MainTest);
    let classArr = [_MainTest, SecTest, MinTest];
    _multipleInherits(ProtoTest, classArr);
    function ProtoTest() {
      classArr.forEach(row => {
        row.call(this);
      });
      this.proto1 = "function";
      this.proto2 = "object";
    }

    ProtoTest.getProto = function() {
      return { ...this };
    };

    return ProtoTest;
  })(MainTest);

let pObj = new ProtoTest();
console.log(pObj);
