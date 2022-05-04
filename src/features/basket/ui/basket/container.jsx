import { Basket } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderedProducts } from "../../module/selectors";
import { useCallback } from "react";
import { clearBasket } from "../../module/actions";

export const BasketContainer = (props) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => selectOrderedProducts(state));

  const clearBasketCallback = useCallback(() => dispatch(clearBasket()), []);

  return (
    <Basket
      products={products}
      onClearBasket={clearBasketCallback}
      {...props}
    />
  );
};
