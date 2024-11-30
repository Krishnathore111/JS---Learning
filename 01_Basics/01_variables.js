const accoundId = 144553   // never change should always be constant
let accountEmail = "demo12@gmail.com"
var accountPass = "Pass@123"
accountCity = "Pune"   // can declare variable without specifieng let and cosnt

let accountState

// accoundId = 2    // will give error since its constant
accountEmail = "hc@hc.com"
accountPass = '123'
accountCity = 'Mumbai'

console.log(accoundId)

/*
Prefer not to use var 
because of issue in functional and block scope
*/

console.table([accoundId,accountEmail,accountPass,accountCity,accountState])