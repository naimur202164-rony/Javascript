var arr = [5, 9, 1, 2, 3, 4, 5, 6];

// Javascript Reduce Functinos

// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum)

const sum = arr.reduce((a, b) => {
  return a + b;
});

// console.log(sum)