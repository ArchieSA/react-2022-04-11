import classnames from "classnames";
import styles from "./styles.module.scss";

export const Tab = ({ label, onTabSelect, isSelected, className }) => (
  <button
    className={classnames(styles.root, className, {
      [styles.selected]: isSelected,
    })}
    onClick={onTabSelect}
  >
    {label}
  </button>
);
