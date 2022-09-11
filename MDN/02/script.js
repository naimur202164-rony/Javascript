console.log("Naimur Rahman ");
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  // alert("Yay, I love chocolate ice cream!");
} else {
  // alert("Awwww, but chocolate is my favorite…");
}

function multiplay(num1, num2) {
  let result = num1 * num2;
  return result;
}

console.log(multiplay(10, 20));


// Events

document.querySelector('html').addEventListener('click',()=>{
  alert("Dont toch me")
})


switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}