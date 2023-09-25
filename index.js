"use strict";
// Lec-5
// write typescript function called isDivisibleBy4And8 that takes a number as a parameter and returns true if the number is divisible by 4 and 8
// If any number which is divisible by 8 also divisible by 4 {HINT}
/*

var num: number = 1280;

function isDivisibleBy4(a: number): boolean {
  var last2DigitString = String(a).slice(-2);
  var last3DigitString = String(a).slice(-3);
  var last2DigitNumber = Number(last2DigitString);
  var last3DigitNumber = Number(last3DigitString);
  // console.log(typeof last2DigitNumber);
  return last2DigitNumber % 4 === 0 && last3DigitNumber % 8 === 0;
}

console.log(isDivisibleBy4(num));


*/
// =============== BigInt ===================>
let bigNumber = 9007199254740992n;
let anotherBigInt = BigInt("900719925474099252040240");
// console.log(anotherBigInt);
let sum = bigNumber + anotherBigInt;
console.log(sum); // at the end n present
console.log("sum-one" + sum); // at the end n is not present
let difference = bigNumber - anotherBigInt;
console.log(difference); // at the end n present
console.log("difference-one" + difference); // at the end n is not present
let divisible = bigNumber / anotherBigInt;
console.log(divisible); // at the end n present
console.log("divisible-one" + divisible); // at the end n is not present
let multiply = bigNumber * anotherBigInt;
console.log(multiply); // at the end n present
console.log("multiply-one" + multiply); // at the end n is not present
