import { useRoute } from "../../custom-routing/hooks/use-route";

export const useCurrentRestaurantId = () => {
  const route = useRoute();
  const routeParts = route.baseRoute?.split(`/`);
  const currentRestaurantId = routeParts?.[2];

  return currentRestaurantId;
}