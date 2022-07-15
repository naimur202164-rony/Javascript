// console.log("HEllo From Arrey Methods")


const cars=["Sabb","Volvo","BMW"];


// Accessing on arrey

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
// console.log(cars[3])

// Objects Methods


const person={
    name:"Naimur Rahman",
    age:23,
    class:"Horns Frist Year Student",
    height:"5.8 Feet"


};
const data=["Naimr","Rony","Mario","Niki"]


console.log(person)

// Array Properties and Methods
console.log(data.length -1)
// Accessing arrey last index
const d=data[data.length-1];

console.log(d)


// Lopping Arrey Elements

const fruits=["Bannna","Orange","Apple","Mango"];
const felen=fruits.length;
console.log(felen);
let text="<ul></ul>";

for(let i=0;i<felen;i++){
    console.log(fruits[i])
}


// Using ForEach Methods in Javascripts

const fruit=["Banna","Mengo","Apple","Tomato"];


fruit.forEach((r)=>{
    console.log(r)
})



// Arrey Methods PUSH || POP ||SHIFT || UNSHIFT



const students=["Rony","ATIQ","GALIB","Ridoy"];

// Adding New students in this Arrey
students.push("Fuker Boy");
students.pop();
students.shift();
students.unshift()
console.log(students)

// Adding Two Arreys

const arr1=[1,2,3,4,5,6];
const arr2=[7,8,9,10,11];
const arr=[...arr1,...arr2];


console.log(arr)

