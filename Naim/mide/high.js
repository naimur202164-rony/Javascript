function greet(msg) {
  function greetings(name) {
    return msg + "  ," + name + "!";
  }

  return greetings;
}

greet("Good morning");

var gm = greet("Good Morning");

console.log(typeof gm);
