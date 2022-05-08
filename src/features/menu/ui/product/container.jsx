import { Product } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { selectProductCount } from "../../../basket/module/selectors";
import {selectIsProductLoading, selectProductNameById} from "../../module/selectors";
import { basketSlice } from "../../../basket/module";
import {loadProduct} from "../../module/thunk/load-products";

export const ProductContainer = ({ productId, ...props }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectProductCount(state, productId));

  const productName = useSelector((state) =>
    selectProductNameById(state, productId)
  );

  const decrement = useCallback(() => {
    dispatch(basketSlice.actions.removeProduct(productId));
  }, [productId]);

  const increment = useCallback(() => {
    dispatch(basketSlice.actions.addProduct(productId));
  }, [productId]);

  const isLoading = useSelector(selectIsProductLoading);

  useEffect(() => {
    dispatch(loadProduct(productId));
  }, []);

  return isLoading || !productName ? (
      <span>Loading</span>
  ) : (
    <Product
      {...props}
      productName={productName}
      count={count}
      decrement={decrement}
      increment={increment}
    />
  );
};
