import styles from './styles.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const Tab = ({ label, href, className }) => {
  return(
    <NavLink
      to={href}
      className={({ isActive }) => cn(
        styles.root,
        { [styles.selected]: isActive },
        className)}
    >
      {label}
    </NavLink>
  );
};
