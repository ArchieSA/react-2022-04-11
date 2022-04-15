import { Menu } from "../../../menu/ui/menu/component";
import { Reviews } from "../../../review/ui/reviews/component";
import { Rate } from "../../../rate/ui/rate/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
		  <span>{restaurant.name}</span>
		  <Rate ratings={restaurant.reviews}/>
		  <Menu menu={restaurant.menu} />
		  <Reviews reviews={restaurant.reviews}  />
    </div>
  );
};
