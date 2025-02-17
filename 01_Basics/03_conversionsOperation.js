console.log("Conversions Operations");

let score = null;

console.log(typeof(score));
console.log(score);

let valueInNum = Number(score); //convert the score into Number type
//check the datatype and value of converted value
console.log(typeof(valueInNum));
console.log(score,"\n");

//input ->output
//'25' = number
//'245sdg' = NaN (not a number)
//true = 1; false = 0
//null = null
//undefined = undefined


//More conversion
let loggedIn = "sdc";
//convert loggedIn to boolean type
let ans = Boolean(loggedIn);
//print and check what it shows
console.log(ans); //output = true


// //input -> output
// //1 = true
// //1345 = true
// //0 = false
// //"" = false //empty string
// //"sf" = true //non-empty string


//conversion to string
let bool = true;
console.log(bool); //output = true
//convert bool to string type
let ansBool = String(bool);
//print and check what it shows
console.log(ansBool); //output = true
console.log(typeof ansBool, "\n\n"); //output = string


// ***************OPERATORS*****************
console.log("Operations\n");

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);


let str1 = "Hello ";
let str2 = "World";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12 
console.log(1 + 2 + "2"); //32
console.log("1" + 2 + 2); //122

console.log(+true); //true is 1 in boolean so it givevs you 1 as output
console.log(+""); // empty "" inverted comma is false in boolean sso it gives you output as 0. 

let num1, num2 , num3;
num1 = num2 = num3 = 2+2; //generally we don't do this, this is a bad practice
console.log(num1);
console.log(num2);
console.log(num3);

