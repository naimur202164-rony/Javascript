// function host() {
//   console.log("I am Host function....");
//   return   function(){
//     console.log('I am Child');
//   }
// }

// var a=host();
// console.log(a(  ))

function greeting(msg) {
  return function (name) {
    console.log(msg + " " + name);
  };
}

var good = greeting("good morginh");
var hello = greeting("Hello");


hello('Twincle Cats')
good('goood twincle ')
