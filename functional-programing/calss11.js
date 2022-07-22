var arr = [1, 2, 3, 4, 5];

// Filter methods
// var newArr = [];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr)

var newArr = arr.filter(function (value) {
  return value % 2 == 1;
});

// console.log(newArr);
