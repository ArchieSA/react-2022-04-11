import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantRating } from "../../module/selectors";
import { Rate } from "../../../rate/ui/rate/component";
import { loadReviews } from "../../../review/module/thunks/load-reviews";
import { selectIsReviewsLoading } from "../../../review/module/selectors";
import { useEffect } from "react";

export const RestaurantRatingContainer = ({ restaurantId, ...props }) => {
  const rating = useSelector((state) =>
    selectRestaurantRating(state, restaurantId)
  );
  const dispatch = useDispatch();
  const isReviewLoading = useSelector(selectIsReviewsLoading);

  useEffect(() => {
    dispatch(loadReviews(restaurantId));
  }, [restaurantId]);

  if (isReviewLoading) {
    return <span>Loading...</span>;
  }

  if (!rating) {
    return <span>No data</span>;
  }

  return <Rate {...props} value={rating} />;
};
