import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant }) => {

  const rating = Math.round(restaurant.reviews.map((review) => review.rating).reduce((a, b) => (a + b)) / restaurant.reviews.length )

  return (
    <div>
      <span>{restaurant.name}</span>
      <Menu menu={restaurant.menu} />
      <Rate value={rating} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
