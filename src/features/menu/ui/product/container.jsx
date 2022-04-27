import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";
import { getProductNameById } from '../../../basket/utils';


export const ProductContainer = ({ productId, ...props }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectProductCount(state, productId));

  const decrement = useCallback(() => {
    dispatch(removeProduct(productId));
  }, [productId]);

  const increment = useCallback(() => {
    dispatch(addProduct(productId));
  }, [productId]);


  return (
    <Product
      {...props}
      productName = {getProductNameById(productId)}
      count       = {count}
      decrement   = {decrement}
      increment   = {increment}
    />
  );
};