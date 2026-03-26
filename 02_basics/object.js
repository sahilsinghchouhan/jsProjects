const jsUser = {}

const jsUsers = {

    name: "sahil",
    age: 18,
    loccation :'jaipur'

}

// console.log(jsUsers)
// console.log(jsUsers.age)
// console.log(jsUsers['name'])
// console.log(jsUsers['age'])


// console.log(jsUsers['name'])

// Object.freeze(jsUsers)                  hata diyo isko nhi toh khi change nhi hoga
// console.log(jsUsers['name'])
// jsUsers.name = "hitesh"
// console.log(jsUsers['name'])


jsUsers.greeting = function() {

    console.log("sahilchouhan");
}


jsUsers.greetingtwo = function() {

    console.log(`heloo ,${this.name}`);
}

//console.log(jsUsers.greeting)
console.log(jsUsers.greeting())

console.log(jsUsers.greetingtwo());