import styles from "./styles.module.scss";

export const BasketItem = ({ name, count }) => {
  return (
    <div className={styles.root}>
      <div className={styles.productName}>{name}</div>
      <div className={styles.productCount} data-testid="count">{count}&nbsp;th.</div>
    </div>
  );
};
