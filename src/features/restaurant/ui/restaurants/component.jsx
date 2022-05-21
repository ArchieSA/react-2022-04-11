import { Outlet } from 'react-router-dom';
import { RestaurantTabsContainer } from '../restaurant-tabs/container';


export const Restaurants = ({ restaurantIds }) => {
  
  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <div>
      <RestaurantTabsContainer />
      <Outlet />
    </div>
  );
};
