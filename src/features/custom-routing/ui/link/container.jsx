import { Link } from "./component";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { routeSlice } from "../../module";

export const LinkContainer = ({ onClick, href, ...props }) => {
  const dispatch = useDispatch();

  const onLinkClick = useCallback((event) => {
    event.preventDefault();
    const url = event.target.getAttribute("href");

    window.history.pushState({ route: href }, "", url);
    dispatch(routeSlice.actions.changeRoute(window.history?.state?.route));

    if (onClick) {
      onClick();
    }
  }, []);

  return <Link href={href} onClick={onLinkClick} {...props} />;
};
