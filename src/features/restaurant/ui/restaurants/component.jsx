import { useSelector } from "react-redux";
import { TabsContainer } from "../../../tabs/ui/tabs/container";
import { RestaurantContainer } from "../restaurant/container";

export const Restaurants = ({ restaurantIds }) => {
  const currentRestaurantId = useSelector((state) => {
    debugger;
    let params = state.route.currentRoute.split("/");
    return params[params.length - 1] || restaurantIds[0];
  });

  return (
    <div>
      <TabsContainer tabIds={restaurantIds} selectedId={currentRestaurantId} />
      <RestaurantContainer restaurantId={currentRestaurantId} />
    </div>
  );
};
