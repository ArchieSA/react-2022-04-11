import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";

export const ProductContainer = ({ product, ...props }) => {
  const { id } = product;
  const dispatch = useDispatch();
  const count = useSelector((state) => selectProductCount(state, id));

  const decrement = useCallback(() => {
    dispatch(removeProduct(id));
  }, [id]);

  const increment = useCallback(() => {
    dispatch(addProduct(id));
  }, [id]);

  return (
    <Product
      {...props}
      product={product}
      count={count}
      decrement={decrement}
      increment={increment}
    />
  );
};
