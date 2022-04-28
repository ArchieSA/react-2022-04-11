import classnames from "classnames";
import styles from "./styles.module.scss";

export const Basket = ({ className, basket, clear }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.basketTitle}>Basket</div>
      {Object.entries(basket).length > 0 &&
        Object.entries(basket).map((entrie) => {
          return (
            <div key={`${entrie[0]} ${entrie[1]}`}>
              {entrie[0]} - {entrie[1]}
            </div>
          );
        })}
      {Object.entries(basket).length > 0 && <button onClick={clear}>Clear</button>}
    </div>
  );
};
