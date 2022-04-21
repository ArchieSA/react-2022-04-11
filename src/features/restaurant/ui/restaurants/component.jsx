import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  let selectedRestaurant = "";

  return (
    <div>
      <button onClick={() => {selectedRestaurant=restaurants[0]}} type="button">{restaurants[0].name}</button>
      <Restaurant restaurant={restaurants[0]} />
    </div>
  );
};
