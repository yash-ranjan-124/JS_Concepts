const arr = [6, 7, 2, 4, 10];

const Every = function(callback) {
  let arr = this;
  for (let k = 0; k < arr.length; k++) {
    if (!callback(arr[k], k)) {
      return false;
    }
  }
  return true;
};

arr.__proto__.Every = Every;

let response1 = arr.Every(function(current, index) {
  return current > 1;
});

let response2 = arr.every(function(current, index) {
  return current > 1;
});

console.log(response1);//true
console.log(response2);//true
