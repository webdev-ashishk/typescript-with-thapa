// TODO 1: Write a Program to add two numbers ?
// TODO 2: How to catch  Errors & solve it ?
// TODO 3: TS Configuration file ?

// NOTE: When you find error in typescript code don't compile successfully

// ------This is code is valid in javascript but now in typescipt------->
// function sum(a, b) {
//   const result = a + b;
//   console.log(result);
// }
// sum(10, 20);
// sum("ashish", 20);
// sum(10, "ashish");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(10, "ashish"));
