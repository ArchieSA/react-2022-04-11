import { useEffect } from "react";
import { routeSlice } from "../../module";
import { useDispatch } from "react-redux";

export const BrowserRouter = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(routeSlice.actions.changeRoute(window.location.pathname || ""));
  }, []);

  return <>{children}</>;
};
