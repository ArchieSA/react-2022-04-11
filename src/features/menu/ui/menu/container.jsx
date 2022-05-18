import { RestrauntMenu, Menu } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { selectIsProductsLoading } from "../../module/selectors";
import { loadProducts } from "../../module/thunks/load-products";
import { useEffect } from "react";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();
  const isProductsLoading = useSelector(selectIsProductsLoading);

  useEffect(() => {
    dispatch(loadProducts(restaurantId));
  }, [restaurantId]);

  return isProductsLoading ? (
    <span>Loading</span>
  ) : restaurantId ? (
    <RestrauntMenu {...props} />
  ) : (
    <Menu {...props} />
  );
};
