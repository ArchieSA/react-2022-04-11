import { useRoute } from "../../custom-routing/hooks/use-route";

export function useCurrentRestaurantId() {
  const route = useRoute();
  const routParts = route.baseRoute.split("/");

  return routParts[routParts.length - 1];
}
