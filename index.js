"use strict";
var employee = ["anjuK", 10];
employee.push("ashishk", 20);
console.log("current-emp length " + employee.length);
console.log(employee);
// employee.push(true, "120");
employee.pop();
console.log(employee);
let produc1 = ["samsung", 10000, 10];
let produc2 = ["xomi", 9000, 90];
function displayProductInfo(produc1) {
    const [name, price, stock] = produc1;
    console.log(`name of the Product is ${name} , price is ${price} and stock is ${stock}`);
}
displayProductInfo(produc1);
displayProductInfo(produc2);
