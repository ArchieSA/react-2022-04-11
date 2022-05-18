import { BasketContainer } from "../../../basket/ui/basket/container";

import styles from "./styles.module.scss";
import { NewReviewContainer } from "../../../review/ui/new-review/container";
import { RestaurantRatingContainer } from "../restaurant-rating/container";
import { MenuContainer } from "../../../menu/ui/menu/container";
import { ReviewsContainer } from "../../../review/ui/reviews/container";

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <RestaurantRatingContainer restaurantId={restaurant.id} />
      </div>
      <div className={styles.detailedInfo}>
        <MenuContainer
          restaurantId={restaurant.id}
          productIds={restaurant.menu}
          className={styles.menu}
        />
        <div className={styles.reviews}>
          <ReviewsContainer reviewIds={restaurant.reviews} />
          <NewReviewContainer restaurantId={restaurant.id} />
        </div>
      </div>
    </div>
  );
};
