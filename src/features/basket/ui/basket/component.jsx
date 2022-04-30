import { BasketProduct } from '../basket-product/component';
import classnames from "classnames";
import { BasketItem } from "../basket-item/component";

import styles from "./styles.module.scss";


export const Basket = ({ products, onClearBasket, className }) => (
  <div className={classnames(styles.root, className)}>
    <div className={styles.title}>Your basket</div>
    <div className={styles.products}>
      {/* {
        basketArr?.map(product => !!product?.amount && <BasketProduct
          key           = {product.id}
          productId     = {product.id}
          productAmount = {product.amount}
        />)
      } */}
      {products?.length > 0 ? (
          products.map((product) => (
            <BasketItem
              {...product}
              key={product.name}
              className={styles.product}
            />
          ))
        ) : (
          <span>Empty</span>
        )}
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
  