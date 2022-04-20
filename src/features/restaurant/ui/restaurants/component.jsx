import { useState } from "react";
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0])
    return (
    <div>
      <div>
          {restaurants.map((restaurant) => 
            <button key={restaurant.id} onClick={() => setSelectedRestaurant(restaurant)}>{restaurant.name}</button>
          )}
      </div>
      <Restaurant restaurant={selectedRestaurant} />
    </div>
    )
}
