// two types 
// primitive = number string null undefined symbol bigint boolean

//primitives datatypes are pass by value bcz when we copy krte h ek jagah se dusri jagah then change will done only in copy not main memory

//symbol

const id = Symbol("123")

const anotheid = Symbol("123")
console.log(id=== anotheid);


// reference/ non-primitive = array dunctions objects

const heros = [sahilji ,rjan,eojoe]

let myobj = {

    name :'sahil' ,
    age: 22

}

const myfunction =function () {
console.log("helloworld");
}


console.log(typeof myfunction)