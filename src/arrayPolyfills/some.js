// array some polyfill

let Arry = (function() {
  function Arry() {
    this._arr = Object.keys(arguments).map((r, i) => {
      return arguments[r];
    });
  }
  return Arry;
})();

Arry.prototype.Some = function(callback) {
  let a = this._arr;

  let flag = false;
  for (let key = 0; key < a.length; key++) {
    if (callback(a[key], key)) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
};

let sampleArr = new Arry(2, 4, 6, 8, 10);
let newArr = sampleArr.Some((row, index) => {
  return row % 2 === 0;
});

console.log(newArr);

