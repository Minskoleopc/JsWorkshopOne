// condtional statements

// one input and multiple outcomes 

// numT > 0 && numT <= 5   ====> 5 % discount
// numT > 5 && numT <= 10  ====> 10 % discount
// numT > 10               ====> 30 % discount

// if(condition){
//     // statement
// }

let numt = 17

// if(numt >  0  && numt <= 5){
//     console.log("5 % discount")
// }
// if(numt > 5 && numt <= 10){
//     console.log('10 % discount')
// }
// if(numt > 10){
//     console.log('30 % discount')
// }

numt = -17
if (numt > 0 && numt <= 5) {
    console.log("5 % discount")
}
else if (numt > 5 && numt <= 10) {
    console.log('10 % discount')
}
else if (numt > 10) {
    console.log('30 % discount')
}
else {
    console.log('incorrect input')
}

// program 3

let marks = 92

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks >= 75){
//     console.log("Grade B")
// }
// if(marks >= 65){
//     console.log("Grade C")
// }


if(marks > 90){
    console.log("Grade A")
}
else if(marks >= 75){
    console.log("Grade B")
}
else if(marks >= 65){
    console.log("Grade C")
}
else {
    console.log("please try again")
}

// let a = true
// console.log(5 + '5')

// function add(a:number,b:number){
//     console.log(a+b) // '55'
// }
// add(5,'5')