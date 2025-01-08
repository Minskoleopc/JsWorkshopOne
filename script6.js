// while loop



// intialization
// while(condition){
    // statement ----- increment/decrement
//}

let i1 = 1
while(i1 <= 3){
    console.log(i1) //1 // 2 // 3
    i1 = i1 + 1 // 2 //3 // 4
}

// program 2
//print 1 to 5
let i2  = 1
while(i2 <= 5){
    console.log(i2)
    i2 = i2 + 1
}
// print "hello"  three times
let i3 = 1
while(i3 <= 3){
    console.log("hello")
    i3 = i3 + 1
}

// program 4
// print 5 to 1
let i4 = 5
while(i4 >= 1){
    console.log(i4) // 5 // 4 // 3 // 2 // 1
    i4 = i4 - 1 //4 // 3 // 2 // 1 // 0
}

// program 5
// print table of 2
let i5 = 2
while(i5 <= 20){
    console.log(i5)
    i5 = i5 + 2
}

// program 6
// table of 5 in reverse
let i6 = 50
while(i6 >= 5){
    console.log(i6)
    i6 = i6 - 5
}

// program 7
// break statemnet and continue statement with while loop

let i7 = 1
while(i7 <= 5){
    console.log(i7) 
    if(i7 == 3){
        break
    }

    i7 = i7 + 1 
}


// let i7 = 1
// while(i7 <= 5){
//     console.log(i7) 
//     if(i7 == 3){
//         break
//     }

//     i7 = i7 + 1 
// }


// continue statment with while 

let i9 = 1
while(i9 <= 5){
    if(i9 == 3){
        i9 ++
        continue
    }

    console.log(i9) //1 // 2
    i9 ++ // 2 // 3
}


