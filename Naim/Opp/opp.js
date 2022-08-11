// Object Litaral

var rect = {
  width: 100,
  height: 50,
  draw: function () {
    console.log("I am a rectangle");
    this.printProperties();
    console.log(this)
  },
  printProperties: function () {
    console.log("My width is " + this.width);
    console.log("my height is " + this.height);
  },
};

rect.draw();
// rect.height=100;

// rect.draw()

function myFunc() {
  console.log(this);
}

new myFunc();



var another={
    width:47,
    height:78,
    print:rect.printProperties
}

console.log(
    another.print()


)