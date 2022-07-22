let arr = [4, 5, 1, 0, 8];

arr.forEach(function (a) {
  console.log(a);
});

function caller() {
  return function (name) {
    return "Caller Calling You" + name;
  };
}

var a = caller()("Twincle cates");

// console.log(a)
