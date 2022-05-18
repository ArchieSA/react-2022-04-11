import classnames from "classnames";
import styles from "../styles.module.scss";

export const ProductInfo = ({ productName, productPrice, productIngredients }) => {
  return (
    <div className={classnames(styles.card)}>
      <h3>{productName}</h3>
      <p>Price: {productPrice}$</p>
      <div>
        Ingredients:
        <ul>
          {productIngredients.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
