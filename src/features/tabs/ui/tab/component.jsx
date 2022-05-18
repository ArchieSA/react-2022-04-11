import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import classnames from "classnames";

export const Tab = ({ href, label, className }) => (
  <NavLink
    to={href}
    className={({ isActive }) =>
      classnames(styles.root, className, {
        [styles.activeRoot]: isActive,
      })
    }
  >
    {label}
  </NavLink>
);
