<<<<<<< HEAD
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
=======
import { BasketItem } from "./component";
import { useSelector } from "react-redux";
import { selectProductNameById } from "../../../menu/module/selectors";
import { selectProductCount } from "../../module/selectors";
import { selectReviewByIds } from "../../../review/module/selectors";

export const BasketItemContainer = ({ productId, ...props }) => {
  const productName = useSelector((state) =>
    selectProductNameById(state, productId)
  );
  const count = useSelector((state) => selectProductCount(state, productId));

  const reviews = useSelector((state) => selectReviewByIds(state, []));
  return <BasketItem name={productName} count={count} {...props} />;
>>>>>>> 0ac8f344a6ef9c343ba967842f202e2933922b5b
};
