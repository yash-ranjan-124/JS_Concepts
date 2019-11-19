let list = [5, 6, 1, 6, 8, 9];
let list2 = [5, 6, 1, 6, 8, 9];

const Splice = function(pos, no_of_el, ...args) {
  let inplist = this;
  let deletedElem = [];
  inplist.forEach(function(val, i) {
    if (pos === i) {
      if (no_of_el > 0) {
        deletedElem.push(val);
        delete inplist[i];
        no_of_el--;
      }
    }
  });
  inplist[pos] = args && args.length > 0 ? args : null;

  inplist = inplist.filter(function(v, i) {
    if (v) return v;
  });

  list = inplist.flat();
  return deletedElem;
};

list.__proto__.Splice = Splice;

let result1 = list.Splice(1, 1, 2, 3);
console.log(list);//[5, 2, 3, 1, 6, 8, 9]

let result2 = list2.splice(1, 1, 2, 3);
console.log(list2);//[5, 2, 3, 1, 6, 8, 9]

console.log(result1);//[6]
console.log(result2);//[6]
