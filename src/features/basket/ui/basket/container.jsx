import { Basket } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { selectBasket } from "../../../basket/module/selectors";
import { removeAllProduct } from "../../../basket/module/actions";

export const BasketContainer = ({ className }) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);
  const clear = useCallback(() => {
    dispatch(removeAllProduct());
  }, []);

  return <Basket className={className} basket={basket} clear={clear} />;
};
