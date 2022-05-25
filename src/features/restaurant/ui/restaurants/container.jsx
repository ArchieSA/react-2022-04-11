import { Restaurants } from "./component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsRestaurantsLoading,
  selectRestaurantIds,
} from "../../module/selectors";
import { loadRestaurants } from "../../module/thunks/load-restarants";
import { useEffect } from "react";
import { loadUsers } from '../../../user/module/thunk/load-users';
import { selectUserIds } from '../../../user/module/selectors';

export const RestaurantsContainer = (props) => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const isLoading = useSelector(selectIsRestaurantsLoading);
  const userIds = useSelector(selectUserIds);

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);



  return isLoading ? (
    <span>Loading</span>
  ) : (
    <Restaurants {...props} restaurantIds={restaurantIds}/>
  );
};
