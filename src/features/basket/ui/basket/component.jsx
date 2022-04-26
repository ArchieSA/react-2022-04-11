import classnames from "classnames";
import { BasketItems } from "../basket-items/component";
import styles from "./styles.module.scss";

export const Basket = ({ className, basket, basketClear }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.basketTop}>
        <span className={styles.basketTitle}>
          Basket
          {(basket.length === 0) && (
            <span> is empty</span>
          )}  
        </span>
        {(basket.length !== 0) && (
            <button className={styles.btn} onClick={basketClear}>Clear Basket</button>
          )} 
      </div>
      <BasketItems basket={basket}/>
      
    </div>
  );
};
