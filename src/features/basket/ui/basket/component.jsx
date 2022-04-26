import classnames from "classnames";
import styles from "./styles.module.scss";

export const Basket = ({ className, products, clearBasket }) => {
    let ordered = [];
    for (let key in products) {
        ordered.push(<>{key} - {products[key]}</>)
    }

  return (
    <div className={classnames(styles.root, className)}>
      <span>Basket</span>
        <button className={styles.clearBasket} onClick={clearBasket}>Clear Basket</button>
        <div className={styles.orderedFood}>
        {ordered.map((food, index) => (
            <span key={index}>
            {food}
            </span>
        ))}
        </div>
    </div>
  );
};
