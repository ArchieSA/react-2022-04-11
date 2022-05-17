import { useDispatch, useSelector } from "react-redux";
import { setCurrentRoute } from "../../features/route/module/actions";
import { useCallback } from "react";

export const Link = ({ label, isSelected, className, href }) => {
  const currentRoute = useSelector((state) => state.route.currentRoute);
  const dispatch = useDispatch();

  const onClick = useCallback(
    (event, restrauntId) => {
      event.preventDefault();
      window.history.pushState(null, "", href);
      dispatch(setCurrentRoute(href));
    },
    [currentRoute]
  );

  return (
    <a className={className} href={href} onClick={onClick}>
      {label}
    </a>
  );
};
