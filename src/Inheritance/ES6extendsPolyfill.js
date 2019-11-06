function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
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

var ProtoTest =
  /*#__PURE__*/
  (function(_MainTest) {
    _inheritsLoose(ProtoTest, _MainTest);
    function ProtoTest() {
      if (_MainTest) _MainTest.call(this);
      this.proto1 = "function";
      this.proto2 = "object";
    }

    ProtoTest.prototype.getProto = function() {
      return { ...this };
    };

    return ProtoTest;
  })(MainTest);

let pObj = new ProtoTest();
console.log(pObj.getMain()); //main
console.log(pObj.getProto()); //{main: "main", proto1: "function", proto2: "object"}
