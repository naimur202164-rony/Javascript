function greet(msg) {
  function greetings(name) {
    return msg + "  ," + name + "!";
  }

  return greetings;
}

greet("Good morning");

var gm = greet("Good Morning");
var smg=gm("Hello Naimur Rahman")


console.log(gm)
console.log(typeof gm);
