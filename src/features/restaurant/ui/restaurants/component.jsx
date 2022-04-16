import { Restaurant } from "../restaurant/component";


export const Restaurants = ({ restaurants }) => {
  console.log('restaurants: ', restaurants);
  if (!restaurants?.length) return null;

  return (
    <>
      <Restaurant restaurant={restaurants[0]} />
    </>
  );
};
