import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";
import { NewReview } from "../../../review/ui/new-review/new-review";

import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  const restaurantRate = Math.ceil(
    restaurant.reviews.reduce((prev, curr) => prev + curr.rating, 0) /
      restaurant.reviews.length
  );

  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rate value={restaurantRate} />
      </div>
      <div className={styles.detailedInfo}>
        <Menu menu={restaurant.menu} className={styles.menu} />
        <Reviews reviews={restaurant.reviews} />
        <NewReview />
      </div>
    </div>
  );
};
