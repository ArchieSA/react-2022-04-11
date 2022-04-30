import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductById } from "../../module/selectors";

export const ProductContainer = ({ productID, ...props }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectProductCount(state, productID));
  const product = useSelector((state) =>
    selectProductById(state, { productID })
  );

  const decrement = useCallback(() => {
    dispatch(removeProduct(productID));
  }, [productID]);

  const increment = useCallback(() => {
    dispatch(addProduct(productID));
  }, [productID]);

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
