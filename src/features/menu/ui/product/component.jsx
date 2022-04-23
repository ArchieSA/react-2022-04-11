import classnames from "classnames";
import styles from "./styles.module.scss";
import { useState } from "react";

export const Product = ({ product, className }) => {
  let [count, setCount] = useState(0);

  return (
    <div className={classnames(styles.root, className)}>
      <span>{product.name}</span>
      <div className={styles.actions}>
        <button
          onClick={() => setCount(count - 1)}
          className={styles.action}
          disabled={count <= 0}
        >
          -
        </button>
        <div className={styles.count}>{count}</div>
        <button
          onClick={() => setCount(count + 1)}
          className={styles.action}
          disabled={count >= 25}
        >
          +
        </button>
      </div>
    </div>
  );
};
