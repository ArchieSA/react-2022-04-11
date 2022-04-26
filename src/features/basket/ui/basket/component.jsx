import classnames from "classnames";
import styles from "./styles.module.scss";

export const Basket = ({ className, products, reset }) => {
  
  return (
    <div className={classnames(styles.root, className)}>
      <span>Basket</span>
      basket
      <ul>
        {
          products && Object.entries(products).map(([product, qty])=>(
            <li className={styles.item}>
              <div >
                <span>{product}</span><span>{qty}</span>
              </div>
            </li>
          ))}
      </ul>
      <button onClick={reset}className={styles.btn}>Reset order</button>
    </div>
  );
};
