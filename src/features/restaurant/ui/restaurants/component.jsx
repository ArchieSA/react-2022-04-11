import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) =>
  restaurants.map((restaurant) => (
    <Restaurant restaurant={restaurant} key={restaurant.id} />
  ));
