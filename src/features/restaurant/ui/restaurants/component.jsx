import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  return (
    <div>
      <Restaurant {...restaurants[0]} />
    </div>
  );
};
