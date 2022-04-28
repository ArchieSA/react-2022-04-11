import { BasketProduct } from '../basket-product/component';
import classnames from "classnames";
import styles from "./styles.module.scss";


export const Basket = ({ basketArr, onClearBasket, className }) => (
  <div className={classnames(styles.root, className)}>
    <div className={styles.title}>Your basket</div>
    <div className={styles.content}>
      {
        basketArr?.map(product => !!product?.amount && <BasketProduct
          key           = {product.id}
          productId     = {product.id}
          productAmount = {product.amount}
        />)
      }
    </div>
    <div className={styles.actions}>
      <button onClick={onClearBasket}>Clear basket</button>
    </div>
  </div>
);
  