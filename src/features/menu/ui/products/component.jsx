import React from "react";
import { ProductContainer } from "../../../menu/ui/product/container";

export const Products = ({ productIds, isAllProductsExist }) => {
  if (!isAllProductsExist) {
    return <span>No products</span>;
  }

  return (
    <div>
      {productIds?.map((productId) => (
        <ProductContainer
          key={productId}
          productId={productId}
          className={productId}
        />
      ))}
    </div>
  );
};
