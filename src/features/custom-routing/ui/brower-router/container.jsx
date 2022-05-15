import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { routeSlice } from "../../module";

export const BrowserRouter = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(routeSlice.actions.changeRoute(window.location?.pathname));
  }, []);

  return (
    <>
      {children}
    </>
  )
};
