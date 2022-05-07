import { useSelector } from "react-redux";
import { selectRestaurantRating } from "../../module/selectors";
import { Rate } from "../../../rate/ui/rate/component";

export const RestaurantRatingContainer = ({ restaurantId, ...props }) => {
  const rating = useSelector((state) =>
    selectRestaurantRating(state, restaurantId)
  );

  return <Rate {...props} value={rating} />;
};
