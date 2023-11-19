const accountId = 12345 // fixed value 
let accountEamil = "sanilgupta@google.com"
var accountPassword = "12345"
accountCity = "Bhopal"  // this will work but not preffer to declare the variable like this

let accountState; // if we don't assign any value in variable so by default is will show 'undefined'

/*
 preffer not to use var 
 because of issue in block scope and functional scope
*/

console.log("accountPassword", accountPassword)

console.table([accountId,accountEamil,accountPassword,accountState,accountCity]);

// Note : Semicolon is optional in JavaScript