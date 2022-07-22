// console.log('Hello');

// setTimeout(()=>{
//     console.log('Im am  in Timer',2000)
// })

// console.log('im am thired')



// let myFristPromise=new Promise((resolve,reject)=>{
//         let name="Naimur"


//         resolve(name)
// })



let data =fetch(`https://jsonplaceholder.typicode.com/users`);

console.log(data);