import { Menu } from "./component";
 import { useSelector } from "react-redux";
import { selectIsProductsLoading } from "../../module/selectors";
// import { loadProducts } from "../../module/thunks/load-products";
// import { useEffect } from "react";

export const MenuContainer = ({ restaurantId, ...props }) => {
  // const dispatch = useDispatch();
   const isProductsLoading = useSelector(selectIsProductsLoading);

  // useEffect(() => {
  //   dispatch(loadProducts(restaurantId));
  // }, [restaurantId]);

  return isProductsLoading ? <span>Loading</span> : <Menu {...props} />;
};
