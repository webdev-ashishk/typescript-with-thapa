"use strict";
function calculator(a, b, c) {
    if (c === "add") {
        console.log(a + b);
    }
    else if (c === "mul") {
        console.log(a * b);
    }
    else if (c === "div") {
        console.log(a / b);
    }
    else if (c === "sub") {
        console.log(a - b);
    }
}
console.log(calculator(4, 5, "add"));
console.log(calculator(4, 5, "mul"));
console.log(calculator(4, 5, "div"));
console.log(calculator(4, 5, "sub"));
