const accountId = 12306995
let accountName = "Kapil Gupta"
var accountEmail = "Kapil@email.com"
accountCity = "Jalandhar"

// accountId = 3234; //reintialise new value is not allowed for const type of data.
console.log(accountId);

//change value of all variables
accountName = "Keshav Gupta"
accountEmail = "Keshav@email.com"
accountCity = "Phagwara"

let accountState; //if we print this then the value will be "undefined", because we doesn't define any value here so js take it as undefined.

//print all data in a tabular structure using console.table
console.table([accountId, accountName, accountEmail, accountCity, accountState]);

/*  //Multi line comment syntax
prefer not to use var
because of issue in block scope and functional scope
*/