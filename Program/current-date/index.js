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
const today = document.querySelector(".today").innerHTML=days[d.getDay()];

console.log();



