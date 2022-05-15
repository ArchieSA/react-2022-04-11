import cn from "classnames";
import styles from './styles.module.scss';

export const Link = ({ className, href, label, onClick }) => {

  return (
    <a
      href      = {href}
      onClick   = {onClick}
      className = {cn(styles.root, className)}>
      {label}
    </a>
  );
};
