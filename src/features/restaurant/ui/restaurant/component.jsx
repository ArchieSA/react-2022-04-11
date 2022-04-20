import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";
import { NewReview } from "../../../review/ui/new-review/new-review";

export const Restaurant = ({ restaurant }) => {
  const restaurantRate = Math.ceil(
    restaurant.reviews.reduce((prev, curr) => prev + curr.rating, 0) /
      restaurant.reviews.length
  );

  return (
    <div>
      <span>{restaurant.name}</span>
      <Rate value={restaurantRate} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <NewReview/>
    </div>
  );
};
