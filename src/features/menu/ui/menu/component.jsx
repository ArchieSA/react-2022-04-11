import classnames from "classnames";
import styles from "./styles.module.scss";
import { ProductContainer } from "../product/container";

export const Menu = ({ productIds, className }) => (
  <div className={classnames(styles.root, className)}>
    <span className={styles.menuTitle}>Menu</span>
<<<<<<< HEAD
    {
      productIds?.length && productIds.map((productId) => (
        <ProductContainer
          key       = {productId}
          productId = {productId}
          className = {styles.product}
        />
      ))
    }
=======
    {productIds.map((productId) => (
      <ProductContainer
        key={productId}
        productId={productId}
        className={styles.product}
      />
    ))}
>>>>>>> 0ac8f344a6ef9c343ba967842f202e2933922b5b
  </div>
);
