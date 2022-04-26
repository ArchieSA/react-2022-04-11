import { useDispatch, useSelector } from "react-redux";
import { cancelOrder } from "../../module/actions";
import { selectProductInfo } from "../../module/selectors";
import { Basket } from "./component";

export const BasketContainer = ({ restaurant, ...props }) => {
  const dispatch = useDispatch();
  const basketClear = () => dispatch(cancelOrder());
  const productsInfo = useSelector((state) =>
    selectProductInfo(state, restaurant)
  );
  return (
    <Basket {...props} productsInfo={productsInfo} basketClear={basketClear} />
  );
};
