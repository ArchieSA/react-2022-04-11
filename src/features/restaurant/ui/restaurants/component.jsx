import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { Outlet } from "react-router-dom";

export const Restaurants = ({ restaurantIds }) => {
  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <div>
      <RestaurantTabsContainer />
      <Outlet />
    </div>
  );
};
