import { Menu } from "../../../menu/ui/menu/component";
import {Rate} from "../../../rate/ui/rate/component";
import {Reviews} from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant }) => {
  const rating = (restaurant.reviews.reduce((sum, current) => sum + current.rating, 0)) / restaurant.reviews.length

  return (
    <div>
      <span>{restaurant.name}</span>
      <Menu menu={restaurant.menu} />
      <Rate value={rating} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
