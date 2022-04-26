import { useMemo } from "react";
import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";
import { NewReview } from "../../../review/ui/new-review/component";

import styles from "./styles.module.scss";
import { Basket } from "../../../basket/ui/basket/component";

export const Restaurant = ({ restaurant }) => {
  const restaurantRate = useMemo(
    () =>
      Math.ceil(
        restaurant.reviews.reduce((prev, curr) => prev + curr.rating, 0) /
          restaurant.reviews.length
      ),
    [restaurant.reviews]
  );

  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        <Rate value={restaurantRate} />
      </div>
      <div className={styles.detailedInfo}>
        <Menu menu={restaurant.menu} className={styles.menu} />
        <div className={styles.reviews}>
          <Reviews reviews={restaurant.reviews} />
          <NewReview />
        </div>
        <Basket className={styles.basket} />
      </div>
    </div>
  );
};
