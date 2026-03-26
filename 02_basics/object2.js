const tinderUser = new Object();   //  ---------------> SINGELTON

//const tinderUser = {}                        ------> non singelton


// objectt k andar object  ko likh bhi skte h then acesses bhi kr skte h

const regularUser = {

    email :'sahil@@12345',
    username:{

        firstname: 'sahil',
        lastname :'chouhan'
    }

}

console.log(regularUser.username)
console.log(regularUser.username.lastname);


const obj1 ={

    1:'a',
    2:'b'

}

const obj2 ={

    3:'c',
    4:'d'

}

const obj3 = {obj1,obj2};

const obj4 = Object.assign({},obj1,obj2);

const obj5= {...obj1,...obj2}

console.log(obj3)
console.log(obj4)
console.log(obj5)

console.log(Object.keys(tinderUser))

console.log(Object.values(tinderUser))




