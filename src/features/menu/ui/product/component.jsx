import classnames from "classnames";
import { useAmount } from "../../hooks/use-amount";
import styles from "./styles.module.scss";

export const Product = ({ productName, className }) => {
  const { count, decrement, increment } = useAmount(0);

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
