import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductNameById } from "../../module/selectors";
import { basketSlice } from "../../../basket/module";

export const ProductContainer = ({ productId, ...props }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectProductCount(state, productId));

  const productName = useSelector((state) => selectProductNameById(state, productId));

  const decrement = useCallback(() => {
    dispatch(basketSlice.actions.removeProduct(productId));
  }, [productId]);

  const increment = useCallback(() => {
    dispatch(basketSlice.actions.addProduct(productId));
  }, [productId]);

  return (
    <Product
      {...props}
      productName={productName}
      count={count}
      decrement={decrement}
      increment={increment}
    />
  );
};
