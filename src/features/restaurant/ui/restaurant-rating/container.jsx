import { useSelector } from "react-redux";
import { selectRestaurantRating } from "../../module/selectors";
import { Rate } from "../../../rate/ui/rate/component";
import { selectIsReviewsLoading } from "../../../review/module/selectors";


export const RestaurantRatingContainer = ({ restaurantId, ...props }) => {
  const rating = useSelector((state) =>
    selectRestaurantRating(state, restaurantId)
  );
  const isReviewLoading = useSelector(selectIsReviewsLoading);

  if (isReviewLoading) {
    return <span>Loading...</span>;
  }

  if (!rating) {
    return <span>No data</span>;
  }

  return <Rate {...props} value={rating} />;
};
