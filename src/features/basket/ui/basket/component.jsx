import classnames from "classnames";
import styles from "./styles.module.scss";

export const Basket = ({ className, productsInfo, basketClear }) => {
  // на сколько правильно так работать с дом, по сути у нас два раза повторяется `<div>Please choose products</div>`
  // есть ли какие то варианты оптимизировать?
  if (!productsInfo.length)
    return (
      <div className={classnames(styles.root, className)}>
        <div>Please choose products</div>
      </div>
    );

  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.header}>Basket</span>
      {productsInfo.map(({ product, qty }) => (
        // верно ли я понимаю, что ключ не уникальный, так как мы так же используем такой же ID в комоненте продутка ?
        <div className={styles.item} key={product.id}>
          <span className={styles.name}>{product.name}</span> {qty}
        </div>
      ))}

      <button onClick={basketClear}>CancelOrder</button>
    </div>
  );
};
