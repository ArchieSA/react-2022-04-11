import { Restaurant } from "./component";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../module/selectors";

export const RestaurantContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  return <Restaurant {...props} restaurant={restaurant} />;
};
