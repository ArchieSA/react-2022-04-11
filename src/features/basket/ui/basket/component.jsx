import classnames from "classnames";
<<<<<<< HEAD
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
=======

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
>>>>>>> 0ac8f344a6ef9c343ba967842f202e2933922b5b
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
  