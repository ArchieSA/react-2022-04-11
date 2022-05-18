import { Restaurants } from "./component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsRestaurantsLoading,
  selectRestaurantIds,
} from "../../module/selectors";
import { loadRestaurants } from "../../module/thunks/load-restarants";
import { useEffect } from "react";
import { loadUsers } from "../../../user/module/thunks/load-users";
import { selectIsUsersLoading } from "../../../user/module/selectors";

export const RestaurantsContainer = (props) => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const isRestaurantLoading = useSelector(selectIsRestaurantsLoading);
  const isUsersLoading = useSelector(selectIsUsersLoading);

  useEffect(() => {
    dispatch(loadRestaurants());
    dispatch(loadUsers());
  }, []);

  return isRestaurantLoading || isUsersLoading ? (
    <span>Loading</span>
  ) : (
    <Restaurants {...props} restaurantIds={restaurantIds} />
  );
};
