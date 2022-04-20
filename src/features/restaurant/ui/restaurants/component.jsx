import { useState } from "react";
import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  let [currentIndexOfRestraunt, setCurrentIndexOfRestraunt] = useState(0);
  return (
    <div>
      <div>
        {restaurants.map((restaurant, index) => {
          return (
            <div key={restaurant.id}>
              <span>{restaurant.name}</span>
              <span>
                <button
                  onClick={() => {
                    setCurrentIndexOfRestraunt(index);
                  }}
                >
                  Выбрать
                </button>
              </span>
            </div>
          );
        })}
      </div>
      <hr />
      <Restaurant restaurant={restaurants[currentIndexOfRestraunt]} />
    </div>
  );
};
