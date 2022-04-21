import React, { useState } from "react";
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0]);

  return (
    <>
      {restaurants.map((restaurant) => (
        <button
          onClick={() => setCurrentRestaurant(restaurant)}
          key={restaurant.id}
        >
          {restaurant.name}
        </button>
      ))}
      <Restaurant restaurant={currentRestaurant} />
    </>
  );
};
