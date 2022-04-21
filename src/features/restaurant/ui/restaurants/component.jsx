import { Restaurant } from "../restaurant/component";
import { useState } from "react";

export const Restaurants = ({ restaurants }) => {
  const [index, setIndex] = useState();

  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <button key={restaurant.id} onClick={() => setIndex(index)}>
          {restaurant.name}
        </button>
      ))}
      <Restaurant restaurant={restaurants[index]} />
    </div>
  );
};
