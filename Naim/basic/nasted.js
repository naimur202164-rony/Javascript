var n = 5;

for (var i = 1; i <= n; i++) {
  //   console.log(i);
  let result = "";

  for (var j = 1; j <= i; j++) {
    console.log((result += j + ""));
  }
}
