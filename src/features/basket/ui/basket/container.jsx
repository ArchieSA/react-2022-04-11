import { Basket } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { clearBasket } from "../../../basket/module/actions";
import { selectBasket } from "../../../basket/module/selectors";

export const BasketContainer = ({ className }) => {
  const dispatch = useDispatch();
  const basketState = useSelector((state) => selectBasket(state));

  let products = []
  for(const product in basketState) {
      products.push({
        name: product,
        amount: basketState[product],
      })
  }

  const handleClearBasket = useCallback(() => {
    dispatch(clearBasket());
  }, []);

  return (
    <Basket className={className} products={products} clearBasket={handleClearBasket} />
  );
};