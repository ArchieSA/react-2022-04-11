import { useState } from "react";
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  const selectRestaurant = (id) => {
    setActiveRestaurant(restaurants.find((item) => item.id === id));
  };
  return (
    <div>
      {restaurants.map(({ id, name }) => {
        return (
          <button key={id} onClick={() => selectRestaurant(id)}>
            {name}
          </button>
        );
      })}
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
