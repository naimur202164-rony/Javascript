/****************************
 *
 * Twinkle Cats
 * Functional Javascript
 * First Class Function
 * Lectur - 2
 *
 *****************************/

// 1. A Function can be stored in a Variable * Passed

function sayName(name) {
  return "Hello" + name;
}

// let hello = sayName;
// const fun = sayName();
// console.log(hello("Naimur"));
// console.log(fun)

// let anotherHEllo=hello

// 2. A Function can be stored in an Array * Passed\

let arr = [1, 2, 3];

arr.push(sayName);
// console.log(arr);

// 3. A Function can be stored as an Object Field or Property * Passed

let perons = {
  name: "Naimur",
  age: 21,
  sayName: sayName,
};

// 4. We can create function as needed  * Passed

let sum =
  10 +
  function () {
    return 20;
  };

//   console.log(sum)

// 5. We can pass function as an arguments  * passed

function wow(name, fun) {
  return fun(name);
}

let n = wow("Naimur Rahman D", sayName);
// console.log(n);

// 6. We can return function from another function

function base(b) {
  return function (n) {
    var result = 1;

    for (var i = 0; i < b; i++) {
      result *= n;
    }

    return result;
  };
}

//  var power = base(2);
//  var result = power(5);

var result = base(3)(5);
result;
