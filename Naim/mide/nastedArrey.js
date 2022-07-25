// Multi dimentional arrey

const n = [
  [[], [], []],
  [[], [], []],
  [[], [], []],
];

const arr = [
  [78, 71, 80, 90],
  [80, 75, 90, 86],
  [71, 75, 79, 80],
];

// console.log(arr[0][0]);
// console.log(arr[1][1]);
// console.log(arr[2]);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  for (let j = 0; j < arr[i].length; j++) {
    console.log("elemement  " + i + ":   " + arr[i][j]);
  }
}
