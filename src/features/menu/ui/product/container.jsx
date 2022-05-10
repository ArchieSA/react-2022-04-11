import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { selectProductCount } from "../../../basket/module/selectors";
import { basketSlice } from "../../../basket/module";
import { selectProductById } from "../../../menu/module/selectors";

export const ProductContainer = ({ productId, ...props }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectProductCount(state, productId));
  const product = useSelector((state) => selectProductById(state, productId));

  const decrement = useCallback(() => {
    dispatch(basketSlice.actions.removeProduct(productId));
  }, [productId]);

  const increment = useCallback(() => {
    dispatch(basketSlice.actions.addProduct(productId));
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
