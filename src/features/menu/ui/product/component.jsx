import classnames from "classnames";
import styles from "./styles.module.scss";
import { useAmount } from "../../hooks/use-amount";

export const Product = ({ productName, className }) => {
  const { count, decrement, increment } = useAmount();

  return (
    <div className={classnames(styles.root, className)}>
      <span>{productName}</span>
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
};
