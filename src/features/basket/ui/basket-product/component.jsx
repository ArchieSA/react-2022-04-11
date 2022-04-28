import { useMemo } from 'react';
import { getProductNameById } from '../../utils';
import styles from "./styles.module.scss";


export const BasketProduct = ({ productId, productAmount }) => {
  const productName = getProductNameById(productId);

  return (
    <div className={styles.root}>
      <div className={styles.productName}>{productName}</div>
      <div className={styles.productAmount} data-testid="amount">{productAmount}&nbsp;th.</div>
    </div>
  );
};
