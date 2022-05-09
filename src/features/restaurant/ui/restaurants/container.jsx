import { Restaurants } from "./component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsRestaurantsLoading,
  selectRestaurantIds,
} from "../../module/selectors";
import { loadRestaurants } from "../../module/thunks/load-restarants";
import { useEffect } from "react";
import { SpinnerLoader } from '../../../spinner/component';

export const RestaurantsContainer = (props) => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const isLoading = useSelector(selectIsRestaurantsLoading);

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  return isLoading ? (
    <SpinnerLoader isLoading={isLoading} text='данных'/>
  ) : (
    <Restaurants {...props} restaurantIds={restaurantIds} />
  );
};
