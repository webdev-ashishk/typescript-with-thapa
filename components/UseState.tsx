"use client";
import { useState } from "react";

interface IProduct {
  id: number;
  name: string;
  price: number;
}
const UseState = () => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      name: "samsung",
      price: 10000,
    },
    {
      id: 2,
      name: "chrome-book",
      price: 20000,
    },
    {
      id: 3,
      name: "hp",
      price: 30000,
    },
  ]);
  return (
    <div>
      <h1 className="text-blue-600 text-center text-4xl font-bold">
        UseState.tsx
      </h1>
      {products &&
        products.map((product) => (
          <div key={product.id} className="text-3xl font-bold">
            <ul>
              <li> {product.name}</li>
              <span>
                <li>{product.price}</li>
              </span>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default UseState;
