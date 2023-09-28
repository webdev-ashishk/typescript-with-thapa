interface Product {
  name: string;
  price: number;
  quantity: number;
}
const product1: Product = {
  name: "samsung",
  price: 20000,
  quantity: 1,
};
const product2: Product = {
  name: "vivo",
  price: 2000,
  quantity: 2,
};

const product3: Product = {
  name: "xomi",
  price: 3000,
  quantity: 3,
};
function ProductDetails(product1: Product) {
  const { name, price, quantity } = product1;
  let totalPrice = price * quantity;
  console.log(
    `name of product is ${name},price is ${price} and quantity is ${quantity} and total price is ${totalPrice}`
  );
}
ProductDetails(product1);
ProductDetails(product2);
ProductDetails(product3);
