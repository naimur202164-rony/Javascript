var perosn = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "B",
    age: 19,
  },
  {
    name: "C",
    age: 26,
  },
  {
    name: "D",
    age: 21,
  },
];

var arr = [4, 8, 1, 6, 7, 9, 4, -7, 0, -2, 3, 5, 6, 8, 2, 1, 7, -4];

arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

// perosn.sort();
// console.log(perosn);
// console.log(arr);


perosn.sort(function(a,b){
    if(a.age>b.age){
        return 1;
    }
})


