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
console.log(x + z);

// Nasted Scopes
const hummus = (factor) => {
  const ingredient = (amount, unit, name) => {
    let ingredientAmount = amount * factor;

    if (ingredientAmount > 1) {
      unit = unit + "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  console.log(ingredient(1, "can", "Chickpas"));
  ingredient(0.25, "cup", "tahini");
};
