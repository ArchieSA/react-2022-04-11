import { Restaurants } from "./component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsRestaurantsLoading,
  selectRestaurantIds,
} from "../../module/selectors";
import { loadRestaurants } from "../../module/thunks/load-restarants";
import { useEffect } from "react";

export const RestaurantsContainer = (props) => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const isLoading = useSelector(selectIsRestaurantsLoading);

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  return isLoading ? (
    <span>Loading</span>
  ) : (
    <Restaurants {...props} restaurantIds={restaurantIds} />
  );
};
