// map() --- array 
//                0     1    2    3
let birthYear = [1989,1990,1991,1992]
let ages = []
//[36,35,34,33]

for(let  i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2025 - birthYear[i])
    ages.push(2025 - birthYear[i])
}
console.log(ages)

birthYear = [1989,1990,1991,1992]
let q16 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2025 - el
})
console.log(q16)

let numbersB = [11,22,33,44]
let q17 = numbersB.map(function(el,index,arr){
    return el + 10
})
console.log(q17)

// filter() -- array()
let marks = [55,66,33,44,55,66,77]
//[66,66,77]
let above60 = []

for(let i = 0 ; i < marks.length ; i++){
    console.log(marks[i])
    if(marks[i] > 60){
        above60.push(marks[i] )
    }
}
console.log(above60)

marks = [55,66,33,44,55,66,77]

let q19 = marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q19)

transactions = [11,22,33,44,55,-89,77,-88,-99,100]
let deposit =  transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)

let withdrawl =  transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)

// reduce() -- expression()

let nums = [11,22,33] // 66
let total = 0

for(let i = 0 ; i < nums.length ; i++){
    // console.log(i)
    // console.log(nums[i])
    total = total + nums[i]
    //        0   +   11   ------> 11
    //       11   +    22   ------> 33
    //       33   +    33   -------> 66
}
console.log(total)

let q20 = nums.reduce(function(acc,el,index,arr){
    return acc + el // 66
},5)
console.log(q20)

// forEach() --- no return 

let cities = ["pune","mumbai","banglore","kolkata"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+el)
})


// find() - single value

// findIndex() --- number

// every() - boolean()

// some() - boolean