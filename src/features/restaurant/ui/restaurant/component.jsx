import { Menu } from "../../../menu/ui/menu/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <span>{restaurant.name}</span>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews}/>
    </div>
  );
};
