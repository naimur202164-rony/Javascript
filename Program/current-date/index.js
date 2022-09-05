const days = [
  "monday",
  "Tusday",
  "Wed",
  "thusday",
  "firday",
  "Satarday",
  "Sunday",
];
const d = new Date();
const today = (document.querySelector(".today").innerHTML = days[d.getDay()]);
// const horus =
// const mintes = d.getMinutes();
const time = (document.querySelector(".time").innerHTML =  d.getHours()
//   d.getHours()

// console.log(d.getMinutes());
// console.log(d.getSeconds());
