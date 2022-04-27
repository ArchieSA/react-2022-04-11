import { useMemo } from 'react';
import { BasketProduct } from '../basket-product/component';
import { arrFromBasket } from '../../utils';
import classnames from "classnames";
import styles from "./styles.module.scss";


export const Basket = ({ basket, onClearBasket, className }) => {
  const basketArr = useMemo(() => arrFromBasket(basket), [basket]);

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.title}>Your basket</div>
      <div className={styles.content}>
        {
          basketArr?.map(product => <BasketProduct key={product.id} product={product} />)
        }
      </div>
      <div className={styles.actions}>
        <button onClick={onClearBasket}>Clear basket</button>
      </div>
    </div>
  );
};
