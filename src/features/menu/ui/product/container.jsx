import { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductNameById } from "../../module/selectors";
import { basketSlice } from "../../../basket/module";
import { Product } from './component';


export const ProductContainer = ({ productId, ...props }) => {
  const
    dispatch    = useDispatch(),
    productName = useSelector((state) => selectProductNameById(state, productId)),
    count       = useSelector((state) => selectProductCount(state, productId));
    
  const decrement = useCallback(() => {
    dispatch(basketSlice.actions.removeProduct(productId));
  }, [productId]);

  const increment = useCallback(() => {
    dispatch(basketSlice.actions.addProduct(productId));
  }, [productId]);

  return (
    <Product
      {...props}
      productName = {productName}
      count       = {count}
      decrement   = {decrement}
      increment   = {increment}
    />
  );
};
