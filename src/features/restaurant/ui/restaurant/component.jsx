import { BasketContainer } from "../../../basket/ui/basket/container";
import styles from "./styles.module.scss";
import { NewReviewContainer } from "../../../review/ui/new-review/container";
// import { RestaurantRatingContainer } from "../restaurant-rating/container";
import { ReviewsContainer } from "../../../review/ui/reviews/container";
import { MenuContainer } from "../../../menu/ui/menu/container";

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
         {/* <RestaurantRatingContainer restaurantId={restaurant.id} />  не успевал нормально подумать над этим, ломался подсчет рейтинга*/} 
      </div>
      <div className={styles.detailedInfo}>
        <MenuContainer restaurantID={restaurant.id} className={styles.menu} />
        <div className={styles.reviews}>
          <ReviewsContainer reviewIds={restaurant.reviews} restaurantId={restaurant.id} />
          <NewReviewContainer restaurantId={restaurant.id} />
        </div>
        <BasketContainer className={styles.basket} />
      </div>
    </div>
  );
};
