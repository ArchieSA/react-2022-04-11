import { Basket } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderedProductIds } from "../../module/selectors";
import { useCallback } from "react";
import { basketSlice } from "../../module";

export const BasketContainer = (props) => {
<<<<<<< HEAD
  const
    dispatch = useDispatch(),
    products = useSelector((state) => selectOrderedProducts(state));
=======
  const dispatch = useDispatch();

  const productIds = useSelector((state) => selectOrderedProductIds(state));
>>>>>>> 0ac8f344a6ef9c343ba967842f202e2933922b5b

  const clearBasketCallback = useCallback(
    () => dispatch(basketSlice.actions.clear()),
    []
  );

  return (
    <Basket
<<<<<<< HEAD
      products      = {products}
      onClearBasket = {clearBasketCallback}
=======
      productIds={productIds}
      onClearBasket={clearBasketCallback}
>>>>>>> 0ac8f344a6ef9c343ba967842f202e2933922b5b
      {...props}
    />
  );
};
