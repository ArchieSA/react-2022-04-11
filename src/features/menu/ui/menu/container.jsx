import { Menu } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from '../../module/thunks/load-products';
import { selectProductIdsByRestaurantId, selectIsProductsLoading, selectIsProductsByRestaurantId } from '../../module/selectors';


export const MenuContainer = ({ restaurantId, className }) => {
  const
    dispatch   = useDispatch(),
    productIds = useSelector((state) => selectProductIdsByRestaurantId(state, restaurantId)),
    isProducts = useSelector((state) => selectIsProductsByRestaurantId(state, restaurantId)),
    isLoading  = useSelector(selectIsProductsLoading);
  
  useEffect(() => {
    if (!isProducts) dispatch(loadProducts(restaurantId));
  }, [restaurantId]);

  if (!productIds?.length) return null;

  return <Menu isLoading={isLoading} productIds={productIds} className={className} />
};
