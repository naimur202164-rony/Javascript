console.log("Prototype");

const myObject = {
  city: "Marmid",
  greet() {
    console.log(`Greeting from ${this.city}`);
  },
};

console.log(myObject.greet());
