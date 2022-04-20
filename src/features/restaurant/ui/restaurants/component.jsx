import { Restaurant } from "../restaurant/component";
import { useState} from "react";
import './styles.scss'
export const Restaurants = ({ restaurants }) => {
  const [active, setActive] = useState(0);
  const findRest = (id) => restaurants.findIndex(el=>el.id === id);

  const tabs = restaurants.map(el=>
  <button 
    key={el.id} 
    onClick={()=>setActive(findRest(el.id))}
    className={active === findRest(el.id)? 'active tab':'tab'}>
    {el.name}
    </button>);

  return (
    <div className="content">
      <div className="tabs">
        {tabs}
      </div>
      <Restaurant restaurant={restaurants[active]} />
    </div>
  );
};
