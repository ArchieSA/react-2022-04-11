import { Restaurants } from "./component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsRestaurantsLoading,
  selectRestaurantIds,
} from "../../module/selectors";
import { loadRestaurants } from "../../module/thunks/load-restarants";
import { useEffect } from "react";
import { SpinnerLoader } from '../../../spinner/component';
import { useCheckPermission } from '../../../authorization/hooks/use-permissions';


export const RestaurantsContainer = (props) => {
  const
    dispatch      = useDispatch(),
    restaurantIds = useSelector(selectRestaurantIds),
    isLoading     = useSelector(selectIsRestaurantsLoading);

  useCheckPermission(123);

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  return isLoading ? (
    <SpinnerLoader isLoading={isLoading} text='данных'/>
  ) : (
      <Restaurants
        {...props}
        restaurantIds = {restaurantIds}
      />
  );
};
