console.log("Naimur Rahman D");
const A = [1, 4, 2, 3, 4];
// console.log(A);
// console.log(A.reverse());

// const removeDup=(data)=>{
//     return data.filter((value,index)=>
//         data.inedxOf(value)===index);

// }

const removeData = (data) => {
  return [...new Set(data)];
};

// console.log(removeDup(A))
console.log(removeData(A));
