function random(number) {
  return Math.floor(Math.random() * number);
}

function alerst() {
  alert("This Is Naimur Rahman D");
}

const original = [1, 2, 3];

const dobuled = original.map((x) => {
  console.log(x);
});

// alert("Hello WOrld")

const buttons = document.querySelector("button");

const message = () => {
  console.log("message");
};

buttons.addEventListener("click", () => {
  message();
});
