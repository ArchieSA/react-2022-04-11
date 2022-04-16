import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";

export const Restaurant = ({ restaurant }) => {
  const ratingCount = restaurant.reviews.reduce((sum, { rating }) => sum + rating, 0) / restaurant.reviews.length
  return (
    <div><ul>
      <li><span>{restaurant.name}</span></li>
      <li><Menu menu={restaurant.menu} /></li>
      <li><Rate value={ratingCount}/></li>
      </ul>
    </div>
  );
};
