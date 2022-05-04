import classnames from "classnames";
import { BasketItemContainer } from "../basket-item/container";

import styles from "./styles.module.scss";

export const Basket = ({ products, onClearBasket, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.title}>Basket</span>
      <div className={styles.products}>
        {products?.length > 0 ? (
          products.map(({ id, count }) => (
            <BasketItemContainer productId={id} count={count} key={id} className={styles.product} />
          ))
        ) : (
          <span>Empty</span>
        )}
      </div>
      <button
        onClick={onClearBasket}
        className={styles.clearAction}
        disabled={products?.length <= 0}
      >
        Clear
      </button>
    </div>
  );
};
