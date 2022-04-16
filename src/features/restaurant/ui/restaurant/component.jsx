import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component"
import { Reviews } from "../../../review/ui/reviews/component";


export const Restaurant = ({ restaurant }) => {
  let avg = restaurant.reviews.reduce((acc,next)=>{
    return acc += next.rating },0)/restaurant.reviews.length;
  return (
    <div>
      <span>{restaurant.name} </span>
      <Rate value = {avg}/>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews}/>
    </div>
  );
};
