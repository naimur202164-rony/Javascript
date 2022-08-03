const arr = [7, 4, 8, 6, 9, 2, 1, 10, 3];

const result = arr.find(function (value, index) {
  return value === 9;
});

console.log(result);
