import { Menu } from "../../../menu/ui/menu/component";
import { Reviews } from "../../../review/ui/reviews/component";
import { Rate } from "../../../rate/ui/rate/component";

export const Restaurant = ({ restaurant }) => {


	const calculateAverageRating = () => {

		let averageRating = restaurant?.reviews?.reduce((r, i) => r + i.rating, 0) / restaurant?.reviews?.length;
	
		if (averageRating?.toString().split('.').pop().length > 1) {
			return averageRating.toFixed(1)
		}

		return averageRating;
	}
		
  return (
    <div>
		  <span>{restaurant.name}</span>
		  <Rate value={calculateAverageRating()} ratings={restaurant.reviews} />
		  <Menu menu={restaurant.menu} />
		  <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
