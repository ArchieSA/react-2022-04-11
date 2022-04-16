import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant }) => {
  const reviews = restaurant.reviews;
  const overallRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
  ).toFixed(1);
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <span>
        Overall rating: <Rate value={overallRating} />
      </span>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
