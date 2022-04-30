import { Basket } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderedProducts, selectBasketArr } from "../../module/selectors";
import { useCallback } from "react";
import { clearBasket } from "../../module/actions";

export const BasketContainer = (props) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => selectOrderedProducts(state));
  const basketArr = useSelector(selectBasketArr);

  const clearBasketCallback = useCallback(() => dispatch(clearBasket()), []);

  return (
    <Basket
      products      = {products}
      onClearBasket = {clearBasketCallback}
      {...props}
    />
  );
};
