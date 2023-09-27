var employee: [string, number] = ["anjuK", 10];
employee.push("ashishk", 20);
console.log("current-emp length " + employee.length);
console.log(employee);
// employee.push(true, "120");
employee.pop();
console.log(employee);

// assignment -one
type ProductInfo = [string, number, number];

let produc1: ProductInfo = ["samsung", 10000, 10];
let produc2: ProductInfo = ["xomi", 9000, 90];

function displayProductInfo(produc1: ProductInfo) {
  const [name, price, stock] = produc1;
  console.log(
    `name of the Product is ${name} , price is ${price} and stock is ${stock}`
  );
}
displayProductInfo(produc1);
displayProductInfo(produc2);
