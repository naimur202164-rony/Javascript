// Working with function example

const square = (x) => {
  return x * x;
};

console.log(10);

// Make Noise Function

const makeNoise = () => {
  console.log("Pling");
};
makeNoise();

// Logger Function

const power = (base, exponent) => {
  let result = 1;

  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));

// function scope;

let x = 20;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  //   ->60;
}
//  Y is not visiable here
console.log(x + z );
