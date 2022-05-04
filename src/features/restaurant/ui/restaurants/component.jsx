import { useState } from "react";
import { RestaurantContainer } from "../restaurant/container";
import { TabsContainer } from "../../../tabs/ui/tabs/container";

export const Restaurants = ({ restaurantIds }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(restaurantIds[0]);

  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <div>
      <TabsContainer
        tabIds={restaurantIds}
        selectedId={currentRestaurantId}
        onTabSelect={setCurrentRestaurantId}
      />
      <RestaurantContainer restaurantId={currentRestaurantId} />
    </div>
  );
};
