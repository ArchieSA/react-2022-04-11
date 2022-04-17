import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant }) => {
  const rate = restaurant.reviews.length
      ? restaurant.reviews.reduce((sum, {rating}) => {
            sum += rating;
            return sum; }, 0) / restaurant.reviews.length
      : 0;

  return (
    <div>
      <span>{restaurant.name}</span>
      <Menu menu={restaurant.menu} />
      <div>
          <span>Рейтинг: </span>
          <Rate value={ rate.toFixed(1) } />
      </div>

      <div>
          <p>Отзывы: </p>
          <Reviews reviews={restaurant.reviews} />
      </div>
    </div>
  );
};
