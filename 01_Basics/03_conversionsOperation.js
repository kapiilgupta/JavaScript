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


//input -> output
//1 = true
//1345 = true
//0 = false
//"" = false //empty string
//"sf" = true //non-empty string


//conversion to string
let bool = true;
console.log(bool); //output = true
//convert bool to string type
let ansBool = String(bool);
//print and check what it shows
console.log(ansBool); //output = true
console.log(typeof ansBool); //output = string


