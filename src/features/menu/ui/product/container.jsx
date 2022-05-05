import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductById } from '../product/module/selectors';

export const ProductContainer = ({ productId, ...props }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectProductCount(state, productId));
  const products = useSelector((state)=> selectProductById(state, productId));


  const decrement = useCallback(() => {
    dispatch(removeProduct(products.name));
  }, [dispatch, products.name]);

  const increment = useCallback(() => {
    dispatch(addProduct(products.name));
  }, [dispatch, products.name]);

  return (
    <Product
      {...props}
      productName={products.name}
      count={count}
      decrement={decrement}
      increment={increment}
    />
  );
};
