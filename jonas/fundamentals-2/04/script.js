console.log("Hello From the Functions");

function calcAge1(birthyear) {
  return 2037 - birthyear;
}

const age = calcAge1(1991);
const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const ag2 = calcAge2(1991);
console.log(ag2)
console.log(age);
