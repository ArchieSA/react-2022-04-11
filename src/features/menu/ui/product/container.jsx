import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addProduct, removeProduct } from "../../../basket/module/actions";
import { selectProductCount } from "../../../basket/module/selectors";
import { selectProductById } from "../../module/selectors";

export const ProductContainer = ({ productId, ...props }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectProductCount(state, productId));
  const product = useSelector((state) => selectProductById(state, { id: productId }));

  const decrement = useCallback(() => {
    dispatch(removeProduct(product.id));
  }, [product.id]);

  const increment = useCallback(() => {
    dispatch(addProduct(product.id));
  }, [product.id]);

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
