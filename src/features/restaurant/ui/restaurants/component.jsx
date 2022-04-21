import { useState } from "react";
import { Restaurant } from "../restaurant/component";
import s from './styles.module.scss';


export const Restaurants = ({ restaurants }) => {
  if (!restaurants?.length) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [restaurant, setRestaurant] = useState(0);

  const handleClick = (e) => {
    const idx = restaurants.findIndex(r => r.id === e.target.value);
    if (idx !== -1) setRestaurant(idx);
  };


  return (
    <div>
      <div className={s.restaurants}>
        {
          restaurants.map(r => <button
            key       = {r.id}
            value     = {r.id}
            className = {s.button}
            onClick   = {handleClick}
          >
            {r.name}
          </button>)
        }
      </div>
      <Restaurant restaurant={restaurants[restaurant]} />
    </div>
  );
};
