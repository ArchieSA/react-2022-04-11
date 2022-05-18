import { useSelector } from "react-redux";
import { selectCurrentRoute } from "../module/selectors";

export function useRoute() {
  const route = useSelector(selectCurrentRoute);

  return {
    baseRoute: route,
  };
}
