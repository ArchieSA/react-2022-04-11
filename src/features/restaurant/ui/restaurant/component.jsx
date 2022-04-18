import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <span>{restaurant.name}</span>
      <Menu menu={restaurant.menu} />
      <Rate value={restaurant.rate} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
