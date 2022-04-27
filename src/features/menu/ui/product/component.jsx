import classnames from "classnames";
import styles from "./styles.module.scss";

export const Product = ({
  product,
  className,
  count,
  decrement,
  increment,
}) => (
  <div className={classnames(styles.root, className)}>
    <span>{product.name}</span>
    <div className={styles.actions}>
      <button
        onClick={decrement}
        className={styles.action}
        disabled={count <= 0}
      >
        -
      </button>
      <div className={styles.count}>{count}</div>
      <button
        onClick={increment}
        className={styles.action}
        disabled={count >= 25}
      >
        +
      </button>
    </div>
  </div>
);
