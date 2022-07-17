// console.log("Hello World");
// Print the odd numbers less than 100

for (let i = 0; i <= 100; i += 2) {
  // console.log(i)
}

//
for (var i = 1; i <= 10; i++) {
  var row = "7 * " + i + " = " + 7 * i;
  // console.log(i)
  // println(row);
}

// Calculate the sum of numbers from 1 to 10

for (let i = 0; i <= 10; i++) {
  let x = i + i;
  // console.log(x)
}

// Calculate the sum of odd numbers greater than 10 and less than 30;
for (let i = 10; i <= 30; i++) {
  // console.log(i/2);
}

const letter = ["a", "b", "c"];

for (const x of letter) {
  // console.log(x)
}

//

// 1
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
// array.slice(start, end)

function myFunction(str) {
  return str.slice(-3);
}

// console.log(myFunction("naimurrrrr"));

// 2
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function string(a, n) {
  return a[n - 1];
}

// console.log(string("naimur",1));

let n = "rony";

// console.log(n[0])

// 3
// Write a function that takes a value as argument
// Return the type of the value
function func1(a) {
  return typeof a;
}

// console.log(func1(1))

// 4

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function my(a) {
  return  a.substr(0,a.length-3)
}



console.log(my("naimurr"))