import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductNameById } from "../../module/selectors";
import { Product } from "./component";


export const ProductContainer = ({ productId, ...props }) => {
  const
    dispatch    = useDispatch(),
    productName = useSelector((state) => selectProductNameById(state, { productId })),
    count       = useSelector((state) => selectProductCount(state, { productId }));
    
  const decrement = useCallback(() => {
    dispatch(removeProduct(productId));
  }, [productId]);

  const increment = useCallback(() => {
    dispatch(addProduct(productId));
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
