import { Restaurants } from "./component";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../module/selectors";

export const RestaurantsContainer = (props) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return <Restaurants {...props} restaurantIds={restaurantIds} />;
};
