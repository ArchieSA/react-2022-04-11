import { Product } from "./component";
import { useSelector, useDispatch } from "react-redux";
import { selectProductById } from "../../module/selectors";
import { useCallback } from "react";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";

export const ProductContainer = ({ productId, ...props }) => {
  const product = useSelector(state => selectProductById(state, { productId }));
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
       productName={product.name}
      count={count} 
      decrement={decrement}
      increment={increment}
    />
  );
};
