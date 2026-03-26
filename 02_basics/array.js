const myArr = [0,1,2,3,4,5]

console.log(myArr.push(6))

 console.log(myArr)

// myArr.pop()
 console.log(myArr)

 myArr.unshift()
console.log(myArr)


 myArr.shift()
console.log(myArr)


// DIFFERENCE BETWEEN {SLICE} AND {SPLICE}

const myn1 = myArr.slice(1,3)
console.log('A',myn1)

console.log('D',myArr)

const myn2 = myArr.splice(1,3)
console.log('B',myn2)

console.log('C',myArr)

// join functionn

const newArr = myArr.join()

console.log(newArr)

console.log(typeof newArr)

