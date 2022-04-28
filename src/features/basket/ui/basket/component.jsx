import classnames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export const Basket = ({ className, products, resetBasket }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span>Basket</span>
      {products?.map((product, index) => (
        <div key={index} className={styles.products}>
          <span>{product.name}</span>
          <span>{product.amount}</span>
        </div>
      ))}
      <button onClick={resetBasket} className={styles.button}>
        Clear basket
      </button>
    </div>
  );
};
