import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant }) => {
  let getAverageValue = () => {
    if (restaurant.reviews && restaurant.reviews.length > 0) {
      let sum = restaurant.reviews
        .map((x) => x.rating)
        .reduce((prev, current) => {
          return prev + current;
        });
      return (sum / restaurant.reviews.length).toFixed(1);
    }
  };
  return (
    <div>
      <div>
        <span>Рейтинг: </span>
        <span>
          <Rate value={getAverageValue()} />
        </span>
      </div>
      <h1>{restaurant.name}</h1>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
