
let numbers = [11,22,33,44]
let cities = ["pune","nagpur","delhi","kolkata"]
let info = ["chinmay","deshpande",7709192441,true]

// array
//             0          1       2       3
let fruits = ["apple","mango","banana","grapes"]
console.log(fruits[0])

// update 
fruits[1] = "papaya"
console.log(fruits)

// loop
//          0        1       2       3
fruits = ["apple","mango","banana","grapes"]

for(let i = 0 ; i < 4 ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0 // 1 // 2 // 3
    console.log(fruits[i])
}

//        0         1          2
veg = ["potato","cabbage","cauliflower"]
console.log(veg.length)

for(let i = 0 ; i < veg.length ; i++){
   // console.log(i)
    console.log(veg[i])
}

// veg.length --- total of number element in array
//  length - 1 is always last index

let color = ["blue","green","orange","red","yellow"] 
let i1 = 0
while(i1 < color.length){
    console.log(color[i1])
    i1 = i1 + 1
}

// Object --- properties and method
// length 
//color.length

// Method 
// Gym 
// action -- excercise
// return -- health

// push()
color = ["blue","green","orange","red","yellow"]
let q1 = color.push("purple")
console.log(color)
console.log(q1)

// unshift()
color = ["blue","green","orange","red","yellow"]
let q2 = color.unshift('violet')
console.log(q2)
console.log(color)

// pop()
color = ["blue","green","orange","red","yellow"]
let q3 = color.pop()
console.log(q3)
console.log(color)

// shift()
color = ["blue","green","orange","red","yellow"]
let q4 = color.shift()
console.log(q4)
console.log(color)

// push() , unshift(), pop(),shift()

// includes()
countries = ["india","pakistan","srilanka","bangladesh"]
let q5 = countries.includes('India')
console.log(q5)

// indexOf()
//             0         1          2          3
countries = ["india","pakistan","srilanka","bangladesh"]
let q6 = countries.indexOf('India')
console.log(q6)

// at()
//               0       1       2
let animals = ["tiger","lion","rabbit"]
//              -3       -2       -1

let q7 = animals.at(2)
console.log(q7)
q8 = animals.at(-1)
console.log(q8)

// join() -- string
let info2 = ["chinmaydeshpande","gmail.com"]
let q9 = info2.join(' ')
console.log(q9)

// contact()
let arr1 = [11,22,33]
let arr2 = [44,55,66]
let q10 = arr1.concat(arr2)

let q12 = arr2.concat(arr1)
console.log(q10)
console.log(q12)

// flat()
//                    0                   1                   2
//                0       1         0        1         0          1
let states = [["nagpur","pune"],["indore","bhopal"],["jaipur","udaipur"]]
console.log(states[2][1])
let q11 = states.flat()
console.log(q11)

// reverse()

numbers = [11,22,33,44,55]
let q13 = numbers.reverse()
console.log(q13)

// sort()
let names2 = ["sarika","abhisha","shraddha","bimal"]
let q14 = names2.sort()
console.log(q14)

// slice()
//               0       1        2        3       4          5
let fruits2 = ["apple","mango","banana","orange","papaya","chikoo"]
//              -6        -5    -4         -3         -2       -1

console.log(fruits2.slice(2))
console.log(fruits2.slice(2,5))
console.log(fruits2.slice(1,-1))
console.log(fruits2.slice(-6,-2))
console.log(fruits2.slice(-1,-3))
console.log(fruits2.slice(-4))

// fruits2.slice(startIndex)
// fruits2.slice(startIndex,endIndex(not included))

//splice()
//              0  1   2  3  4
let numbersC = [11,22,33,44,55]

// numbersC.pop()
// numbers.shift()
//numbersC.splice(startIndex,numberOfElementTobeDeleted)
//numbersC.splice(startIndex,numberOfElementTobeDeleted,rep1,rep2)
//numbersC.splice(1,2)
//numbersC.splice(2,1)

numbersC.splice(1,2,333,444)
console.log(numbersC)
//console.log(numbersC)

// fill()
//           0  1 2  3   4
let mrks = [11,22,33,44,55]
mrks.fill('failed',1,4) // last index not included
console.log(mrks)