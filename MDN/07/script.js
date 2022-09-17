console.log("Prototype");

const myObject = {
  city: "Marmid",
  greet() {
    console.log(`Greeting from ${this.city}`);
  },
};

console.log(myObject.greet());
// Prototypes
const myDate=new Date();
let object=myDate;


