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
  return a.substr(0, a.length - 3);
}

// console.log(my("naimurr"))

// Problem-5
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function problem5(a, b) {
  let say;

  if (a === b) {
    console.log((say = true));
  } else {
    console.log((say = false));
  }
  return say;
}

// problem5(2,2)

// Problem-6

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function problem6(a) {
  return a.slice(0, a.length / 2);
}

// console.log(problem6("naimur"))

// Problem-7
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function prblem7(a) {
  return a.slice(0, -a.length - 3);
}

let h = "naimur";
// console.log(h.slice(3));

// console.log(prblem7("Hello0"))

// Problem-8
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function problem8(a) {
  return a.slice(0, 3);
}

// console.log(problem8("naimur"))

// problem-9
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function problem9(a, b) {
  var c = (parseFloat(a) * parseFloat(b)) / 100;
  return parseFloat(c);
}

// console.log(problem9(10,1))

// problem-10
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction(a, b, c, d, e, f) {
  let sum = a + b;
  let sub = sum - c;
  let mul = sub * d;
  let div = mul / e;
  let pow = Math.pow(div, f);
  return pow;
}

// console.log(myFunction(6,5,4,3,2,1));

// problem-11
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function problem11(a) {
  let num = a;

  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  };
   return num;
}

// console.log(problem11(4))







