import { Restaurant } from "../restaurant/component";
import {useState} from 'react';

export const Restaurants = ({ restaurants }) => {
  const buttonsRestaurant = [];
  let [index,setIndex] = useState(0);
  for (let i=0;i<restaurants.length;i++){
    buttonsRestaurant.push(<button key={restaurants[i].id} onClick={()=>setIndex(i)}>{restaurants[i].name}</button>)
  }
  return (
    <div>
      {buttonsRestaurant}
      <div> 
        <Restaurant restaurant={restaurants[index]}/>
      </div>
    </div>
  );
};
