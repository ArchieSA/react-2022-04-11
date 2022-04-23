import { Restaurant } from "../restaurant/component";
import { useState } from "react";

export const Restaurants = ({ restaurants }) => {
  let[state, SetRestaurats] = useState(0);

  return (
    <div>
      <button onClick={()=> SetRestaurats(state=0)}>Dishoom</button>
      <button onClick={()=> SetRestaurats(state=1)}>Homeslice</button>
      <button onClick={()=> SetRestaurats(state=2)}>Fabrique</button>
      <button onClick={()=> SetRestaurats(state=3)}>Flat Iron</button>
      <Restaurant restaurant={restaurants[state]} />
    </div>
  );
};