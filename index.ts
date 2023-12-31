let ten = 10;
console.log(typeof ten); //number

//add with return type
function addTwoNumber(a: number, b: number): number {
  return a + b;
}
var value = addTwoNumber(10, 20);
console.log(value);

//add without return type
function multiply(n: number, m: number): void {
  const result = n * m;
  console.log("multiplication", result);
}
multiply(10, 20);
// lecture 4
//todo substring
const longText: string = "welcome to awesome place , learning ts is very easy";
const shortText: string = longText.slice(0, 10);
console.log("short text are here: " + shortText);
//todo string comparison
var str1: string = "good";
var str2: string = "bad";
const result: boolean = str1 === str2 ? true : false;
console.log("checking type of two string", result);
//todo string template
var product: string = "honda";
var price: number = 100;
console.log(`product is bike ${product} and price is ${price}$`);
let results2: string = price + "price is ";
console.log(results2);

let computedValue: number = Math.sqrt(16);
console.log("computed value is ", computedValue);
let nanValue: number = NaN;
console.log(typeof nanValue);

var checking: any = 10;
checking = "anjuK";
checking = true;
console.log("type checking", typeof checking);

// lec 7

var message = "hello typeScript !";
console.log(`message is ${message} and type of message is ${typeof message}`);

function calculateArea(w: number, h: number) {
  const area = w * h;
  return area;
}

const area = calculateArea(10, 20);
console.log(`area is ${area} and type of area is :${typeof area}`);

const nameArray: number[] = [20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(`name of Array is ${nameArray.length}`);
console.log("type of name array is :", typeof nameArray);

for (const arrayResult of nameArray) {
  console.log(`array result is ${arrayResult}`);
}
for (const arrayResult2 in nameArray) {
  console.log(`array result2 is ${arrayResult2}`);
}

nameArray.map((element) => console.log(element));
const over80 = nameArray.filter((element) => element > 80);
console.log(`value over 80 in filtermethod: ${over80}`);
