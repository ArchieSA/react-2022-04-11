import {useState} from 'react';

import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {

    let [currentRestaurant, selectRestaurant]=useState(0);

    const selectRestaurants=restaurants.map((el,ind)=>{
        return <button  onClick={()=>selectRestaurant(currentRestaurant=ind)} key={el.id}>{el.name}</button>
    })

    return (
        <div>
          {selectRestaurants}
          <Restaurant restaurant={restaurants[currentRestaurant]} />
        </div>
    );
};
