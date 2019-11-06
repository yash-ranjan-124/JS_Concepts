let arr = [1,4,6,8];


Array.prototype.Reduce = function(callback, initialValue) {
  let accum = initialValue;
  let input = [...this];
  input.forEach(function(val, index) {
    accum = callback(accum, input[index]);
  });
  return accum;
};

let op = arr.Reduce(function(acc, cur) {
  return Math.max(acc , cur);
}, 0);

console.log(op);//8

let op2 = arr.reduce(function(ac,cur){
  return Math.max(ac,cur);
},0)

console.log(op2);//8
