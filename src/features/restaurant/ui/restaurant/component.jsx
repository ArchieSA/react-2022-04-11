import { useMemo } from "react";
import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";
import { BasketContainer } from "../../../basket/ui/basket/container";

import styles from "./styles.module.scss";
import { NewReviewContainer } from "../../../review/ui/new-review/container";

export const Restaurant = ({ restaurant }) => {
  // const restaurantRate = useMemo(
  //   () =>
  //     Math.ceil(
  //       restaurant.reviews.reduce((prev, curr) => prev + curr.rating, 0) /
  //         restaurant.reviews.length
  //     ),
  //   [restaurant.reviews]
  // );

  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <span className={styles.restaurantName}>{restaurant.name}</span>
        {/*<Rate value={restaurantRate} />*/}
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
