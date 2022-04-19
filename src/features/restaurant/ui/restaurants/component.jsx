import { useState } from "react";
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      {/* Хотелось бы разбить это на два компонента, но пока не понял, как прокинуть useState */}
      {restaurants.map((restaurant, index) => (
        <button key={restaurant.id} onClick={() => setIndex(index)}> {restaurant.name} </button>
      ))};

      <Restaurant restaurant={restaurants[index]} />
    </div>
  );
};
