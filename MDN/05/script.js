console.log("MDN");


const person={
    name:['Naimur','Smith'],
    age:22,
    order:"This is Naimur Rahman D",
    bio:function(){
        console.log(`${this.name[0]}  ${this.name[1]} ${this.age} is years old`)
    },
    introduceSelf:function(){
        console.log(`Hi Iam ${this.name[0]}`);
    },
};
console.log(person.name,

        person.name[0],
        person.age,
      
    
    );