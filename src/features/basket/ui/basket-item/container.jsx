import { useSelector } from "react-redux";
import { selectProductById } from "../../../menu/module/selectors";
import { BasketItem } from "./component";

export const BasketItemContainer = ({ productId, count, className }) => {
  let product = useSelector((state) => selectProductById(state, { id: productId }));
  return <BasketItem name={product.name} count={count} className={className} />;
};
