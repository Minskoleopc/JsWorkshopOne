let s = 10
let t = 4


if(s > t){
    console.log("s is greater")
}
else {
    console.log('t is greater')
}

// tenary operator 

// condition ?statement1:statement2
let e = 8
let f = 40
e > f ? console.log("e is greater"):console.log("f is greater")


// program 2
let age =  18
let flag = age >= 18 ?"can dive":"cannot drive"
console.log(flag)

// switch case without break statement

let city = "pune"
switch(city){
    case "pune":
        console.log("MH")
    case "udaipur":
        console.log("RJ")
    case "bhopal":
        console.log("MP")
    default:
        console.log("incorrect city name as input")
}

// program 3
// switch case with break statement 
console.log("example ---- 2")
let city2  = "jaipur"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "bhopal":
        console.log('MP')
        break
    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city name ..")

}

// same output for multiple case 

let city3 = "Nagpur"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    
    case "jaipur":
    case "udipaur":
        console.log("RJ")
        break

    case "indore":
    case "bhopal":
        console.log("MP")
        break

    default:
        console.log("incorrect city name")

}

// program 4

let x1 = 800
let x2 = 4000
let x3 = 20000
let biggest = true 

switch(biggest){
    case x1 > x2 && x1 > x3:
        console.log("x1 is greater")
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")
}







// if(x1 > x2 && x1 > x3){
//     console.log("x1 is greater")
// }
// else if(x2 > x1  && x2 > x3){
//     console.log("x2 is greater")
// }
// else {
//     console.log("x3 is greater")
// }










