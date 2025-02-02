"use strict" // Treat all code as a newer varsion of JS becuase in older versions classes, modules and arrow function etc was not there,
// Now most of the newer versions code is same as older versions and we also want that the code we write here also treat as newer version of js that's why we use here "use strict".

// alert(3+3) // we are using nodejs not browser , here for alert we are having different syntax, this syntax is for browser

let name = "Kapil";
let age = 19;
let isLoggedIn = false;
let state;

console.log(name);

//datatypes 
//1. Primitive
//number = ranges from 2^53
//bigInt
//string = ""
//boolean = true/false
//null = it is a stand alone value.
//undefied 
//symbol = we use this to find uniqueness, most of the tools like figma, they uses 'symbol' so much.

//Non-primitive
//object

//we are having two type of syntax of using 'typeof' function.
console.log(typeof "Kapil"); //output = string , because it is a string type of data
console.log(typeof age); //output = number

 
console.log(typeof undefined); //output = undefined, because it is having undefined value
console.log(typeof null); //output = object , because it is a object, some people says that it is a problem in language itself
//It is an interview type question, So please keep it in mind.


//In upcoming time we will be going to learn how to use all this datatypes in details!