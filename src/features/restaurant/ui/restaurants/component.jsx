import { Restaurant } from "../restaurant/component";
import { useState } from "react";

export const Restaurants = ({ restaurants }) => {
  let [active, setActive] = useState(0);

  return (
    <div>
      {restaurants.length && restaurants.map((restaurant, index) => (
        <button key={restaurant.id} onClick={() => setActive(index)}>
          {restaurant.name}
        </button>
      ))}

      <hr />
      
      <Restaurant restaurant={restaurants[active]} />
    </div>
  );
};
