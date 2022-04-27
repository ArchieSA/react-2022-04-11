import classnames from "classnames";
import styles from "./styles.module.scss";

export const Basket = ({ className, products, clearBasket }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.header}>
        <span>Basket</span>
        <button onClick={clearBasket}>Очистить корзину</button>
      </div>
      <div className={styles.body}>
        {products.map((product, index) => (
          <div key={index}>
            <span>{product.name}</span>
            <span className={styles.amount}>{product.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
