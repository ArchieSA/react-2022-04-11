import { Restaurant } from "../restaurant/component";
import { useState } from "react";
import { Tabs } from "../../../tabs/ui/tabs/component";

export const Restaurants = ({ restaurants }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0]?.id
  );

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div>
      <Tabs
        tabs={restaurants.map(({ name, id }) => ({ label: name, id }))}
        selectedId={currentRestaurantId}
        onTabSelect={setCurrentRestaurantId}
      />
      <Restaurant
        restaurant={restaurants.find(({ id }) => id === currentRestaurantId)}
      />
    </div>
  );
};
