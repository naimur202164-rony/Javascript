console.log("Naimur Rahman D");
const a = [1, 4, 2, 3, 4]
// console.log(A);
// console.log(A.reverse());

// const removeDup=(data)=>{
//     return data.filter((value,index)=>
//         data.inedxOf(value)===index);

// }

// const removeData = (data) => {
//   return [...new Set(data)];
// };

// console.log(removeDup(A))
// console.log((removeData(A));

const removeDuplicate = (data) => {
  let unique = [].reverse();

  data.forEach((value, index, arrey) => {
    if (!unique.includes(value)) {
      unique.push(value);
    }
  });
  return unique;
};

console.log(removeDuplicate(a));
