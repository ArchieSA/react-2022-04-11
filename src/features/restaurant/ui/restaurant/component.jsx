import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant: { name, menu, reviews } }) => (
  <div>
    <span>{name}</span>
    <Menu menu={menu} />
    <Rate
      rating={
        reviews.reduce((prev, curr) => prev + curr.rating, 0) / reviews.length
      }
    ></Rate>
    <Reviews reviews={reviews}></Reviews>
  </div>
);
