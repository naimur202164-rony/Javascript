function add(a, b, c) {
  return a + b + c;
}

// add(41,52,63)
// console.log()

function cruying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}



var result=cruying(5)(5)(5);

console.log(result)

