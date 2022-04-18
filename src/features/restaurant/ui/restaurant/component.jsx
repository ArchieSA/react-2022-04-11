import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant: { name, reviews, menu } }) => {
  return (
    <div className="restaurant-overview">
      <h2 className="name">{name}</h2>
      
      <Rate rating={Math.ceil(reviews.reduce((prev, curr) => prev + curr.rating, 0) / reviews.length)} />
      
      <Menu menu={menu} />

      <Reviews reviews={reviews} />
    </div>
  );
};
