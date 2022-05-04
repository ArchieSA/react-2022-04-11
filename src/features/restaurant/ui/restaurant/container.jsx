import { Restaurant } from "./component";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../module/selectors";
import { selectReviewsByIds } from "../../../review/module/selectors";
import { useMemo } from "react";

export const RestaurantContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, { restaurantId }));
  const restaurantReviews = useSelector((state) =>
    selectReviewsByIds(state, { ids: restaurant.reviews })
  );
  const restaurantRate = useMemo(() => {
    return Math.ceil(
      restaurantReviews.reduce((prev, curr) => prev + curr.rating, 0) / restaurantReviews.length
    );
  }, [restaurant.reviews]);

  return <Restaurant {...props} restaurantRate={restaurantRate} restaurant={restaurant} />;
};
