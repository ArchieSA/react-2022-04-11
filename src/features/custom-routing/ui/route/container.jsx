import { useRoute } from "../../hooks/use-route";

export const Route = ({ children, route }) => {
  const currentRoute = useRoute();

  return currentRoute.baseRoute.includes(route) ? <>{children}</> : null;
};
