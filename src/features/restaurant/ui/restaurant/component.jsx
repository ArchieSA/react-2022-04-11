import { MenuContainer } from "../../../menu/ui/menu/container";
import { BasketContainer } from "../../../basket/ui/basket/container";
import { ReviewsContainer } from "../../../review/ui/reviews/container";
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
        <MenuContainer restaurantId={restaurant.id} className={styles.menu} />
        <div className={styles.reviews}>
          <ReviewsContainer restaurantId={restaurant.id} />
          <NewReviewContainer restaurantId={restaurant.id} />
        </div>
        <BasketContainer className={styles.basket} />
      </div>
    </div>
  );
};
