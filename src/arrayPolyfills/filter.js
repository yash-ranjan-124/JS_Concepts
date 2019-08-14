let arr = [7, 9, 6];

Array.prototype.Filter = function(callback) {
  let new_arr = [];
  for (let key in this) {
    let check_key = parseInt(key);
    if (isNaN(check_key) || typeof check_key != "number") continue;
    if (callback(this[key], key)) new_arr.push(this[key]);
  }
  return new_arr;
};

let filterArrPolyfill = arr.Filter((row, i) => {
  return row < 8;
});

let filterArr = arr.filter((r, i) => {
  return r < 8;
});

console.log("filtered array polyfill version:", filterArrPolyfill);
console.log("filtered array", filterArr);
