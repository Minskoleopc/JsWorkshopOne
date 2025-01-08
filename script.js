// node 
// visual studio code
// explain --- rewrite addtional

console.log("hello")
let a = 10
console.log(a)
a  = 200
console.log(a)

const b = 1000
console.log(b)
//b = 1000

// Arithmetic operation
// + , - , * , / , %
let s = 8
let t = 4

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

let q = 6
let r = 3

console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)

// 10 pair ----->  50 lines DRY

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(9,3)
Calculator(10,5)
Calculator(8,4)

// function without parameter and without return type 

function addA(){
    console.log(9+9)
}
addA()
addA()
addA()
addA()
addA()

// function with parameter and without return type

function addB(x,y){
    console.log(x+y)
}
addB(12,3)
addB(12,1)
addB(12,2)

// function with parameter and with return type 
// 100 show
// 100 given // 100 + 100 , 100 - 50 , 100 / 5

function addC(x,y){
    return x + y
}
let q1 = addC(12,5)
console.log(q1)
console.log(q1 - 5)
console.log(q1  / 4)
console.log(q1 * 0.10)

// different ways to write functions in js

