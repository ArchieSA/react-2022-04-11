import classnames from "classnames";
import styles from "./styles.module.scss";

export const Basket = ({ basket, clean, className }) => {

  let products = [];
  for (const product in basket) {
    products.push(
      <div className={classnames(styles.product, className)}>
        <span>{product}</span> <span>{basket[product]}</span>
      </div>
    )
  }

  return (
    <div className={classnames(styles.root, className)}>
      {products}
      <button onClick={clean}>Очистить корзину</button>
    </div>
  );
};
