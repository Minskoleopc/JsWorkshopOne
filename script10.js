// string 

let fn = "chinmay"
let ln = 'deshpande'
let mn = `shirish`

console.log(typeof fn)
console.log(typeof ln)
console.log(typeof mn)

// string concat

let firstN = "chinmay"
let lastN = "deshpande"

// My firstName is chinmay and lastName is deshpande
console.log('My firstN is '+firstN+' and my lastName '+lastN)
console.log(`My firstN is ${firstN} and lastName is ${lastN}`)


// string + string ====> string 
// string + number ====> string 
// number + string ====> string 
// number + number ====> number

let a = 100
let b = 50
let c = "hello"

console.log(c+a+b)
//  string + number + number
// "hello50" + 100
// "hello50100"


console.log(a+b+c)
// number + number + string
///  100  + 50 + "hello"
//      150+"hello"
// "150hello"   


// loop
// 0  1  2  3
// p  u  n  e

let city = "pune"
console.log(city[0])
console.log(city[1])

for(let i = 0 ; i < city.length ; i++){
    //console.log(i)
    console.log(city[i])
}

let i2 = 0

while(i2 < city.length){
   //console.log(i2)
    console.log(city[i2])
    i2 = i2 + 1
}

let city2 = "nagpur"
// n  a  g  p  u  r
city2[0] = "0"
console.log(city2)


// String 

// toUpperCase()
let fiN = "Chinmay"
let q1 = fiN.toUpperCase()
console.log(q1)

// toLowerCase()
let q2 = fiN.toLowerCase()
console.log(q2)

// replace()
 info2 = "I am learning javascript"
 let q4 = info2.replace("javascrit","python")
 console.log(q4)