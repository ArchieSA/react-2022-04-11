import {Restaurant} from "../restaurant/component";
import {useState} from "react";

export const Restaurants = ({restaurants}) => {
    const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0]);

    return (
        <div>
            {restaurants.map((restaurant) => (
                <button onClick={() => setCurrentRestaurant(restaurant)} key={restaurant.id}>
                    {restaurant.name}
                </button>
            ))}
            <Restaurant restaurant={currentRestaurant}/>
        </div>
    );
};
