import { useDispatch, useSelector } from "react-redux";
import { Basket } from "./component";
import { selectBasket } from "../../../basket/module/selectors";
import { emptyBasket } from "../../module/actions";

export const BasketContainer = () => {
  const dispatch = useDispatch();

  const dispatchEmptyBasket = () => dispatch(emptyBasket());

  const basket = useSelector((state) => selectBasket(state));

  return (
    <Basket basketData={basket} dispatchEmptyBasket={dispatchEmptyBasket} />
  );
};
