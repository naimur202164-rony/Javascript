// Javascript Class


export class Person {
    constructor(name,email){
        this.name=name,
        this.email=email
    }
    get name(){
        return this.name
    }
    set name(name){
        return  this.name
    }
    print(){
        console.log(`Name ${this.name ,this.email}`)
    }
}