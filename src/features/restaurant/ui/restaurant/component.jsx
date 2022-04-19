import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant }) => {
  console.log(restaurant);
  const rate = restaurant.reviews.reduce((accum,item) => {
  accum += item.rating;
  return accum 
  },0) / restaurant.reviews.length;
  return (
    <div>
      <span>{restaurant.name}</span>
      <Rate rating={rate}/>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews}/>
    </div>
  );
};
