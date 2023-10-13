// https://youtu.be/splSB6jDjIw

// 2hr53min

const lenghtofString = (str: string) => {
  const length = str.length;
  return length;
};
let store = lenghtofString("you are great");
console.log(store);
console.log(lenghtofString("123456789"));
console.log(lenghtofString("hello world"));
console.log(lenghtofString("you are welcome"));

const maximumOfTwo = (a: number, b: number) => {
  if (a > b) {
    console.log("max is a: " + a);
  } else if (b > a) console.log("b is greate: " + b);
};
maximumOfTwo(1000, 300);
maximumOfTwo(10, 300);

function isEven(num1: number) {
  return num1 % 2 === 0;
}
console.log(isEven(9));
console.log(isEven(10));

function twoInput(a: number, b: number) {
  const maxValue = Math.max(a, b);
  return maxValue;
}
console.log("maximum value is :" + twoInput(20, 30));
