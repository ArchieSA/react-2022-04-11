import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";



export const Restaurant = ({ restaurant }) => {
  const sumRating = restaurant.reviews.reduce(
    (sum, item) => sum + item.rating, 0);
  const mediumRating = sumRating / restaurant.reviews.length;
  return (
    <div>
      <span>{restaurant.name}</span>
      <Rate value = {mediumRating}/>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews}/>
    </div>
  );
};