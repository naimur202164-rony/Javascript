const arr = [1, 2, 3, 4, 5];

// arr.forEach((element,index,arr)=>{
//     console.log(element,index,arr)
// })

function loop(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
// console.log(loop(arr,function()));
