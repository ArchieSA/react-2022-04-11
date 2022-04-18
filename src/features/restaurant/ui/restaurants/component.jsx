import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  return (
    <Restaurant restaurant={restaurants[0]} />
  );
};
