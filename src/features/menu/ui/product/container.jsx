import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductById } from "../../module/selectors"

export const ProductContainer = ({ productId, ...props }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => selectProductById(state, productId));
  const count = useSelector((state) => selectProductCount(state, name));

  const decrement = useCallback(() => {
    dispatch(removeProduct(name));
  }, [name]);

  const increment = useCallback(() => {
    dispatch(addProduct(name));
  }, [name]);

  return (
    <Product
      {...props}
      productName={name}
      count={count}
      decrement={decrement}
      increment={increment}
    />
  );
};
