import { BasketContainer } from "../../../basket/ui/basket/container";
import { MenuContainer } from "../../../menu/ui/menu/container";
import { Rate } from "../../../rate/ui/rate/component";
import { NewReviewContainer } from "../../../review/ui/new-review/container";
import { Reviews } from "../../../review/ui/reviews/component";
import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant, restaurantRate }) => {
  return (
    <div className={styles.root} data-testid="restaurant-element">
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rate value={restaurantRate} />
      </div>
      <div className={styles.detailedInfo}>
        <MenuContainer productIds={restaurant.menu} className={styles.menu} />
        <div className={styles.reviews}>
          <Reviews reviewIds={restaurant.reviews} />
          <NewReviewContainer restaurantId={restaurant.id} />
        </div>
        <BasketContainer className={styles.basket} />
      </div>
    </div>
  );
};
