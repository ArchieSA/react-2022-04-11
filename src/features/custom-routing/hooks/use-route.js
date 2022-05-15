import { useSelector } from "react-redux";
import { selectCurrentRoute } from "../module/selectors";

export const useRoute = () => {
  const route = useSelector(selectCurrentRoute);
  // const params = route.split(`?`)[1];

  return {
    baseRoute: route,
    // params
  }
};
