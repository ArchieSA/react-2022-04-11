import { Menu } from "../../../menu/ui/menu/component";
import { Rate } from "../../../rate/ui/rate/component";
import { Reviews } from "../../../review/ui/reviews/component";

export const Restaurant = ({ restaurant }) => {
    const rating = restaurant.reviews.reduce((sum, current) =>
        sum + current.rating / restaurant.reviews.length, 0);

      return (
        <div>
          <span>Name of restaurant: {restaurant.name}</span>
            <Rate value={rating}></Rate>
          <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews}></Reviews>
        </div>
      );
};
