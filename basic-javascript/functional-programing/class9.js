// const arr = [67, 34, 21, 45, 6, 29, 38, 55, 76, 10];

// console.log(
//   arr.sort(function (a, b) {
//     return a - b;
//   })
// );

var pepole = [
  { name: "MR Naimur Rahman", age: 21 },
  { name: "Galib", age: 20 },
  { name: "Robel Ahmed", age: 18 },
  { name: "Al Rabbi", age: 22 },
  { name: "x", age: 23 },
  { name: "y", age: 9 },
];

// const person = pepole.sort((a, b) => {
//   return a.age - b.age;
// });

const name = pepole.sort((a, b) => {
  if (a.name > b.name) {
    return a;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
});
// console.log(name);
