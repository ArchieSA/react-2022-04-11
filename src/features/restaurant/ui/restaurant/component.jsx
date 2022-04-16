import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from '../../../review/ui/reviews/component';
import { getRating } from '../../../rate/utils';



export const Restaurant = ({ restaurant }) => {

  const rating = getRating(restaurant.reviews);

  return (
    <>
      <span>{restaurant.name}</span>
      <Rate value={rating} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews}/>
    </>
  );
};
