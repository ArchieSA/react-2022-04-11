import { Menu } from "../../../menu/ui/menu/component";
import { BasketContainer } from "../../../basket/ui/basket/container";
import styles from "./styles.module.scss";
import { NewReviewContainer } from "../../../review/ui/new-review/container";
import { RestaurantRatingContainer } from "../restaurant-rating/container";
import { ReviewsContainer } from "../../../review/ui/reviews/container";


export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <RestaurantRatingContainer restaurantId={restaurant.id} />
      </div>
      <div className={styles.detailedInfo}>
        <Menu
          key={restaurant.id}
          productIds={restaurant.menu}
          restaurantId={restaurant.id}
          className={styles.menu}
        />
        <div className={styles.reviews}>
          <ReviewsContainer
            reviewIds={restaurant.reviews}
            restaurantId={restaurant.id}
          />
          <NewReviewContainer restaurantId={restaurant.id} />
        </div>
        <BasketContainer className={styles.basket} />
      </div>
    </div>
  );
};
