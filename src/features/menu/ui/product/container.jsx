import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductById } from "../../module/selectors";
export const ProductContainer = ({ productId, ...props }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectProductCount(state, productId));
  const product = useSelector((state) => selectProductById(state, {productId} ))

  

  const decrement = useCallback(() => {
    dispatch(removeProduct(productId));
  }, [productId]);

  const increment = useCallback(() => {
    dispatch(addProduct(productId));
  }, [productId]);

  return (
    <Product
      {...props}
      productName={product.name}
      count={count}
      decrement={decrement}
      increment={increment}
    />
  );
};
