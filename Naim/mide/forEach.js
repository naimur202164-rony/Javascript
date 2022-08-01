var arr = [1, 2, 3, 4, 5, 6];

// console.log(arr);

// let sum = 0;
// arr.forEach((value, index, arr) => {
//   //   console.log(index, value, arr);

//   sum += value;
// //   console.log(sum);
// });


// console.log(sum)




function forEach(arr,cb){
    for(var i=0;i<arr.length;i++){
        cb(arr[i])
    }
}
forEach()