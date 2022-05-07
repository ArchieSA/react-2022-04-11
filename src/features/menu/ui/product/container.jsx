import { useCallback } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductNameById } from "../../module/selectors";
import { Product } from "./component";

=======
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductNameById } from "../../module/selectors";
import { basketSlice } from "../../../basket/module";

export const ProductContainer = ({ productId, ...props }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectProductCount(state, productId));

  const productName = useSelector((state) =>
    selectProductNameById(state, productId)
  );
>>>>>>> 0ac8f344a6ef9c343ba967842f202e2933922b5b

export const ProductContainer = ({ productId, ...props }) => {
  const
    dispatch    = useDispatch(),
    productName = useSelector((state) => selectProductNameById(state, { productId })),
    count       = useSelector((state) => selectProductCount(state, { productId }));
    
  const decrement = useCallback(() => {
<<<<<<< HEAD
    dispatch(removeProduct(productId));
  }, [productId]);

  const increment = useCallback(() => {
    dispatch(addProduct(productId));
  }, [productId]);

=======
    dispatch(basketSlice.actions.removeProduct(productId));
  }, [productId]);

  const increment = useCallback(() => {
    dispatch(basketSlice.actions.addProduct(productId));
  }, [productId]);
>>>>>>> 0ac8f344a6ef9c343ba967842f202e2933922b5b

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
