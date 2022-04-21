import { Restaurant } from "../restaurant/component";
import { useState} from "react";
import './styles.scss'
export const Restaurants = ({ restaurants }) => {
  const [activeID, setActive] = useState(()=>restaurants[0].id);
  const active = restaurants.findIndex(el=>el.id === activeID);
  

  const tabs = restaurants.map(el=>
  <button 
    key={el.id}
    onClick={()=>setActive(el.id)}
    className={activeID === el.id ? 'active tab':'tab'}>
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
