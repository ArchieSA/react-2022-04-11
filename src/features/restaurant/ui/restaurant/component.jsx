import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant }) => {
  const reviews = restaurant.reviews;
  const averageRate = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div>
      <span>Restaurant: {restaurant.name}</span>
      <hr/>
      Average Rating: {<Rate rate={averageRate}/>}
      <div>Menu:</div> <Menu menu={restaurant.menu} />
      <hr/>
      <div>Reviews:</div> <Reviews reviews={reviews}/>
      <hr/>
    </div>
  );
};
