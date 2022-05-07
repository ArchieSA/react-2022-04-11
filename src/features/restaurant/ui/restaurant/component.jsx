import { Menu } from "../../../menu/ui/menu/component";
import { Reviews } from "../../../review/ui/reviews/component";
import { BasketContainer } from "../../../basket/ui/basket/container";
import { NewReviewContainer } from "../../../review/ui/new-review/container";
import { RestaurantRatingContainer } from "../restaurant-rating/container";
import styles from './styles.module.scss';

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <RestaurantRatingContainer restaurantId={restaurant.id} />
      </div>
      <div className={styles.detailedInfo}>
        <Menu productIds={restaurant.menu} className={styles.menu} />
        <div className={styles.reviews}>
          <Reviews reviewIds={restaurant.reviews} />
          <NewReviewContainer restaurantId={restaurant.id} />
        </div>
        <BasketContainer className={styles.basket} />
      </div>
    </div>
  );
};
