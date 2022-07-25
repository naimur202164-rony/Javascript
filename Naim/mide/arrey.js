// 43 number video\

const cars = ["rony", "Nahid", "Ridoy"];
// cars[1]="Fuker"
// console.log(cars[1]);
// console.log(cars.length)
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log((arr[3] = 9));
console
  .log
  // arr.slice(2, 0, 1, 29, 42, 1, 3421)
  ();
arr.push(8);
arr.unshift(5);
// console.log(arr);

// Arrey Insert and remove

for (let i = 0; i < arr.length; i++) {
  //   console.log((arr[i] = arr[i] + 2));
}

// Arrey Search Methods

const ar = [1, 2, 3, 4, 5, 56, 7, 8, 91, 2];

var find = 8;
var isFound = true;
for (let i = 0; i < ar.length; i++) {
  if (ar[i] === find) {
    console.log(`The data is found ` + i);
  } else {
    isFound = false;
    console.log("Not found");
    break;
  }
}
