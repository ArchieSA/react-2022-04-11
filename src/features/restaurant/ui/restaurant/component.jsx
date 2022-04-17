import { Menu } from "../../../menu/ui/menu/component";

import {Rate} from "../../../rate/ui/rate/component";

import {Reviews} from "../../../review/ui/reviews/component";


export const Restaurant = ({ restaurant}) => {
  return (
    <div>
      <span>{restaurant.name}</span>
      <Rate rate={restaurant.reviews}/>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
