import {useState} from 'react';
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
    const [i, SetRestaurant] = useState(0);

  return (
    <div>
        {restaurants.map((restaurant, i) => (
            <button key={restaurant.id} onClick={() => SetRestaurant(i)}> {restaurant.name} </button>
        ))};
        <Restaurant restaurant={restaurants[i]} />
    </div>
  );
};
