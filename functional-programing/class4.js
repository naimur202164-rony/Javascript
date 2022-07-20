function name(fristName, lastName, gender) {
  var output;
  if (gender == "male") {
    output = "MR" + fristName + "" + lastName;
    return output;
  } else if (gender == "female") {
    var output = "MS  " + fristName + "" + lastName;
    output;
  }
  return output;
}

var result = name("Naimur", "Rahman", "male");

// console.log(result);

function example() {
  return {
    name: "Naimur Rahman ",
    skill: ["Java", "javascript"],
    print: function () {
      console.log(this.name, this.skill);
    },
  };
}


// var obj=example();

// console.log(obj)