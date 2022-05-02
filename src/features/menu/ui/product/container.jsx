import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductById } from "../../module/selectors";
export const ProductContainer = ({ productId, ...props }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectProductCount(state, productId));
  const productName = useSelector((state)=>selectProductById(state,{ productId })).name;
  console.log(productName);
  const decrement = useCallback(() => {
    dispatch(removeProduct(productName));
  }, [productName]);

  const increment = useCallback(() => {
    dispatch(addProduct(productName));
  }, [productName]);

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
