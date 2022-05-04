import classnames from "classnames";

import styles from "./styles.module.scss";

export const BasketItem = ({ name, count, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.name}>{name}</span>
      <span className={styles.count}>{count}</span>
    </div>
  );
};
