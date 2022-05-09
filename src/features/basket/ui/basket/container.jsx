import { Basket } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderedProductIds } from "../../module/selectors";
import { useCallback } from "react";
import { basketSlice } from "../../module";

export const BasketContainer = (props) => {
  const dispatch = useDispatch();

  const productIds = useSelector((state) => selectOrderedProductIds(state));

  const clearBasketCallback = useCallback(
    () => dispatch(basketSlice.actions.clear()),
    []
  );

  return (
    <Basket
      productIds={productIds}
      onClearBasket={clearBasketCallback}
      {...props}
    />
  );
};
