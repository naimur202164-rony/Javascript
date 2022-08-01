var b = 10;

function a() {
    var x=5;
    return function (){
        console.log(x)
    }
//   console.log(b);
}


var abc=a();


console.dir(abc);
