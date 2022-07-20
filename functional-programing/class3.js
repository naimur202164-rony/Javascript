// function outer() {
//   function inner() {
//     var a = 10;
//     console.log("I am Inner Function");
//   }
//   inner();
//   console.log("I am outer Function");
// }

// // inner()
// outer();

function add(a, b) {
  function sum() {
    return a + b;
  }

  function sub() {
    return a - b;
  }
  function times() {
    return a * b;
  }
  function div() {
    return a / b;
  }

  return sum() + sub() + times() + div();
}


console.log(add(10,7))