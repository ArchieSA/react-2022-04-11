import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { routeSlice } from '../../module';
import { Link } from "./component";


export const LinkContainer = ({ onClick, href, ...props }) => {
  const dispatch = useDispatch();

  const handleOnClick = useCallback((e) => {
    e.preventDefault();

    const url = e.target.getAttribute(`href`);
    window.history.pushState({ route: href }, "", url);
    dispatch(routeSlice.actions.changeRoute(window.history.state.route));
    onClick && onClick();
  }, []);

  return <Link
    {...props}
    href={href}
    onClick={handleOnClick}
  />
}
