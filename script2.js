// types

// introvet       // extrovert
// calm             loud
// less outing      more outing
// less social      more social

// Human --- type
// Properties - color , gender , height , weight , age
// Methods - walk() , talk()

// Vehicle - type
// Properties - color , logo , companyName , regNo
// Methods - start() , stop()

// Bank acc
// Properties - accNo , accName , Bal, type ,IFSC code
// Methods - deposit() , withdrawl() 

let a = 10
console.log(a)
console.log(typeof a)
// 10 , -10,10.5, -15.6, 0.34

let b = true
console.log(b)
console.log(typeof b)
// true false

let c = "chinmay"
console.log(c)
console.log(typeof c)
// 'c',"C",`234`,"123asdsa#!@#"," "


// comparison operator
// entity < entity ====> boolean ====> true / false

console.log(typeof 10) // number
console.log(typeof '10') // string

// < , > , <= ,>=
// == , !=  ------ value
// === ,!== ------ value and type

console.log(10 === '10')
console.log(10 === 10)
console.log(10 !== '10')
console.log(10 !== 10)
console.log(10 != '10')
console.log(10 != 10)
console.log(10 > 3)
console.log(10 < 3)
console.log(10 >= 3)
console.log(10 <= 3)
console.log(10 >= 10)
console.log(10 <= 10)

// logical operator 

// && 

//  true   &&    true  =====> true
//  false  &&    true  =====> false
//  true   &&    false =====> false
//  false  &&    false =====> false

console.log(7 == 7 && 8 == 8)
console.log(3 == 4 && 6 == 6)
console.log(3 == 3 && 6 != 6)
console.log(3 != 3 && 6 != 6)

// ||

//  true   ||   true  =====> true
//  false  ||   true  =====> true
//  true   ||   false =====> true
//  false  ||   false =====> false


console.log(7 == 7 || 8 == 8)
console.log(3 == 4 || 6 == 6)
console.log(3 == 3 || 6 != 6)
console.log(3 != 3 || 6 != 6)


// !
// !true ---- false
// !false --- true
console.log(!(7 == 8))
console.log(!(8 == 8))