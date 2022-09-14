console.log("MDN");


const person={
    name:['Naimur','Smith'],
    age:22,
    order:"This is Naimur Rahman D",
    bio:function(){
        console.log(`${this.name[0]}  ${this.name[1]} ${this.age} is years old`)
    }
};
console.log(person);