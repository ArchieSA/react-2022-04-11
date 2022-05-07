import { restaurantSlice } from "../index";
import { selectRestaurantIds } from "../selectors";

export function loadRestaurants() {
  return function (dispatch, getState) {
    const restaurantIds = selectRestaurantIds(getState());

    if (restaurantIds?.length) {
      return;
    }

    dispatch(restaurantSlice.actions.startLoading(null));

    fetch("/api/restaurants")
      .then((response) => response.json())
      .then((restaurants) => {
        dispatch(restaurantSlice.actions.finishLoading(restaurants));
      })
      .catch((error) => {
        dispatch(restaurantSlice.actions.failLoading(error));
      });
  };
}
