import { useEffect, useState } from "react";
import { RestaurantContainer } from "../restaurant/container";
import { RestaurantTabsContainer } from '../restaurant-tabs/container';


export const Restaurants = ({ restaurantIds }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurantIds[0]
  );

  useEffect(() => {
    setCurrentRestaurantId(restaurantIds[0]);
  }, [restaurantIds]);

  if (!restaurantIds?.length || !currentRestaurantId) {
    return null;
  }

  return (
    <div>
      <RestaurantTabsContainer
        selectedId={currentRestaurantId}
        onTabSelect={setCurrentRestaurantId}
      />
      <RestaurantContainer restaurantId={currentRestaurantId} />
    </div>
  );
};
