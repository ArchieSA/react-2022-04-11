import { Basket } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../../module/selectors";
import { useCallback } from "react";
import { clearBasket } from "../../module/actions";

export const BasketContainer = ({ className }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => selectProduct(state));

  const resetBasket = useCallback(() => {
    dispatch(clearBasket());
  }, []);

  return (
    <Basket
      className={className}
      products={products}
      resetBasket={resetBasket}
    />
  );
};
