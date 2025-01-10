// object --
// Properties and methods 

let info = ["chinmay","deshpande",24,77]

// retrive
console.log(info[0])

// add
info.push("marathi")
info.unshift("Mr")


// update
//info[0] = "tanmay"
console.log(info)

// delete
info.pop()
info.shift()
info.splice(2,1)

//        fn          ln      
info = ["chinmay","deshpande",24,77]

// Object 

let info2 = {
    // property:value
    // key:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:24,
    rollNo:77
}

// Does objects stores the value by index ??
//console.log(info2[0])

info2 = {
    // property:value
    // key:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:24,
    rollNo:77
}

// retrive (dot notation and bracket notation)
console.log(info2.firstName)
console.log(info2['firstName'])
// update  (dot notation and bracket notation)

info2.firstName = "tanmay"
info2['lastName'] = "dani"
console.log(info2)

// add  (dot notation and bracket notation)
info2.city = "pune"
info2['language'] = "marathi"
console.log(info2)

// delete (dot notation and bracket notation)
delete info2.city
delete info2['lastName']


// dot notation does not work inside loop
info2 = {
    // property:value
    // key:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:24,
    rollNo:77
}

for(let key in info2){
    console.log(key,info2[key])
}