import { Restaurant } from "./component";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../module/selectors";
import { useParams } from "react-router-dom";

export const RestaurantContainer = ({ ...props }) => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, { restaurantId }));

  return <Restaurant {...props} restaurant={restaurant} />;
};
