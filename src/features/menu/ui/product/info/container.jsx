import { useSelector } from "react-redux";
import { selectProductById } from "../../../module/selectors";
import { ProductInfo } from "./component";

export const ProductInfoContainer = ({ productId }) => {
  const product = useSelector((state) => selectProductById(state, productId));

  if (product == null) {
    return;
  }
  return (
    <ProductInfo
      productName={product.name}
      productIngredients={product.ingredients}
      productPrice={product.price}
    />
  );
};
