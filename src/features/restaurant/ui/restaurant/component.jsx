import { Menu } from "../../../menu/ui/menu/component";
import { Reviews } from "../../../review/ui/reviews/component";
import { Rate } from "../../../rate/ui/rate/component";


export const Restaurant = ({ restaurant }) => {

  let {reviews} = restaurant;
  let reviewsRate= reviews.map(item => item.rating);
  let rating = reviewsRate.reduce((sum, current)=> (sum + current)) / reviewsRate.length;

  return (
    <div>
      <span>{restaurant.name}</span>
      <Rate value ={rating}/>
      <Menu menu={restaurant.menu} />
      <Reviews reviews = {restaurant.reviews}/>
    </div>
  );
};
