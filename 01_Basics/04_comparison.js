console.log(2 == 2 );
console.log(2 < 2 );
console.log(2 <= 2 );
console.log(2 > 2 );
console.log(2 >= 2 );
console.log(2 != 2 );


console.log("2" != 2 );  //output = false , it internally ocnvert string to integer So it finalise that if we don't specify the data type then it smight give us wrong answer So kindly ensire your data type before compare.
console.log("2" > 1 ); //output = true

//Problem in comparison // So we avoid this type of conversion.
console.log(null > 0 ); //output = false
console.log(null == 0 ); // output = false
console.log(null >= 0 ); // output = true
// the reason is that an equality check "==" and comparison "<, > , <=, >=" works differently
//comparison convert null to a number and treating it as 0
//that's why null >= 0  == true WHILE null > 0 == false

console.log(undefined > 0 ); //output = false
console.log(undefined == 0 ); // output = false
console.log(undefined >= 0 ); // output = false
console.log(undefined < 0 ); // output = false
console.log(undefined <= 0 ); // output = false
//Same upper problem of NULL happen in undefined also.
//But undefined will always gives you false no matter you compare it with which operator.


//We have to keep in mind that in js "==" and comparison operator both having different meaning.
//"==" work diff bcoj "==" and "===" they have diiff method of working.

//strict check
// it check your data type also along with your value
console.log("2" === 2); //false, while in == it gives true (no data type checking there)
