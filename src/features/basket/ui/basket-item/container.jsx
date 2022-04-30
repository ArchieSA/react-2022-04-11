import { useSelector } from "react-redux";
import { selectProductNameById } from "../../../menu/module/selectors";
import { BasketItem } from "./component";


export const BasketItemContainer = (props) => {
  const productName = useSelector((state) => selectProductNameById(state, { productId: props.id }));

  return (
    <BasketItem
      productName={productName}
      {...props}
    />
  );
};
