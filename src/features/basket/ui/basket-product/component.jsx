import { useMemo } from 'react';
import { getProductNameById } from '../../utils';
import styles from "./styles.module.scss";


export const BasketProduct = ({ product }) => {
  const productName = useMemo(() => getProductNameById(product.id), [product]);

  if (!product.amount) return null;
  
  return (
    <div className={styles.root}>
      <div className={styles.productName}>{productName}</div>
      <div className={styles.productAmount} data-testid="amount">{product.amount}&nbsp;th.</div>
    </div>
  );
};
