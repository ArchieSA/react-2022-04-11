import {useState} from 'react';
import { Restaurant } from "../restaurant/component";


export const Restaurants = ({ restaurants }) => {
  let [count, setCount] = useState(0);
  // Полняла,ч то можно применить count in <Restaurant restaurant={restaurants[count]} />
  // Но вопрос, как и где применить setCount. Если он здест нужен.
  return (
    <div>
      <div>{restaurants.map((restaurant) => (
      <button key={restaurant.id}> {restaurant.name} </button>))}</div>
      <Restaurant restaurant={restaurants[count]} />
    </div>
  );
};
