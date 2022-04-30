import styles from "./styles.module.scss";

export const BasketItem = ({ productName, count }) => {
  return (
    <div className={styles.root}>
      <div className={styles.productName}>{productName}</div>
      <div className={styles.productCount} data-testid="count">{count}&nbsp;th.</div>
    </div>
  );
};
