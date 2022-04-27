import { Basket } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "../../../basket/module/actions";
import { selectBasket } from "../../../basket/module/selectors";

export const BasketContainer = ({ className, ...props }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => selectBasket(state));
  const clear = () => {dispatch(clearBasket())}
  return (
    <Basket
      {...props}
      className={className}
      basketItems={basket}
      clear={clear}
    />
  );
};