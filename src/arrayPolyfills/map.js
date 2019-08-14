const arr = [4, 6, 7];

Array.prototype.Map = function(callback) {
  let new_arr = [];
  for (var key in this) {
    let check_key = parseInt(key);
    if (typeof check_key != "number" || isNaN(check_key)) continue;
    new_arr[key] = callback(this[key], key);
  }
  return new_arr;
};

//map polyfill
console.log(
  arr.Map((row, index) => {
    if (row > 6) return row - 1;
  })
);

//check results with map
console.log(
  arr.map((r, i) => {
    if (r > 6) return r - 1;
  })
);
