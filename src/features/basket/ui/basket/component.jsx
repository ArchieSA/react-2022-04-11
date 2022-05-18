import classnames from "classnames";
import { BasketItemContainer } from "../basket-item/container";

import styles from "./styles.module.scss";

export const Basket = ({ productIds, onClearBasket, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.title}>Basket</span>
      <div className={styles.products}>
        {productIds?.length > 0 ? (
          productIds.map((productId) => (
            <BasketItemContainer
              productId={productId}
              key={productId}
              className={styles.product}
            />
          ))
        ) : (
          <span>Empty</span>
        )}
      </div>
      <button
        onClick={onClearBasket}
        className={styles.clearAction}
        disabled={productIds?.length <= 0}
      >
        Clear
      </button>
    </div>
  );
};
