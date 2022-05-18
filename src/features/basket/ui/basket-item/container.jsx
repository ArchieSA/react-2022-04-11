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
};
