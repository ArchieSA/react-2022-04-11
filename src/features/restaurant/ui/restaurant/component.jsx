import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";
import { NewReview } from "../../../review/ui/new-review/new-review";
import s from './styles.module.scss';


export const Restaurant = ({ restaurant }) => {
  const restaurantRate = Math.ceil(
    restaurant.reviews.reduce((prev, curr) => prev + curr.rating, 0) /
      restaurant.reviews.length
  );

  return (
    <div className={s.root}>
      <div className={s.name}>{restaurant.name}</div>
      <Rate value={restaurantRate} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <NewReview/>
    </div>
  );
};
