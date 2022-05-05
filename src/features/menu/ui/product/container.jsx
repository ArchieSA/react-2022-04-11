import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductById } from "../../../menu/module/selectors";

export const ProductContainer = ({ productId, ...props }) => {
  const dispatch = useDispatch();

  const product = useSelector((state) => selectProductById(state, productId));

  const count = useSelector((state) => selectProductCount(state, product.name));

  const decrement = useCallback(() => {
    dispatch(removeProduct(product.name));
  }, [product.name]);

  const increment = useCallback(() => {
    dispatch(addProduct(product.name));
  }, [product.name]);

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
