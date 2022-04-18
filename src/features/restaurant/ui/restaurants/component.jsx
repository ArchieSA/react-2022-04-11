import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  return (
    <div>
      <Restaurant restaurant={restaurants[1]} />
    </div>
  );
};
