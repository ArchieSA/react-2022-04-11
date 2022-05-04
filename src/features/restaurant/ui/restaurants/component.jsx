import { useState } from "react";
import { RestaurantContainer } from "../restaurant/container";

export const Restaurants = ({ restaurantIds }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurantIds[0]
  );

  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <div>
      {/*<Tabs*/}
      {/*  tabs={restaurants.map(({ name, id }) => ({ label: name, id }))}*/}
      {/*  selectedId={currentRestaurantId}*/}
      {/*  onTabSelect={setCurrentRestaurantId}*/}
      {/*/>*/}
      <RestaurantContainer restaurantId={currentRestaurantId} />
    </div>
  );
};
