const gamename= new String("hitesh   ")


console.log(gamename.length);

console.log(gamename.toUpperCase())

const anothergame = gamename.toUpperCase() ;
console.log(anothergame)


console.log(gamename.charAt(2))
console.log(gamename.indexOf('s'))
console.log(gamename.substring(0,3))
console.log(gamename.slice(-4,4))
console.log(gamename.trim())
// console.log(gamename.replace)
console.log(gamename.split('t'))

const sixgame = "  sahilchouhsn     "
console.log(sixgame)
console.log(sixgame.trim())



// use backticks for string interexploation 

console.log(`my name is ${gamename}`)

const url = "chouhansahil@gmail.com"

console.log(url.replace('@' ,'46'))

console.log(url.includes('46'))

console.log(url.split('@'))