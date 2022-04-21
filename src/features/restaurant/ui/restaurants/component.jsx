import { useState } from "react";
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  let [rest, setRest] = useState(restaurants[0].name);
  const currRestaurant = restaurants.find(
    (restaurant) => restaurant.name === rest
  );
  console.log(rest);
  return (
    <div>
      <nav>
        <ul>
          {restaurants.map(({name,id}) => {
            return (<li key={id}><button onClick={()=> setRest(name)}>{name}</button></li>)
          })}
        </ul>
      </nav>
      <Restaurant restaurant={currRestaurant} />
    </div>
  );
};
