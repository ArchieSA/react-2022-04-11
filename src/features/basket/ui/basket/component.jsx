import classnames from "classnames";
import { BasketItemContainer } from '../basket-item/container';
import styles from "./styles.module.scss";


export const Basket = ({ products, onClearBasket, className }) => (
  <div className={classnames(styles.root, className)}>
    <div className={styles.title}>Your basket</div>
    <div className={styles.products}>
      {
        products?.map(product => !!product?.count && <BasketItemContainer
          key={product.id}
          {...product}
        />)
      }
    </div>

    <button
      onClick   = {onClearBasket}
      className = {styles.clearAction}
      disabled  = {products?.length <= 0}
    >
      Clear
    </button>
  </div>
);
  