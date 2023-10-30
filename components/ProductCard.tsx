import { Product } from "@/typing";
import React from "react";
import RemoveProductButton from "./RemoveProductButton";

const ProductCard = ({ product }: { product: Product }) => {
  const { id, product: productName, price } = product;

  return (
    <div key={id} className="p-5 shadow shadow-blue-400 rounded-lg">
      <div className="flex justify-end">
        <RemoveProductButton id={id} />
      </div>
      <p>{productName}</p>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
