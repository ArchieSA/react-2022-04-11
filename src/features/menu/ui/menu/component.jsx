import classnames from "classnames";
import styles from "./styles.module.scss";
import { ProductContainer } from "../product/container";
import { ProductInfoContainer } from "../product/info/container";

export const RestrauntMenu = ({ productIds, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.menuTitle}>Menu</span>
      {(productIds || []).map((productId) => (
        <ProductContainer key={productId} productId={productId} className={styles.product} />
      ))}
    </div>
  );
};

export const Menu = ({ productIds, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.menuTitle}>Menu</span>
      {(productIds || []).map((productId) => (
        <ProductInfoContainer key={productId} productId={productId} className={styles.product} />
      ))}
    </div>
  );
};
