import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const NotFoundPage = () => (
  <div>
    <div>Not Found</div>
    <div>
      <Link to={ROUTES.Restaurants}>RestaurantPage</Link>
    </div>
  </div>
);
