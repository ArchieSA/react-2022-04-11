import { RestaurantsContainer } from "../../features/restaurant/ui/restaurants/container";
import { useCheckPermission } from "../../features/authorization/hooks/use-check-permission";

export const RestaurantsPage = () => {
  useCheckPermission();

  return <RestaurantsContainer />;
};
