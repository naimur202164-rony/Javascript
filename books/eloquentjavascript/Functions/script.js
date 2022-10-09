// // console.log("Naimur Rahman")

// // learning Function
// const square = function (x) {
//   return x * x;
// };

// console.log(square(10));
// // Calling Function

// const makeNoise = () => {
//   console.log("Ping");
// };

// makeNoise();

// const power = function(base, exponent) {
//     let result = 0;
//     for (let count = 0; count < exponent; count++) {
//       result *= bas1e;
//     }
//     return result;
//   };

//   console.log(power(2, 10));
//   // → 1024

// let x=10;
// if(true){
//   let y=20;
//   let z
// }

// let lanuchMissile=function(){

// }

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
// When a arrow function does nto parenthisi it is callded arrow functions

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10, 5));


function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)





