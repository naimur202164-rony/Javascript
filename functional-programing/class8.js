var name="TWincle Cats";


function seyName(){
    console.log('Hello  '+ name)
}

// seyName()



function greeting(msg){
    return function(name){
        console.log(msg+ '' +name)
    }
}

var hello=greeting("hello");
hello('Twincle Cats')